<script lang="ts">
  import { faIdCardClip } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  import Card from '@Tools/AwesomeItem.svelte'
  import { search } from '@Api/api'
  import { onMount } from 'svelte'
  import type { Item } from '@Types/type'
  import Spinner from '@Tools/AwesomeSpinner.svelte'
  import { _ } from 'svelte-i18n'

  $: cards = [] as Item[]
  $: title = $_('cards-page-title')

  onMount(() => {
    search()
      .then((response) => {
        cards = response as Item[]
      })
      .catch((e) => {
        console.log('Something did not work')
      })
  })
</script>

<div class="fake-cards">
  <div class="some-header">
    <Fa icon={faIdCardClip} />
    <h2>{title}</h2>
  </div>
  <div class="cards-in-the-list">
    {#if cards.length < 1}
      <Spinner />
    {/if}
    {#each cards as item}
      <Card>
        <span slot="title">{item.title}</span>
        <span slot="body">{item.body}</span>
      </Card>
    {/each}
  </div>
</div>

<style>
  .fake-cards {
    padding: 0 5rem;
  }
  .cards-in-the-list {
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
</style>
