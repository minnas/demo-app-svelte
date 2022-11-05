<script lang="ts">
  import { locale, locales } from 'svelte-i18n'
  import { v4 as uuidv4 } from 'uuid'

  let id = uuidv4()

  const changeLocale = () => {
    const loc = (document.getElementById(id) as HTMLSelectElement).value
    locale.set(loc)
  }
</script>

<select {id} on:change={changeLocale} class="the-app-locale-switch">
  {#each $locales as locale}
    <option value={locale}>{locale.toUpperCase()}</option>
  {/each}
</select>

<style>
  .the-app-locale-switch {
    border: 2px solid var(--highlight-color);
    border-radius: 5px;
    font-size: 1rem;
    background-color: transparent;
    color: var(--highlight-color);
    padding: 0.25rem;
    font-weight: 600;
    appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }
</style>
