<script lang="ts">
  import {
    faEnvelopesBulk,
    faEnvelopeOpenText,
    faBookBookmark,
  } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  import { onMount } from 'svelte'
  import { search } from '@Api/api'
  import type { Bookmark, Item, RawItem } from '@Types/type'
  import Button from '@Tools/AwesomeButton.svelte'
  import { bookmarkStore } from '@Store/store'
  import { ApiType } from '@Api/api'
  import { v4 as uuidv4 } from 'uuid'
  import Toast from '@Tools/AwesomeToast.svelte'
  import Spinner from '@Tools/AwesomeSpinner.svelte'

  export let title = 'Fake Todos'
  export let animate = true

  let toastVisible = false

  $: posts = [] as Item[]
  $: titleClass = animate ? 'some-header animate' : 'some-header'

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
    <Toast message={'Added to Bookmarks'} />
  {/if}
  <div class={titleClass}>
    <Fa icon={faEnvelopesBulk} />
    <h2>{title}</h2>
  </div>
  <div class="posts-in-the-list">
    {#if posts.length < 1}
      <Spinner />
    {/if}
    {#each posts as post}
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
    grid-row-gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  .some-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-column-gap: 2rem;
    padding: 0.5rem;
    border-bottom: 2px dashed var(--highlight-color-6);
    margin: auto;
    font-size: 2.5rem;
    flex: 1;
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
</style>
