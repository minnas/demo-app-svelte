<script lang="ts">
  import Fa from 'svelte-fa'
  import {
    faStickyNote,
    faBookAtlas,
    faTimes,
    faPlus,
  } from '@fortawesome/free-solid-svg-icons'
  import { todosStore } from '@Store/store'
  import Button from '@Tools/AwesomeButton.svelte'
  import { v4 as uuidv4 } from 'uuid'
  import type { Todo } from '@Types/type'
  import PlaceHolder from '@Tools/PlaceHolder.svelte'
  import { _ } from 'svelte-i18n'

  let todo = ''
  let addTodoVisible = false
  $: texts = {
    title: $_('todos-page-title'),
    add: $_('todos-btn-add'),
    placeholder: $_('todos-textarea-text'),
    empty: $_('todos-empty-placeholder'),
  }

  const saveTodo = (e) => {
    if (e.key === 'Escape') {
      addTodoVisible = !addTodoVisible
      return false
    }
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
    <h2>{texts.title}</h2>
  </div>
  <div class="a-new-todo">
    {#if !addTodoVisible}
      <Button
        icon={faPlus}
        label={texts.add}
        onlyIcon={false}
        btnClick={() => (addTodoVisible = !addTodoVisible)}
      />
    {/if}
    {#if addTodoVisible}
      <textarea
        contenteditable="true"
        bind:value={todo}
        on:keydown={saveTodo}
        id="my-todo"
        placeholder={texts.placeholder}
      />
      <Button
        icon={faTimes}
        btnClick={() => (addTodoVisible = !addTodoVisible)}
      />
    {/if}
  </div>
  <div class="the-todos-are-here">
    {#if $todosStore.length < 1}
      <PlaceHolder text={texts.empty} />
    {/if}
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
    row-gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  .some-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 2rem;
    padding: 1rem;
    border-bottom: 2px dashed var(--highlight-color);
    margin: auto;
    font-size: 2.5rem;
    flex: 1;
    color: var(--text-color);
  }
  .a-new-todo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
    transition: all 0.25s ease;
    grid-column-gap: 1rem;
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
    column-gap: 1rem;
    width: 100%;
    font-size: 1.8rem;
    line-height: 2rem;
  }
  .the-todos-are-here {
    padding: 2rem;
  }
</style>
