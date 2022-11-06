import type { Bookmark, Todo } from '@Types/type'
import { writable } from 'svelte/store'
import { svgPicture } from '@Svg/svg'

export const bookmarkStore = writable([] as Bookmark[])
export const todosStore = writable([] as Todo[])
export const appTheme = writable("dark")
export const svgStore = writable(svgPicture as string)
