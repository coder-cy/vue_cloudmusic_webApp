import Vue from 'vue'
import Router from 'vue-router'
import myMusic from '@/view/my_music/index'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'myMusic',
			component: myMusic
		}
	]
})
