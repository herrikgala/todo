import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { loadLayoutMiddleware } from './loadLayout.middleware'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: `/todos`
	}
]

const router = createRouter({
	history: createWebHistory('/todo'),
	routes
})

router.beforeEach(loadLayoutMiddleware)

export default router
