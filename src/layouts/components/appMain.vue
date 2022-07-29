<template>
	<div class="app-main">
		<transition>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'appMain',
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-main {
		width: 100%;
		height: calc(100% - 60px);
		padding: 6px;
		box-sizing: border-box;
	}
</style>