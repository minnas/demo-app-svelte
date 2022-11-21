<script lang="ts">
  import Fa from 'svelte-fa'
  import { faCheck } from '@fortawesome/free-solid-svg-icons'

  export let icon = undefined
  export let label = 'no name'
  export let disabled = false
  export let onlyIcon = true
  export let noBorder = false

  export let btnClick = () => {}

  $: btnIcon = icon || faCheck
  $: btnDisabled = disabled || false
  $: btnClass = noBorder ? 'awesome-button no-border' : 'awesome-button'
</script>

<button on:click={btnClick} class={btnClass} disabled={btnDisabled}>
  <Fa icon={btnIcon} />
  {#if label && !onlyIcon}
    <span class="some-label">{label}</span>
  {/if}
</button>

<style>
  .awesome-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.2rem;
    border: 1px solid var(--highlight-color);
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.25s ease;
    background-color: transparent;
    color: var(--btn-color);
    font-size: 1.6rem;
  }
  .awesome-button.no-border {
    border: none;
    padding: 0;
  }
  .awesome-button:hover {
    background-color: var(--highlight-color-6);
    font-size: 2rem;
  }
  .awesome-button[disabled] {
    cursor: not-allowed;
    background-color: var(--highlight-color-3);
  }
</style>
