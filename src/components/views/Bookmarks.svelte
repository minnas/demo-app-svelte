<script lang="ts">
  import Fa from 'svelte-fa'
  import {
    faBookJournalWhills,
    faBookmark,
    faTimes,
  } from '@fortawesome/free-solid-svg-icons'
  import { bookmarkStore } from '../../store/store'
  import Button from '@Tools/AwesomeButton.svelte'
  import type { Bookmark } from 'src/types/type'

  export let title = 'My Bookmarks'

  const remove = (bookmark: Bookmark) => {
    $bookmarkStore = $bookmarkStore.filter(
      (item: Bookmark) => item.id !== bookmark.id
    )
  }
</script>

<div class="my-bookmarks">
  <div class="some-header">
    <Fa icon={faBookJournalWhills} />
    <h2>{title}</h2>
  </div>
  <div class="bookmarks-in-the-list">
    {#each $bookmarkStore as bookmark}
      <div class="bookmark-item">
        <Fa icon={faBookmark} />
        <div>{bookmark.title}</div>
        <Button icon={faTimes} btnClick={() => remove(bookmark)} />
      </div>
    {/each}
  </div>
</div>

<style>
  .my-bookmarks {
    width: 100%;
  }
  .bookmarks-in-the-list {
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
    padding: 1rem;
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
  .bookmark-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.8rem;
  }
  .bookmarks-in-the-list {
    padding-top: 2rem;
  }
</style>
