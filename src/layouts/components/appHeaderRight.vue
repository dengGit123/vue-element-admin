<template>
	<div class="app-header-right">
		<el-dropdown class="avatar-container right-menu-item hover-effect" trigger="hover">
		  <div class="avatar-wrapper">
		    <img src="../../assets/logo.png" class="user-avatar">
		    <span>admin</span>
		    <i class="el-icon-arrow-down"></i>
		  </div>
		  <el-dropdown-menu slot="dropdown">
		    
		    <el-dropdown-item>
		      <i class="el-icon-switch-button"></i>退出系统
		    </el-dropdown-item>
		    
		  </el-dropdown-menu>
		</el-dropdown>
		<el-tooltip content="设置" placement="bottom">
		  <div class="right-menu-item hover-effect" @click="handleSetting()">
		    <i class="el-icon-setting"></i>
		  </div>
		</el-tooltip>
		<setting ref="setting"></setting>
	</div>
</template>

<script>
	import setting from '@/layouts/components/setting/index.vue'
	export default {
		name: 'appHeaderRight',
		components:{
			setting
		},
		data(){
			return {
				
			}
		},
		methods: {
			handleSetting(){
				this.$refs.setting.handleDrawer()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-header-right{
		float: right;
		height: 100%;
	}
	.right-menu-item {
	  display: inline-block;
	  padding: 0 8px;
	  height: 100%;
	  font-size: 18px;
	  color: #666666;
	  vertical-align: text-bottom;
	  line-height: 60px;
	
	  &.hover-effect {
	    cursor: pointer;
	    transition: background 0.3s;
	
	    &:hover {
	      background: rgba(0, 0, 0, 0.025);
	    }
	  }
	}
	.user-avatar {
	  cursor: pointer;
	  width: 26px;
	  height: 26px;
	  border-radius: 50%;
	  vertical-align: top;
	  margin-top: 18px;
	}
</style>