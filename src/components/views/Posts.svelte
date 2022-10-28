<script lang="ts">
  import {
    faEnvelopesBulk,
    faEnvelopeOpenText,
    faBookBookmark,
  } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  import { onMount } from 'svelte'
  import { search } from '../../api/api'
  import type { Item } from '../../types/type'
  import Button from '@Tools/AwesomeButton.svelte'
  import { ApiType } from '../../api/api'
  export let title = 'Fake Todos'
  $: posts = [] as Item[]

  onMount(() => {
    search(ApiType.TODOS)
      .then((response) => {
        posts = response as Item[]
      })
      .catch((e) => {
        console.log('Something did not work')
      })
  })

  const addBookmark = (item: Item) => {
    console.log('add to bookmarks ' + item.id)
  }
</script>

<div class="fake-posts">
  <div class="some-header">
    <Fa icon={faEnvelopesBulk} />
    <h2>{title}</h2>
  </div>
  <div class="posts-in-the-list">
    {#each posts as post}
      <div class="post-item">
        <Fa icon={faEnvelopeOpenText} />
        <div>{post.title}</div>
        <Button icon={faBookBookmark} btnClick={() => addBookmark(post)} />
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
    border-bottom: 2px dashed rgba(148, 104, 254, 0.6);
    margin: auto;
    font-size: 2.5rem;
    flex: 1;
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
