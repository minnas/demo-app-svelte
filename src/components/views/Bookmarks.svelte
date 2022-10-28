<script lang="ts">
  import Fa from 'svelte-fa'
  import { faBookJournalWhills } from '@fortawesome/free-solid-svg-icons'
  export let title = 'My Bookmarks'
</script>

<div class="my-bookmarks">
  <div class="some-header">
    <Fa icon={faBookJournalWhills} />
    <h2>{title}</h2>
  </div>
  <div class="bookmarks-in-the-list">There will be some bookmarks</div>
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
</style>
