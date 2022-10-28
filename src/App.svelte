<script lang="ts">
  import Card from '@Tools/AwesomeItem.svelte'
  import AwesomeHeader from '@Tools/AwesomeHeader.svelte'
  import AwesomeFooter from '@Tools/AwesomeFooter.svelte'
  import { dummyCards } from './api/api'
</script>

<main>
  <div class="awesome-title">
    <AwesomeHeader />
  </div>
  <div class="awesome-content">
    {#each dummyCards as item}
      <Card>
        <span slot="title">{item.title}</span>
        <span slot="body">{item.body}</span>
      </Card>
    {/each}
  </div>
  <div class="awesome-footer"><AwesomeFooter /></div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .awesome-title,
  .awesome-footer {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .awesome-content {
    flex: 3;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
