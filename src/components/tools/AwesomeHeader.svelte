<script lang="ts">
  import Fa from 'svelte-fa'
  import { faSunPlantWilt } from '@fortawesome/free-solid-svg-icons'
  export let title = 'Small Demo with Vite + Svelte'
</script>

<div class="some-header">
  <Fa icon={faSunPlantWilt} />
  <h1>{title}</h1>
</div>

<style>
  .some-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-column-gap: 2rem;
    padding: 1rem;
    border-bottom: 2px dashed rgba(148, 104, 254, 0.6);
    margin: auto;
    width: 100%;
    font-size: 2.5rem;
  }
  .some-header h1 {
    margin: auto;
    padding: 0;
    font-size: 2.5rem;
  }
</style>
