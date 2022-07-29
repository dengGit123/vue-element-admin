import Layouts from '@/layouts/index.vue';
const routes = [{
		path: '/login',
		name: 'login',
		component: () => import( /* webpackChunkName: "login" */ '@/views/login/index.vue')
	},
	{
		path: '/',
		component: Layouts,
		children: [{
			path: '/onlineDev/webDesign',
			component: () => import( /* webpackChunkName: "test" */ '@/views/test/index.vue')
		}]
	}
]

export default routes;
