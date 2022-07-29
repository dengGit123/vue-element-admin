<template>
	<el-drawer
	class="setting-drawer"
	size="280px"
	:withHeader="false"
	  :visible.sync="showSetting">
	  <el-divider>导航模式</el-divider>
	  <ul class="nav_items">
		  <li v-for="(item,index) in imgUrl1" :key="index"  @click="handleLayoutType(item)">
			  <div class="imgItem">
				  <img class="img" :src="item.imgrurl" alt="">
				  <div class="icon-checked" v-if="layoutType === item.layoutType">
				    <i class="el-icon-check"></i>
				  </div>
			  </div>
			  <span>{{item.name}}</span>
		  </li>
	  </ul>
	  <el-divider>颜色区块</el-divider>
	  <ul class="nav_items">
	  		  <li v-for="(item,index) in imgUrl2" :key="index" @click="handleSlideClass(item)">
	  			  <div class="imgItem">
	  				  <img class="img" :src="item.imgrurl" alt="">
					  <div class="icon-checked" v-if="slideClass === item.className">
					    <i class="el-icon-check"></i>
					  </div>
	  			  </div>
	  			  <span>{{item.name}}</span>
	  		  </li>
			  <li></li>
	  </ul>
	  <el-divider>主题颜色</el-divider>
	  <div class="color-list">
		   <el-tooltip class="item" v-for="(item,index) in imgUrl3" :key="index" effect="dark" :content="item.name" placement="top">
		       <el-tag :color="item.color" @click="handleThemeClass(item)">
		         <i class="el-icon-check" v-if="themeClass === item.className"></i>
		       </el-tag>
		    </el-tooltip>
	  </div>
	   <el-divider>其他设置</el-divider>
	   <div class="drawer-item">
	     <span>开启多页签</span>
	     <el-switch v-model="tagsView" class="drawer-switch" />
	   </div>
	   <div class="drawer-item">
	     <span>多页签显示图标</span>
	     <el-switch v-model="tagsIcon" class="drawer-switch" />
	   </div>
	</el-drawer>
</template>

<script>
	import themeMinix from './minix'
	import {imgUrl1,imgUrl2,imgUrl3} from './settingData.js';
	export default {
		name: 'setting',
		mixins: [themeMinix],
		computed: {
			layoutType: {
				get(){
					return this.$store.state.setting.layoutType;
				},
				set(val){
					this.$store.commit('setting/setLayoutType',val)
				}
			},
			slideClass: {
				get(){
					return this.$store.state.setting.slideClass;
				},
				set(val){
					this.$store.commit('setting/setSlideClass',val)
				}
			},
			themeClass: {
				get(){
					return this.$store.state.setting.themeClass;
				},
				set(val){
					this.$store.commit('setting/setThemeClass',val)
				}
			},
			themeColor: {
				get(){
					return this.$store.state.setting.themeColor;
				},
				set(val){
					this.$store.commit('setting/setThemeColor',val)
				}
			}
		},
		data(){
			return {
				showSetting: false,
				imgUrl1,
				imgUrl2,
				imgUrl3,
				tagsView:false,
				tagsIcon: false
			}
		},
		methods: {
			handleDrawer(){
				this.showSetting = !this.showSetting
			},
			handleLayoutType(item){
				if (item.layoutType === this.layoutType) return
				this.layoutType = item.layoutType
			},
			handleSlideClass(item){
				if (item.slideClass === this.slideClass) return
				this.slideClass = item.className
			},
			handleThemeClass(item){
				if (item.themeClass === this.themeClass) return
				this.themeClass = item.className
				this.themeColor = item.color
				document.documentElement.style.setProperty('--theme-color',item.color)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.setting-drawer {
		::v-deep .el-drawer__body{
			padding: 30px 20px;
			overflow: auto;
			overflow-x: hidden;
		}
	}
	.nav_items {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		li {
			text-align: center;
			display: flex;
			flex-direction: column;
			padding-bottom: 10px;
			cursor: pointer;
			width: 65px;
			.imgItem {
				width: 100%;
				position: relative;
				.img{
					width: 100%;
					height: 55px;;
				}
				.icon-checked{
					position: absolute;
					right: 0;
					bottom: 0;
					width: 0px;
					height: 0px;
					border: 10px solid var(--theme-color);
					border-left: 10px solid transparent;
					border-top: 10px solid transparent;
					// transform: scale(0.8);
					 border-bottom-right-radius: 10px;
					 i {
					   position: absolute;
					   top: -2px;
					   left: -3px;
					   font-size: 12px;
					   color: #fff;
					   transform: scale(0.8);
					 }
				}
			}
			span {
				font-size: 12px;
				color: #707070;
				margin-top: 10px;
			}
		}
	}
	.color-list {
	  padding: 10px 0;
	  .el-tag {
	    width: 24px;
	    height: 24px;
	    border: none !important;
	    margin-right: 4px;
	    border-radius: 2px;
	    cursor: pointer;
	    padding: 0;
	    text-align: center;
	    vertical-align: top;
	  }
	  .el-icon-check {
	    color: #fff;
	    font-size: 16px;
	    line-height: 24px;
	  }
	}
	
	.drawer-item {
	  color: #707070;
	  font-size: 14px;
	  padding: 12px 0;
	  .drawer-switch {
	    float: right;
	  }
	}
</style>