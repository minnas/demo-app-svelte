import type { Bookmark, Todo } from '@Types/type'
import { writable } from 'svelte/store'

export const bookmarkStore = writable([] as Bookmark[])
export const todosStore = writable([] as Todo[])

export const appTheme = writable("dark")