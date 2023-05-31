<script lang="ts">
  import Fa from 'svelte-fa'
  import {
    faSunPlantWilt,
    faLightbulb,
  } from '@fortawesome/free-solid-svg-icons'
  import logo from '@Assets/svelte.svg'
  import ThemeSwitch from '@Tools/ThemeSwitch.svelte'
  import AnOverlay from '@Tools/AnOverlay.svelte'
  import Button from '@Tools/AwesomeButton.svelte'
  import { features } from '@Api/api'
  import { _ } from 'svelte-i18n'

  let showInfo = false
  const toggleInfoOverlay = () => {
    showInfo = !showInfo
  }
</script>

<div class="some-header">
  <Fa icon={faSunPlantWilt} />
  <h1>{$_('app-title')}</h1>
  <div class="right-side">
    <img class="svelte-logo" src={logo} alt="" />
    <ThemeSwitch />
    <Button btnClick={toggleInfoOverlay} icon={faLightbulb} noBorder={true} />
  </div>
</div>
{#if showInfo}
  <AnOverlay title={'About the App'} hide={toggleInfoOverlay}>
    <div class="info-block" slot="content">
      <h2>{$_('app-info-title')}</h2>
      <span>{$_('app-info-list')}</span>
      {#each features as feature}
        <span><Fa icon={feature.icon} />{feature.text}</span>
      {/each}
    </div>
  </AnOverlay>
{/if}

<style>
  .some-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 2rem;
    padding: 1rem;
    border-bottom: 2px dashed var(--highlight-color-6);
    margin: auto;
    width: 100%;
    font-size: 2.5rem;
    color: var(--text-color);
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
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  .info-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 2rem;
    row-gap: 0.5rem;
    box-shadow: -1rem 0 0.4rem var(--highlight-color);
    padding: 0 2.5rem 2.5rem;
  }
  .info-block h2 {
    font-size: 2rem;
  }
  .info-block span {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
  }
</style>
