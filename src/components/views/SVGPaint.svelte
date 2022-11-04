<script lang="ts">
  import {
    faCat,
    faRefresh,
    faFloppyDisk,
    faMagicWandSparkles,
    faChevronUp,
    faChevronDown,
    faInfo,
  } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  import { onMount } from 'svelte'
  import Button from '@Tools/AwesomeButton.svelte'
  import { svgStore } from '@Store/store'
  import { colors, ignoreTags, ignoreColors } from '@Svg/settings'
  import Toast from '@Tools/AwesomeToast.svelte'
  import { svgPicture } from '@Svg/svg'
  import AnOverlay from '@Tools/AnOverlay.svelte'
  import { v4 as uuidv4 } from 'uuid'

  let title = 'Colourize SVG'
  let toastVisible = false

  let currentColor = colors.at(0)
  let mySvgChanged = false
  let titleVisible = true
  let overlayVisible = false
  const myHeaderId = uuidv4()
  const mySvgId = uuidv4()

  onMount(() => {
    const mySVG = document.getElementById(mySvgId) as HTMLElement
    mySVG.innerHTML = $svgStore
    mySVG.style.cursor = 'pointer'
    mySVG.addEventListener('mouseup', (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const tagName = target.tagName
      if (!ignoreTags.find((tag) => tag === tagName)) {
        if (ignoreColors.find((c) => c == target.getAttribute('fill'))) {
          return
        }
        target.setAttribute('fill', currentColor)
        mySvgChanged = true
      }
    })
  })

  const animate = () => {
    const el = document.getElementById(myHeaderId) as HTMLElement
    if (titleVisible) {
      el.style.marginTop = '0px'
      el.animate(
        {
          opacity: [0, 1],
          marginTop: [`-${el.offsetHeight.toString()}px`, '0px'],
        },
        800
      )
    } else {
      el.style.marginTop = `-${el.offsetHeight.toString()}px`
      el.animate(
        {
          opacity: [1, 0],
          marginTop: ['0', `-${el.offsetHeight.toString()}px`],
        },
        800
      )
    }
  }

  const toggle = () => {
    titleVisible = !titleVisible
    animate()
  }

  const clear = () => {
    $svgStore = svgPicture as string
    ;(document.getElementById(mySvgId) as HTMLElement).innerHTML = $svgStore
  }

  const selectMe = (color: string) => {
    currentColor = color
  }

  const save = () => {
    $svgStore = (document.getElementById(mySvgId) as HTMLElement).innerHTML
    mySvgChanged = false
    toastVisible = true
    setTimeout(() => {
      toastVisible = false
    }, 600)
  }
</script>

<div class="some-colorizing-example">
  {#if toastVisible}
    <Toast message={'Saved'} icon={faMagicWandSparkles} />
  {/if}
  <div class="some-header" id={myHeaderId}>
    <Fa icon={faCat} />
    <h2>{title}</h2>
    <Button btnClick={() => clear()} icon={faRefresh} />
    <Button
      btnClick={() => save()}
      icon={faFloppyDisk}
      disabled={mySvgChanged === false}
    />
    <Button btnClick={() => (overlayVisible = !overlayVisible)} icon={faInfo} />
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
      <Button
        btnClick={() => toggle()}
        icon={titleVisible === true ? faChevronUp : faChevronDown}
      />
    </div>
    <div class="svg-from-store svg-image" id={mySvgId} />
  </div>
</div>
{#if overlayVisible}
  <AnOverlay
    title={'Instructions'}
    hide={() => {
      overlayVisible = !overlayVisible
    }}
  >
    <span slot="content"
      >Select first color and paint area by clicking. save by clicking floppy
      icon button <span class="content-info-icon"
        ><Fa icon={faFloppyDisk} /></span
      >, reload by refresh
      <span class="content-info-icon"><Fa icon={faRefresh} /></span> button</span
    >
  </AnOverlay>
{/if}

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
    width: 45vw;
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
  .a-new-color.brown {
    background-color: brown;
  }
  .a-new-color.violet {
    background-color: violet;
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
  .content-info-icon {
    color: var(--highlight-color);
    display: inline-block;
    margin: 0 1rem;
  }
</style>
