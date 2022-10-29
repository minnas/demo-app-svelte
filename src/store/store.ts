import type { Bookmark, Todo } from 'src/types/type'
import { writable } from 'svelte/store'

export const bookmarkStore = writable([] as Bookmark[])
export const todosStore = writable([] as Todo[])