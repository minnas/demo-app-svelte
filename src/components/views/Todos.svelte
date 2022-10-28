<script lang="ts">
  import Fa from 'svelte-fa'
  import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
  export let title = 'My Todos'
</script>

<div class="awesome-todos">
  <div class="some-header">
    <Fa icon={faStickyNote} />
    <h2>{title}</h2>
  </div>
  <div class="the-todos-are-here">My TODOS</div>
</div>

<style>
  .awesome-todos {
    width: 100%;
  }
  .the-todos-are-here {
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
