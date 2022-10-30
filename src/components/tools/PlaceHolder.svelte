<script lang="ts">
  import Fa from 'svelte-fa'
  import { faSmileWink } from '@fortawesome/free-solid-svg-icons'
  export let icon = faSmileWink
  export let text = 'no worries'
</script>

<div class="a-dummy-placeholder-is-here">
  <Fa {icon} />
  <span class="some-text">{text}</span>
</div>

<style>
  .a-dummy-placeholder-is-here {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-column-gap: 2rem;
    padding: 2rem;
    font-size: 2.5rem;
    color: var(--highlight-color);
    animation: showContent 1.5s ease-in;
  }
  .a-dummy-placeholder-is-here .some-text {
    font-size: 1.8rem;
  }
  @keyframes showContent {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
