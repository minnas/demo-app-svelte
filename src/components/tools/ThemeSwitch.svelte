<script lang="ts">
  import Button from '@Tools/AwesomeButton.svelte'
  import { appTheme } from '@Store/store'
  import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

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

<div class="toggle-theme-switch">
  <Button icon={toggleIcon} btnClick={() => switchTheme()} />
</div>

<style>
  .toggle-theme-switch {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
