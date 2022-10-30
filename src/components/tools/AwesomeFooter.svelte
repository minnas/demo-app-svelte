<script lang="ts">
  import { navigateTo } from 'svelte-router-spa'
  import { dummyButtons } from '@Api/api'
  import Button from '@Tools/AwesomeButton.svelte'
  import { appTheme } from '@Store/store'
  import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

  const goToMyPage = (page: string) => {
    navigateTo(page || '/')
  }

  $: toggleIcon = $appTheme === 'dark' ? faSun : faMoon
  
  const switchTheme = () => {
    if ($appTheme === 'dark') {
      $appTheme = 'light'
    } else {
      $appTheme = 'dark'
    }
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add($appTheme)
  }
</script>

<div class="some-footer">
  {#each dummyButtons as btn}
    <Button
      label={btn.label}
      icon={btn.icon}
      btnClick={() => goToMyPage(btn.route)}
    />
  {/each}
  <div class="toggle-theme">
    <Button icon={toggleIcon} btnClick={() => switchTheme()} />
  </div>
</div>

<style>
  .some-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 1rem;
    border-top: 2px dashed var(--highlight-color-6);
    margin: auto;
    width: 100%;
    transition: all 0.25s ease;
  }
  .toggle-theme {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>
