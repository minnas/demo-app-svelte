import Bookmarks from './components/views/Bookmarks.svelte';
import Posts from './components/views/Posts.svelte';
import Todos from './components/views/Todos.svelte';
import Cards from './components/views/Cards.svelte';

const routes = [
    { name: '/', component:Cards, path: "/" },
    { name: 'bookmarks', component: Bookmarks, path: "/bookmarks" },
    { name: 'Posts', component: Posts, path: "/posts" },
    { name: 'Todos', component:Todos, path: "/todos" },
  ]
  
  export { routes }