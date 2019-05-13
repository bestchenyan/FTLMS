<template>
    <div class="login">
        <div class="login-form">
            <div class="login-header">
                <img src="../../assets/images/logo.svg" width="100" height="100" alt="">
                <p>输电线路故障位置监测系统</p>
            </div>
            <el-input placeholder="请输入用户名" suffix-icon="fa fa-user" v-model="username" style="margin-bottom: 18px">
            </el-input>
            <el-input placeholder="请输入密码" suffix-icon="fa fa-keyboard-o" v-model="password" type="password" style="margin-bottom: 18px" @keyup.native.enter="login">
            </el-input>
            <el-button type="primary" :loading="loginLoading" style="width: 100%;margin-bottom: 18px" @click.native="sign">登录
            </el-button>
            <div>
                <el-checkbox v-model="Remenber"> Remenber</el-checkbox>
                 <a href="javascript:;" style="float: right;color: #3C8DBC;font-size: 14px" @click="register">忘记密码？</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            Remenber: true,
            loginLoading: false
        }
    },
    methods: {
        sign: function() {
            this.signIn().then((data) => {
                this.$router.push({ name: 'manage', params: { user: data } })
            }).catch(err => {
                console.log('出现错误', err.message)
            })
        },
        signIn: function() {
            let data = {
                username: this.username,
                password: this.password
            }
            return this.$axios.post('/api/user/signIn', data, {
                withCredentials: true
            }).then(response => {
                return response.data

            }).catch(err => {
                throw new Error(err.message)
            })
        },
        register:function(){
            this.$router.push({ name: 'register'})
        }
    }
}
</script>
<style lang="less">
@import "Login.less";
</style>