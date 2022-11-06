import Bookmarks from '@Views/Bookmarks.svelte';
import Posts from '@Views/Posts.svelte';
import Todos from '@Views/Todos.svelte';
import Cards from '@Views/Cards.svelte';
import SVGPaint from '@Views/SVGPaint.svelte';
import Animation from '@Views/Animation.svelte';

const routes = [
    { name: '/', component:Cards, path: "/" },
    { name: 'bookmarks', component: Bookmarks, path: "/bookmarks" },
    { name: 'posts', component: Posts, path: "/posts" },
    { name: 'todos', component:Todos, path: "/todos" },
    { name: 'svg', component:SVGPaint, path: "/svg" },
    { name: 'animation', component:Animation, path: "/svg" },
  ]
  
  export { routes }