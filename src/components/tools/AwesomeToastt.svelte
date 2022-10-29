<script lang="ts">
    import Fa from 'svelte-fa'
    import { faCheck } from '@fortawesome/free-solid-svg-icons'
  
    export let icon = faCheck
    export let message = "I am a toast";

    </script>
      <div class="awesome-toast">
        <div class="toast-content">
            <Fa icon={icon} />
            <span>{message}</span>
        </div>
    </div>
  
  <style>
    .awesome-toast {
        position: fixed;
        top: 20%;
        right: 20%;
        z-index: 999;    
        background-color: rgba(148, 104, 254, 0.3);    
        border: 2px dashed rgba(148, 104, 254);
        border-radius: 5px;
        transition: all 0.25s ease;
    }
    .toast-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.2rem;
      cursor: pointer;
      font-size: 2.5rem;
      color: rgba(148, 104, 254);
    }
    .toast-content span {
        font-size: 1.5rem;
    }
  </style>
  