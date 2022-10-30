<script lang="ts">
  import { navigateTo } from 'svelte-router-spa'
  import { dummyButtons } from '@Api/api'
  import Button from '@Tools/AwesomeButton.svelte'
  import ThemeSwitch from '@Tools/ThemeSwitch.svelte'

  const goToMyPage = (page: string) => {
    navigateTo(page || '/')
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
