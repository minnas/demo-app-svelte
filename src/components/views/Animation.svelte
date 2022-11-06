<script lang="ts">
  import { v4 as uuidv4 } from 'uuid'
  import { _ } from 'svelte-i18n'

  const id = uuidv4()
  const settings = {
    min: 5,
    max: 30,
    step: 1,
  }
  let circleSpeed = 10
  $: speedInSeconds = `${circleSpeed}s`

  const changeSpeed = () => {
    console.log('change speed')
    const value = (document.getElementById(id) as HTMLInputElement).value
    try {
      circleSpeed = parseInt(value)
    } catch (e) {}
  }
</script>

<div class="canvas">
  <div class="some-animation-tools">
    <label for="circle-speed">{$_('animation-page-speed-label')}</label>
    <input
      {id}
      name="circle-speed"
      value={circleSpeed}
      step={settings.step}
      type="range"
      min={settings.min}
      max={settings.max}
      on:change={changeSpeed}
    />
  </div>
  <svg class="svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M40,80 C5,-80 200,120 200,80 C160-80 40,120 40,80 z" />
    <circle r="6" class="circle">
      <animateMotion
        dur={speedInSeconds}
        repeatCount="indefinite"
        path="M40,80 C5,-80 200,120 200,80 C160-80 40,120 40,80 z"
      />
    </circle>
  </svg>
</div>

<style>
  .canvas {
    width: 100%;
    align-items: center;
    flex-direction: row;
    grid-row-gap: 1rem;
    justify-content: center;
    padding-top: 2rem;
  }
  path {
    stroke: var(--text-color);
    fill: none;
  }
  .circle {
    fill: var(--highlight-color);
  }
  .some-animation-tools {
    color: var(--text-color);
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-row-gap: 1rem;
  }
  .some-animation-tools input[type='range'] {
    width: 80%;
    max-width: 500px;
    cursor: pointer;
  }
</style>
