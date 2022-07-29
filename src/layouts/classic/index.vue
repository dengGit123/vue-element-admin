<template>
	<div class="classic app" :class="classObj">
		<sidebar></sidebar>
		<div class="app-container">
			<app-header></app-header>
			<app-main></app-main>
		</div>
	</div>
</template>

<script>
	import appHeader from '@/layouts/components/appHeader.vue';
	import appMain from '@/layouts/components/appMain.vue'
	import sidebar from './sidebar/index.vue'
	export default {
		name: 'classic',
		components: {
			appHeader,
			appMain,
			sidebar
		},
		computed: {
			isCollapse() {
				return this.$store.state.setting.isCollapse
			},
			slideClass() {
				return this.$store.state.setting.slideClass
			},
			themeClass() {
				return this.$store.state.setting.themeClass
			},
			classObj() {
				return {
					[this.slideClass]: true,
					[this.themeClass]: true,
					hideSidebar: this.isCollapse
				}
			}
		},
		data() {
			return {}
		}
	}
</script>

<style>
</style>
