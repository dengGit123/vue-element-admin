<template>
	<div class="functional app" :class="classObj">
		<div class="app-container">
			<app-header></app-header>
			<app-main></app-main>
		</div>
	</div>
</template>

<script>
	import appHeader from './appHeader/index.vue';
	import appMain from '@/layouts/components/appMain.vue'
	export default {
		name: 'functional',
		components: {
			appHeader,
			appMain
		},
		computed: {
			slideClass(){
				return this.$store.state.setting.slideClass
			},
			themeClass() {
				return this.$store.state.setting.themeClass
			},
			classObj(){
				return {
					[this.slideClass]: true,
					[this.themeClass]: true
				}
			}
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style>
</style>