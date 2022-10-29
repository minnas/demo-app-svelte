<script lang="ts">
  import Fa from 'svelte-fa'
  import { faCheck } from '@fortawesome/free-solid-svg-icons'

  export let icon = undefined
  export let label = 'no name'
  export let disabled = false
  export let onlyIcon = true

  export let btnClick = () => {
    console.log('click me')
  }

  $: btnIcon = icon || faCheck
  $: btnDisabled = disabled || false
</script>

<button on:click={btnClick} class="awesome-button" disabled={btnDisabled}>
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
    border: 1px solid rgba(148, 104, 254);
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  .awesome-button:hover {
    background-color: rgba(148, 104, 254, 0.6);
    font-size: 2rem;
  }
  .awesome-button[disabled] {
    cursor: not-allowed;
    background-color: rgba(148, 104, 254, 0.3);
  }
</style>
