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
  $: speedInSeconds2 = `${circleSpeed * 0.5}s`

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
  <div class="some-svg">
    <svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,0 21,90 98,35 2,35 79,90" />
      <circle r="3" class="second-circle">
        <animateMotion
          dur={speedInSeconds}
          repeatCount="indefinite"
          path="M 50 0 21 90 98 35 2 35 79 90 50 0"
        />
      </circle>
    </svg>
  </div>
  <div class="some-svg test-svgs">
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <circle class="circle-test-1" cx="100" cy="100" r="75" />
    </svg>
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <path
        id="circlePath"
        class="circle-test-2"
        d="
      M 100, 100
      m -75, 0
      a 75,75 0 1,0 150,0
      a 75,75 0 1,0 -150,0
      "
      />
      <rect width="20" height="20" class="test-rectangle">
        <animateMotion
          dur={speedInSeconds2}
          repeatCount="indefinite"
          rotate="auto-reverse"
        >
          <mpath xlink:href="#circlePath" />
        </animateMotion>
      </rect>
    </svg>
  </div>
</div>

<style>
  .some-svg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .canvas {
    width: 100%;
    align-items: center;
    flex-direction: row;
    grid-row-gap: 1rem;
    justify-content: center;
    padding-top: 2rem;
  }
  polygon {
    stroke: var(--highlight-color);
    fill: none;
  }
  svg {
    margin-top: 2rem;
    max-width: 30rem;
  }
  .second-circle {
    fill: var(--text-color);
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
  .circle-test-1 {
    fill: var(--highlight-color);
    fill-opacity: 0.4;
    stroke: var(--text-color);
    stroke-width: 3px;
    stroke-opacity: 0.8;
  }
  .circle-test-2 {
    fill: none;
    stroke: var(--highlight-color);
  }
  .test-svgs {
    padding-bottom: 2rem;
    flex-wrap: wrap;
  }
  .test-svgs svg {
    max-width: 300px;
  }
  .test-rectangle {
    fill: none;
    stroke: var(--text-color);
    stroke-width: 3px;
    stroke-opacity: 0.8;
  }
</style>
