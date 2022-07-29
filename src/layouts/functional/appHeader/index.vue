<template>
	<div class="app-header">
		<logo></logo>
		<div class="nav-menu-container" ref="topMenu">
			<horizontal-menu v-bind="menuOptions" :router="true" :menuData="menuList" :default-active="activeMenu"></horizontal-menu>
		</div>
		<app-header-right></app-header-right>
	</div>
</template>

<script>
	import elementResizeDetector from 'element-resize-detector';
	import {transformMenu} from '@/utils/helper.js';
	import menuList from '../../components/menuData.js';
	import logo from '@/layouts/components/logo.vue';
	import appHeaderRight from '@/layouts/components/appHeaderRight.vue';
	 import horizontalMenu from '@/layouts/components/menu.js';
	export default {
		name: 'appHeader',
		components: {
			logo,
			horizontalMenu,
			appHeaderRight
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
				mode: 'horizontal',
				menuList:[],
				menuData:transformMenu(menuList),
				menuOptions:{
				  mode:'horizontal',
				  // backgroundColor:'#031e39',
				  // textColor: '#fff',
				  // activeTextColor: '#1890ff'
				}
			}
		},
		created() {
			this.watchSize()
		},
		methods: {
			watchSize(){
				let _this = this;
				let elementResize = elementResizeDetector()
				this.$nextTick(()=>{
					let topMenu = this.$refs.topMenu
					elementResize.listenTo(topMenu,ele => {
						// console.log(ele)
						let width = topMenu.clientWidth
						let newList = []
						let moreItem = {
						  path: "/menuMore",
						  children: [],
						  meta:{
						    title: '更多 ...',
						    icon:'',
						    hideInMenu:false
						  }
						}
						let number = Math.floor(width / 145)
						let length = _this.menuData.length
						if(number>=length){
							_this.menuList = _this.menuData
							return 
						}else{
							  for(let i=0;i<length;i++){
							    let item = _this.menuData[i];
							    if(i<number-1){
							      newList.push(item)
							    }else{
							      moreItem.children.push(item)
							    }
							  }
							  if( moreItem.children.length){
							      newList.push(moreItem)
							}
							 _this.menuList = newList
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-header {
		display: flex;
		height: 60px;
		width: 100%;
		background-color: #fff;
	}
	.nav-menu-container {
		flex: 1;
		::v-deep .el-menu.el-menu--horizontal{
			border-bottom: 0;
		}
	}
</style>