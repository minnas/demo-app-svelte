<script lang="ts">
  import AwesomeHeader from '@Tools/AwesomeHeader.svelte'
  import AwesomeFooter from '@Tools/AwesomeFooter.svelte'
  import { Router } from 'svelte-router-spa'
  import { routes } from './routes'
</script>

<main>
  <div class="awesome-title">
    <AwesomeHeader />
  </div>
  <div class="awesome-content">
    <Router {routes} />
  </div>
  <div class="awesome-footer"><AwesomeFooter /></div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .awesome-title,
  .awesome-footer {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .awesome-content {
    flex: 3;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
