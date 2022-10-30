<script lang="ts">
  import Fa from 'svelte-fa'
  import { faSunPlantWilt } from '@fortawesome/free-solid-svg-icons'
  import logo from '@Assets/svelte.svg'
  import ThemeSwitch from '@Tools/ThemeSwitch.svelte'

  export let title = 'Small Demo with Vite + Svelte'
</script>

<div class="some-header">
  <Fa icon={faSunPlantWilt} />
  <h1>{title}</h1>
  <div class="right-side">
    <img class="svelte-logo" src={logo} alt="" />
    <ThemeSwitch />
  </div>
</div>

<style>
  .some-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-column-gap: 2rem;
    padding: 1rem;
    border-bottom: 2px dashed var(--highlight-color-6);
    margin: auto;
    width: 100%;
    font-size: 2.5rem;
  }
  .some-header h1 {
    margin: auto;
    padding: 0;
    font-size: 2.5rem;
  }
  .some-header .svelte-logo {
    height: 2.5rem;
    width: auto;
    margin: auto;
  }
  .right-side {
    display: flex;
    flex-direction: row;
    grid-column-gap: 1rem;
    justify-content: center;
    align-items: center;
  }
</style>
