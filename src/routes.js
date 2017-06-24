import Home from './views/Home.vue';
import About from './views/About.vue';
import Components from './views/Components.vue';

import Button from './views/Button.vue';

export const routes = [
  { 
    path: '/',
    component: Home,
  },
  { 
    path: '/about',
    component: About,
  },
  { 
    path: '/components',
    component: Components,
  },
  {
    path: '/components/buttons',
    component: Button
  }
];