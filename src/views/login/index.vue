<template>
	<div class="login-container">
		<el-form class="login-form" ref="formData" :model="formData" :rules="rules">
			<el-form-item prop='account'>
				<el-input v-model="formData.account">
					<i slot="prefix" class="el-icon-user"></i>
				</el-input>
			</el-form-item>
			<el-form-item prop='password'>
				<el-input v-model="formData.password">
					<i slot="prefix" class="el-icon-lock"></i>
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button class="btn-login" type="primary" :loading="loadingLogin" @click="handleLogin">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	// import {
	// 	login
	// } from '@/api/user.js';
	export default {
		name: 'Login',
		data() {
			return {
				formData: {
					account: '',
					password: ''
				},
				rules: {
					account: [{
						required: true,
						message: '请输入',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入',
						trigger: 'blur'
					}]
				},
				loadingLogin: false
			};
		},
		methods: {
			handleLogin() {
				this.$refs.formData.validate((valid) => {
					if (valid) {
						this.loadingLogin = true;
					// 	login(this.formData).then(res => {
					// 		// console.log()
					// 		this.$router.push({
					// 			name: this.$config.homeName
					// 		});
					// 	}).catch(error => {
					// 		console.log(error);
					// 	}).finally(() => {
					// 		this.loadingLogin = false;
					// 	});
					// } else {
						return false;
					}
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.login-container {
		position: relative;
		width: 100%;
		height: 100%;
		background: url(../../assets/images/login_bg.jpg) no-repeat;
		background-size: cover;

		.login-form {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 20%;
			transform: translate(-50%, -50%);

			.btn-login {
				width: 50%;
				transform: translateX(50%);
			}
		}
	}
</style>
