<script lang="ts">
  import { faTimes } from '@fortawesome/free-solid-svg-icons'
  import Button from '@Tools/AwesomeButton.svelte'
  import { v4 as uuidv4 } from 'uuid'

  export let hide = (): void => {}
  export let title = 'Some header'

  const id = uuidv4()

  const hideMe = () => {
    document.getElementById(id).style.opacity = '0'
    document.getElementById(id).animate(
      {
        opacity: [1, 0],
      },
      1500
    )
    setTimeout(() => {
      hide()
    }, 1500)
  }
</script>

<div {id} class="some-overlay">
  <div class="overlay-inner">
    <div class="this-is-header">
      <h2>{title}</h2>
      <Button icon={faTimes} btnClick={hideMe} />
    </div>
    <div class="this-is-content">
      <slot name="content">This is content</slot>
    </div>
  </div>
</div>

<style>
  .some-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--highlight-color-3);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 1.5s ease;
    z-index: 999;
  }
  .overlay-inner {
    background-color: var(--shadow-color-8);
    color: var(--text-color);
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    margin: 5rem;
  }
  .this-is-header,
  .this-is-content {
    display: flex;
    flex-direction: row;
    padding: 2rem 5rem;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
  }
  .this-is-header h2 {
    font-size: 2.3rem;
  }
  .this-is-content {
    line-height: 2.5rem;
    border-top: 3px dashed var(--highlight-color-6);
    margin-bottom: 2rem;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
