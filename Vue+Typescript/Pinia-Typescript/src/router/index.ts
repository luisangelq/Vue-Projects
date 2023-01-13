import Counter1 from '@/counter/pages/Counter1.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-1',
      component: Counter1,
    },
    {
      path: '/counter-2',
      name: 'counter-Setup',
      component: () => import('@/counter/pages/Counter2.vue'),
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import('@/clients/layout/ClientsLayout.vue'),
      redirect: { name: 'clients-list' },
      children: [
        {
          path: '/clients/list',
          name: 'clients-list',
          component: () => import('@/clients/pages/ClientsList.vue'),
        },
        {
          path: '/clients/:id',
          name: 'client-detail',
          component: () => import('@/clients/pages/Client.vue'),
        },
      ]
    }
  ]
})

export default router
