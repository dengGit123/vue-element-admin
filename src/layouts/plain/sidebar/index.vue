<template>
	<div class="app-sidebar-container">
		<logo></logo>
		<el-scrollbar class="sidebar-scrollbar-container">
		  <side-menu v-bind="menuOptions" layoutType="plain" :collapse="true" :menuData="menuData" :router="true" :default-active="activeMenu"></side-menu>
		</el-scrollbar>
	</div>
</template>

<script>
	import {transformMenu} from '@/utils/helper.js';
	import menuList from '../../components/menuData.js';
	import logo from '@/layouts/components/logo.vue';
	import sideMenu from '@/layouts/components/menu.js';
	export default {
		name: 'sidebar',
		components: {
			logo,
			sideMenu
		},
		computed:{
			// menuData(){
			// 	return this.$store.state.user.menus
			// },
		  activeMenu(){
		    return this.$route.fullPath
		  }
		},
		data(){
			return {
				menuData: transformMenu(menuList),
				menuOptions:{
				  mode:'vertical',
				  // backgroundColor:'#001529',
				  // textColor: '#fff',
				  // activeTextColor: '#1890ff'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sidebar-scrollbar-container {
		height: calc(100% - 60px);
		::v-deep .el-scrollbar__wrap {
			overflow-x: hidden;
		}
	}
</style>