<template>
	<div class="logo-container">
		<div class="logo-wrapper">
			<img class="logo" src="../../assets/logo.png" alt="">
			<span class="logo-title">管理平台</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'logo',
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss">
	.classic {
		.logo-container{
			width: 100%;
			height: 60px;
			line-height: 60px;
			// background-color: #031e39;
		}
		.logo{
			width: 40px;
			height: 40px;
			border-radius: 50%;
			vertical-align: middle;
			margin: 0 10px;
		}
		.logo-title {
			color: #fff;
		}
	}
	.plain {
		.logo-container{
			width: 100%;
			height: 60px;
			line-height: 60px;
			// background-color: #031e39;
		}
		.logo{
			display: block;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			// vertical-align: middle;
			margin: 0 auto;
			transform: translateY(10px);
		}
		.logo-title {
			color: #fff;
			display: none;
		}
	}
	.functional {
		.logo-container{
			width: 210px;
			height: 60px;
			line-height: 60px;
			// background-color: #031e39;
			overflow: hidden;
		}
		.logo{
			width: 40px;
			height: 40px;
			border-radius: 50%;
			vertical-align: middle;
			margin: 0 10px;
		}
		.logo-title {
			color: #fff;
		}
	}
</style>