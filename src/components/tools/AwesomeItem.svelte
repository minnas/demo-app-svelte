<script lang="ts">
  import Fa from 'svelte-fa'
  import {
    faUserNinja,
    faEnvelopeOpenText,
    faTimes,
  } from '@fortawesome/free-solid-svg-icons'

  let show = false
  $: icon = show ? faTimes : faEnvelopeOpenText
  $: myClass = show ? 'some-content open' : 'some-content'
</script>

<div class="awesome-card">
  <div class={myClass} on:mouseup={() => (show = !show)}>
    <Fa icon={faUserNinja} />
    {#if !show}
      <span class="title-content">
        <slot name="title">
          <span>No title</span>
        </slot>
      </span>
    {/if}
    {#if show}
      <span class="body-content">
        <slot name="body">
          <span>No body</span>
        </slot>
      </span>
    {/if}
    <Fa {icon} />
  </div>
</div>

<style lang="css">
  .awesome-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
    width: 100%;
    max-width: 100%;
    max-height: 500px;
  }
  .some-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
    grid-column-gap: 2rem;
    border-bottom: 2px dashed rgba(148, 104, 254);
    font-size: 2.5rem;
    line-height: 2.5rem;
    transition: all 0.25s ease;
  }
  .some-content.open {
    border-right: 2px dashed rgba(148, 104, 254);
    box-shadow: -1rem 0 0.4rem rgba(148, 104, 254);
    margin: 1rem auto;
  }
  .some-content.open > .body-content {
    font-size: 2rem;
    line-height: 2rem;
  }
  .some-content:hover {
    background-color: rgba(148, 104, 254, 0.3);
    cursor: pointer;
  }
  .title-content,
  .body-content {
    font-size: 1.8rem;
  }
</style>
