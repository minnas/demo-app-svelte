<script lang="ts">
  import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  export let title = 'Fake Posts'
</script>

<div class="fake-posts">
  <div class="some-header">
    <Fa icon={faEnvelopesBulk} />
    <h2>{title}</h2>
  </div>
  <div class="posts-in-the-list">And here comes posts at some day</div>
</div>

<style>
  .fake-posts {
    width: 100%;
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
