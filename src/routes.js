import Home from './views/Home.vue'
import About from './views/About.vue'
import Bag from './views/Bag.vue'
import Components from './views/Components.vue'
import Elements from './views/Elements.vue'

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
        children: [
            {
                path: 'components',
                component: Components,
            },
            {
                path: 'elements',
                component: Elements,
            }
        ]
    }
]