<script lang="ts">
  import AwesomeHeader from '@Tools/AwesomeHeader.svelte'
  import AwesomeFooter from '@Tools/AwesomeFooter.svelte'
  import LocaleSwitch from '@Tools/LocaleSwitch.svelte'
  import Spinner from '@Tools/AwesomeSpinner.svelte'
  import { Router } from 'svelte-router-spa'
  import { routes } from './routes'
  import { register, init } from 'svelte-i18n'
  import { isLoading } from 'svelte-i18n'

  register('en', () => import('@Assets/lang/en.json'))
  register('fi', () => import('@Assets/lang/fi.json'))

  init({
    fallbackLocale: 'en',
    initialLocale: 'en',
  })
</script>

<main>
  {#if $isLoading}
    <div class="app-loading">
      <Spinner />
    </div>
  {:else}
    <div class="locale-selector">
      <LocaleSwitch />
    </div>
    <div class="awesome-title">
      <AwesomeHeader />
    </div>
    <div class="awesome-content">
      <Router {routes} />
    </div>
    <div class="awesome-footer"><AwesomeFooter /></div>
  {/if}
</main>

<style>
  .locale-selector {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .app-loading {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  main {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .awesome-title,
  .awesome-footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .awesome-footer {
    margin-top: auto;
  }
  .awesome-content {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    scrollbar-color: var(--highlight-color) var(--shadow-color-6);
    scrollbar-width: thin;
  }
</style>
