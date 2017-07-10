import Home from './views/Home.vue'
import About from './views/About.vue'
import Bag from './views/Bag.vue'

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
    path: '/bag',
    component: Bag,
  }
];