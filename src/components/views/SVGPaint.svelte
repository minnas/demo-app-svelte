<script lang="ts">
  import { faCat } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  import { onMount } from 'svelte'
  import Cat from '@Svg/cat.svelte'

  let title = 'Colourize SVG'
  const colors = ['red', 'green', 'blue', 'yellow', 'white']
  const ignoreTags = ['svg', 'text']
  const ignoreColors = ['rgb(0, 0, 0)', '#000000']

  let currentColor = colors.at(0)

  onMount(() => {
    const mySVG = document.querySelector('.svg-image > svg') as HTMLElement
    mySVG.style.cursor = 'pointer'
    mySVG.addEventListener('mouseup', (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const tagName = target.tagName

      if (!ignoreTags.find((tag) => tag === tagName)) {
        if (ignoreColors.find((c) => c == target.getAttribute('fill'))) {
          return
        }
        target.setAttribute('fill', currentColor)
      }
    })
  })

  const selectMe = (color: string) => {
    currentColor = color
  }
</script>

<div class="some-colorizing-example">
  <div class="some-header">
    <Fa icon={faCat} />
    <h2>{title}</h2>
  </div>
  <div class="some-content">
    <div class="color-set">
      {#each colors as color}
        <div
          class={color === currentColor
            ? 'a-new-color ' + color + ' selected'
            : 'a-new-color ' + color}
          on:mouseup={() => selectMe(color)}
        />
      {/each}
    </div>
    <div class="svg-image">
      <Cat />
    </div>
  </div>
</div>

<style>
  .some-colorizing-example {
    display: flex;
    flex-direction: column;
    grid-row-gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  .some-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-column-gap: 2rem;
    padding: 0.5rem;
    border-bottom: 2px dashed var(--highlight-color-6);
    margin: auto;
    font-size: 2.5rem;
    flex: 1;
  }
  .some-header h2 {
    margin: auto;
    padding: 0;
    font-size: 2rem;
  }
  .some-content {
    display: flex;
    flex-direction: column;
    grid-row-gap: 1rem;
    animation: fadeIn 2s ease-in-out;
  }
  .color-set {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-column-gap: 1.5rem;
  }
  .a-new-color {
    border: 3px solid transparent;
    width: 1.8rem;
    height: 1.8rem;
    padding: 0.5rem;
    border-radius: 2rem;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  .a-new-color:hover {
    padding: 1rem;
    box-shadow: 10px 5px 5px var(--shadow-color-6);
  }
  .a-new-color.selected {
    border: 3px dashed var(--shadow-color-8);
  }
  .a-new-color.red {
    background-color: red;
  }
  .a-new-color.green {
    background-color: green;
  }
  .a-new-color.blue {
    background-color: blue;
  }
  .a-new-color.yellow {
    background-color: yellow;
  }
  .a-new-color.white {
    background-color: #ffffff;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
