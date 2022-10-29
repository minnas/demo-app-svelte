<script lang="ts">
  import Fa from 'svelte-fa'
  import {
    faStickyNote,
    faBookAtlas,
    faTimes,
  } from '@fortawesome/free-solid-svg-icons'
  import { todosStore } from '../../store/store'
  import Button from '@Tools/AwesomeButton.svelte'
  import { v4 as uuidv4 } from 'uuid'
  import type { Todo } from 'src/types/type'

  export let title = 'My Todos'

  let todo = ''

  const saveTodo = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      $todosStore = [...$todosStore, { id: uuidv4(), body: todo }]
      todo = ''
      return false
    }
  }

  const remove = (item: Todo) => {
    $todosStore = $todosStore.filter((t: Todo) => t.id !== item.id)
  }
</script>

<div class="awesome-todos">
  <div class="some-header">
    <Fa icon={faStickyNote} />
    <h2>{title}</h2>
  </div>
  <div class="a-new-todo">
    <textarea
      contenteditable="true"
      bind:value={todo}
      on:keydown={saveTodo}
      id="my-todo"
      placeholder="write new todo and press enter"
    />
  </div>
  <div class="the-todos-are-here">
    {#each $todosStore as item}
      <div class="one-todo-item">
        <Fa icon={faBookAtlas} />
        <div>{item.body}</div>
        <Button icon={faTimes} btnClick={() => remove(item)} />
      </div>
    {/each}
  </div>
</div>

<style>
  .awesome-todos {
    width: 100%;
  }
  .the-todos-are-here {
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
    padding: 1rem;
    border-bottom: 2px dashed rgba(148, 104, 254, 0.6);
    margin: auto;
    font-size: 2.5rem;
    flex: 1;
  }
  .a-new-todo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .a-new-todo textarea {
    padding: 1rem;
    width: 20rem;
    height: 5rem;
    font-size: 1.6rem;
  }
  .some-header h2 {
    margin: auto;
    padding: 0;
    font-size: 2rem;
  }
  .one-todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.8rem;
  }
  .the-todos-are-here {
    padding-top: 2rem;
  }
</style>
