<script lang="ts">
  import Card from '@Tools/AwesomeItem.svelte'
  import { dummyCards } from '../../api/api'
</script>

<div>
  {#each dummyCards as item}
    <Card>
      <span slot="title">{item.title}</span>
      <span slot="body">{item.body}</span>
    </Card>
  {/each}
</div>
