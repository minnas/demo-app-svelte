<script lang="ts">
  import Fa from 'svelte-fa'
  import {
    faBookJournalWhills,
    faBookmark,
    faTimes,
    faBugSlash,
  } from '@fortawesome/free-solid-svg-icons'
  import { bookmarkStore } from '@Store/store'
  import Button from '@Tools/AwesomeButton.svelte'
  import type { Bookmark } from '@Types/type'
  import Toast from '@Tools/AwesomeToast.svelte'
  import PlaceHolder from '@Tools/PlaceHolder.svelte'

  export let title = 'My Bookmarks'
  let toastVisible = false

  const remove = (bookmark: Bookmark) => {
    toggleToast()
    $bookmarkStore = $bookmarkStore.filter(
      (item: Bookmark) => item.id !== bookmark.id
    )
  }
  const toggleToast = () => {
    toastVisible = !toastVisible
    setTimeout(() => {
      toastVisible = !toastVisible
    }, 600)
  }
</script>

<div class="my-bookmarks">
  {#if toastVisible}
    <Toast message={'Removed'} icon={faBugSlash} />
  {/if}
  <div class="some-header">
    <Fa icon={faBookJournalWhills} />
    <h2>{title}</h2>
  </div>
  <div class="bookmarks-in-the-list">
    {#if $bookmarkStore.length < 1}
      <PlaceHolder />
    {/if}
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
    border-bottom: 2px dashed var(--highlight-color-6);
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
    grid-column-gap: 1rem;
    width: 100%;
    font-size: 1.8rem;
    animation: fadeIn 2s ease-in-out;
  }
  .bookmarks-in-the-list {
    padding: 2rem;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
