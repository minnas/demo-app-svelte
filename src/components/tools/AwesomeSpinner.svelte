<script lang="ts">
  import faSpinSVG from '@Assets/spinner-solid.svg'
</script>

<div class="a-spinner-container">
  <img class="fa-spinner-spin" src={faSpinSVG} alt="spin" />
</div>

<style>
  .a-spinner-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 2rem;
  }
  .fa-spinner-spin {
    height: 6rem;
    width: auto;
    animation: spin infinite 5s linear;
    filter: drop-shadow(20px 0px 0px var(--highlight-color-8));
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
