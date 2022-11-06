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
  import {
    colors,
    ignoreTags,
    ignoreColorRegex,
    slideUp,
    slideDown,
    fillColor,
    fadeOutIn,
  } from '@Svg/utils'
  import Toast from '@Tools/AwesomeToast.svelte'
  import { svgPicture } from '@Svg/svg'
  import AnOverlay from '@Tools/AnOverlay.svelte'
  import { v4 as uuidv4 } from 'uuid'
  import { _ } from 'svelte-i18n'

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
      const oldColor = target.getAttribute('fill') || '#fff'
      const tagName = target.tagName
      if (!ignoreTags.find((tag) => tag === tagName)) {
        if (ignoreColorRegex.test(oldColor)) {
          return
        }
        target.setAttribute('fill', currentColor)
        target.animate(fillColor(oldColor, currentColor), 600)
        mySvgChanged = true
      }
    })
  })

  const animate = () => {
    const el = document.getElementById(myHeaderId) as HTMLElement
    if (titleVisible) {
      el.style.marginTop = '0px'
      el.animate(slideDown(el.offsetHeight), 800)
    } else {
      el.style.marginTop = `-${el.offsetHeight.toString()}px`
      el.animate(slideUp(el.offsetHeight), 800)
    }
  }

  const toggle = () => {
    titleVisible = !titleVisible
    animate()
  }

  const clear = () => {
    $svgStore = svgPicture as string
    const svg = document.getElementById(mySvgId) as HTMLElement
    svg.innerHTML = $svgStore
    svg.animate(fadeOutIn(), 600)
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
    <h2>{$_('svg-page-title')}</h2>
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
    title={$_('svg-info-title')}
    hide={() => {
      overlayVisible = !overlayVisible
    }}
  >
    <span slot="content"
      >{$_('svg-page-info-start')}
      <span class="content-info-icon"><Fa icon={faFloppyDisk} /></span>, {$_(
        'svg-page-info-middle'
      )}
      <span class="content-info-icon"><Fa icon={faRefresh} /></span>
      {$_('svg-page-info-end')}
    </span>
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
