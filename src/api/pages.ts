import Bookmarks from '@Views/Bookmarks.svelte';
import Posts from '@Views/Posts.svelte';
import Todos from '@Views/Todos.svelte';
import Cards from '@Views/Cards.svelte';
import SVGPaint from '@Views/SVGPaint.svelte';
import Animation from '@Views/Animation.svelte';
import { faRainbow, faBug, faBookmark, faBookJournalWhills, faPaintBrush, faMagic } from '@fortawesome/free-solid-svg-icons';
import type { ComponentType } from 'svelte';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export type Page = {
  name: string,
  component: ComponentType,
  icon: IconProp
}

export const pages:Page[] = [
  { name: '/', component:Cards, icon: faRainbow },
  { name: 'posts', component: Posts, icon: faBug },
  { name: 'bookmarks', component: Bookmarks, icon: faBookmark },
  { name: 'todos', component:Todos, icon: faBookJournalWhills },
  { name: 'svg', component:SVGPaint, icon: faPaintBrush },
  { name: 'animation', component:Animation, icon: faMagic },
]
