<script lang="ts">
  import {
    faEnvelopesBulk,
    faEnvelopeOpenText,
    faBookBookmark,
    faMagnifyingGlass,
  } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  import { onMount } from 'svelte'
  import { _ } from 'svelte-i18n'
  import { search } from '@Api/api'
  import type { Bookmark, Item, RawItem } from '@Types/type'
  import Button from '@Tools/AwesomeButton.svelte'
  import { bookmarkStore } from '@Store/store'
  import { ApiType } from '@Api/api'
  import { v4 as uuidv4 } from 'uuid'
  import Toast from '@Tools/AwesomeToast.svelte'
  import Spinner from '@Tools/AwesomeSpinner.svelte'

  export let animate = true

  let toastVisible = false
  let filterVisible = false
  let posts = [] as Item[]
  let key: string = ''
  $: titleClass = animate ? 'some-header animate' : 'some-header'
  $: filteredPosts =
    key && key.trim().length > 0
      ? posts.filter((post: Item) => post.title.search(key) > -1)
      : posts
  $: filterToggleClass = filterVisible
    ? 'the-post-filter-toggle filter-visible'
    : 'the-post-filter-toggle'

  onMount(() => {
    search(ApiType.TODOS)
      .then((response) => {
        posts = response as Item[]
      })
      .catch((e) => {
        console.log('Something did not work')
      })
  })

  $: addedIds = $bookmarkStore.map((b: Bookmark) => b.externalId)

  const addBookmark = (item: Item) => {
    toggleToast()
    $bookmarkStore = [
      ...$bookmarkStore,
      { ...(item as RawItem), externalId: item.id, id: uuidv4() },
    ]
  }

  const toggleToast = () => {
    toastVisible = !toastVisible
    setTimeout(() => {
      toastVisible = !toastVisible
    }, 800)
  }
</script>

<div class="fake-posts">
  {#if toastVisible}
    <Toast message={$_('post-added-msg')} />
  {/if}
  <div class={titleClass}>
    <Fa icon={faEnvelopesBulk} />
    <h2>{$_('posts-page-title')}</h2>
    <button
      class={filterToggleClass}
      on:click={() => (filterVisible = !filterVisible)}
    >
      <Fa icon={faMagnifyingGlass} />
    </button>
  </div>
  {#if posts.length > 1 && filterVisible}
    <div class="a-post-filter">
      <label for="a-post-filter-key">{$_('post-filter-label')}</label>
      <input type="text" bind:value={key} name="a-post-filter-key" />
    </div>
  {/if}
  <div class="posts-in-the-list">
    {#if posts.length < 1}
      <Spinner />
    {/if}
    {#each filteredPosts as post}
      <div class="post-item">
        <Fa icon={faEnvelopeOpenText} />
        <div>{post.title}</div>
        <Button
          icon={faBookBookmark}
          btnClick={() => addBookmark(post)}
          disabled={addedIds.find((id) => id === post.id) != undefined}
        />
      </div>
    {/each}
  </div>
</div>

<style>
  .fake-posts {
    padding: 0 5rem;
  }
  .posts-in-the-list {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    justify-content: center;
    align-items: center;
    color: var(--text-color);
  }
  .some-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 2rem;
    padding: 0.5rem;
    border-bottom: 2px dashed var(--highlight-color-6);
    margin: auto;
    font-size: 2.5rem;
    flex: 1;
    color: var(--text-color);
  }
  .some-header.animate {
    animation: colorize 5s ease-in-out;
  }
  @keyframes colorize {
    from {
      color: var(--highlight-color);
    }
    to {
      color: var(--text-color);
    }
  }
  .some-header h2 {
    margin: auto;
    padding: 0;
    font-size: 2rem;
    color: var(--text-color);
  }
  .post-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.8rem;
  }
  .posts-in-the-list {
    padding-top: 2rem;
  }
  .a-post-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
    font-size: 1.6rem;
    padding: 1rem;
    border-bottom: 2px dashed var(--highlight-color);
    animation: fadeIn 1s ease;
  }
  .a-post-filter label {
    font-style: italic;
  }
  .a-post-filter input {
    border: 1px solid var(--highlight-color);
    border-radius: 5px;
    padding: 0.25rem 1rem;
    font-size: 1.6rem;
  }
  .the-post-filter-toggle {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  .the-post-filter-toggle:hover {
    color: var(--highlight-color-6);
  }
  .the-post-filter-toggle.filter-visible {
    color: var(--highlight-color);
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 8rem;
    }
  }
</style>
