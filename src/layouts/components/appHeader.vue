<template>
	<div class="app-header">
		<template v-if="layoutType === 'classic'">
			<div class="left-container" @click="handleIsCollapse">
				<i :class="isCollapse? 'el-icon-s-unfold':'el-icon-s-fold'"></i>
			</div>
		</template>
		<app-header-right></app-header-right>
	</div>
</template>

<script>
	import appHeaderRight from './appHeaderRight.vue'
	export default {
		name: 'AppHeader',
		components: {
			appHeaderRight
		},
		computed: {
			isCollapse(){
				return this.$store.state.setting.isCollapse
			},
			layoutType(){
				return this.$store.state.setting.layoutType
			}
		},
		data(){
			return {
				
			}
		},
		methods: {
			handleIsCollapse(){
				this.$store.commit('setting/setIsCollapse',!this.isCollapse)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-header{
		width: 100%;
		height: 60px;
		background-color: #fff;
		box-sizing: border-box;
	}
	.left-container{
		height: 100%;
		line-height: 60px;
	}
	.left-container {
		float: left;
		padding: 0 15px;
		cursor: pointer;
		&:hover{
			background-color: rgba(0,0,0,.025);
		}
		i {
			font-size: 20px;
			color: #666;
			line-height: 60px;
		}
		
	}
</style>