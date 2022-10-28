<script lang="ts">
  import { dummyButtons } from '../../api/api'
  import Button from '@Tools/AwesomeButton.svelte'
  
  let message = undefined
  const sayMessage = (label) => {
    if (label?.toLowerCase() === 'close') {
      message = undefined
    } else {
      message = label
    }
  }
</script>

<div class="some-footer">
  {#if message}
    <div class="some-message">
      {message}
    </div>
  {/if}
  {#each dummyButtons as btn}
    <Button
      label={btn.label}
      icon={btn.icon}
      btnClick={() => sayMessage(btn.label)}
    />
  {/each}
</div>

<style>
  .some-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 1rem;
    border-top: 2px dashed rgba(148, 104, 254, 0.6);
    margin: auto;
    width: 100%;
    transition: all 0.25s ease;
  }
  .some-message {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 2rem;
    color: rgba(148, 104, 254);
    padding: 1rem;
    border: 2px solid rgba(148, 104, 254);
    border-radius: 5px;
  }
</style>
