<script lang="ts">
  import { navigateTo, Route } from 'svelte-router-spa'
  import { dummyButtons } from '@Api/api'
  import Button from '@Tools/AwesomeButton.svelte'
  import ThemeSwitch from '@Tools/ThemeSwitch.svelte'

  let currentPage = '/'

  const goToMyPage = (page: string) => {
    currentPage = page
    navigateTo(page || '/')
  }
</script>

<div class="some-footer">
  {#each dummyButtons as btn}
    <Button
      label={btn.label}
      icon={btn.icon}
      btnClick={() => goToMyPage(btn.route)}
      disabled={btn.route === currentPage}
    />
  {/each}
  <ThemeSwitch />
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
</style>
