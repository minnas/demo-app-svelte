import Bookmarks from '@Views/Bookmarks.svelte';
import Posts from '@Views/Posts.svelte';
import Todos from '@Views/Todos.svelte';
import Cards from '@Views/Cards.svelte';

const routes = [
    { name: '/', component:Cards, path: "/" },
    { name: 'bookmarks', component: Bookmarks, path: "/bookmarks" },
    { name: 'posts', component: Posts, path: "/posts" },
    { name: 'todos', component:Todos, path: "/todos" },
  ]
  
  export { routes }