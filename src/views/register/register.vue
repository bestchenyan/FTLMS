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
            <el-input placeholder="请确认密码" suffix-icon="fa fa-keyboard-o" v-model="password" type="password" style="margin-bottom: 18px" @keyup.native.enter="login">
            </el-input>
            <el-input placeholder="请输入手机号码" suffix-icon="fa fa-keyboard-o" v-model="telephone" type="telephone" style="margin-bottom: 18px" @keyup.native.enter="login">
            </el-input>
            <el-input placeholder="请输入邮箱" suffix-icon="fa fa-keyboard-o" v-model="email" type="email" style="margin-bottom: 18px" @keyup.native.enter="login">
            </el-input>
            <el-select v-model="role" placeholder="请选择注册身份" style="margin-bottom: 18px">
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
                </el-option>
            </el-select>
            <el-select v-model="pollingArea" placeholder="请选择巡检区域" style="margin-bottom: 18px">
                <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
                </el-option>
            </el-select>
            <el-button type="primary" :loading="loginLoading" style="width: 100%;margin-bottom: 18px" @click.native="sign">注册
            </el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            options1: [{
                value: '选项1',
                label: '线路管理员'
            }, {
                value: '选项2',
                label: '选件人员',
                disabled: true
            }],
            role: '',
              options2: [{
                value: '选项1',
                label: '区域Ⅰ'
            }, {
                value: '选项2',
                label: '区域Ⅱ',
                disabled: true
            }],
            pollingArea: '',
            username: '',
            password: '',
            telephone:'',
            email:'',
            Remenber: true,
            loginLoading: false
        }
    },
    methods: {
        sign: function() {

        }
    }
    // data() {
    //     let signInForm = {
    //         username: '',
    //         pass: ''
    //     }
    //     return {
    //         checked: true,
    //         signInForm
    //     }
    // },
    // components: {},
    // computed: {},
    // created() {
    //     console.log(111)
    // },
    // methods: {
    //     sign: function() {
    //         this.signIn().then((data) => {
    //             this.$router.push({ name: 'manage', params: { user: data } })
    //         }).catch(err => {
    //             console.log('出现错误', err.message)
    //         })
    //     },
    //     signIn: function() {
    //         let data = {
    //             username: this.signInForm.username,
    //             password: this.signInForm.pass
    //         }
    //         return this.$axios.post('/api/user', data, {
    //             withCredentials: true
    //         }).then(response => {
    //             return response.data

    //         }).catch(err => {
    //             throw new Error(err.message)
    //         })
    //     }
    // }
}
</script>
<style lang="less" scoped>
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #e4e5e6;
  .login-form{
    width: 375px;
    // height: 400px;
    padding: 30px;
    background-color: white;
    text-align: left;
    border-radius: 4px;
    position: relative;
    margin-left: 0;
    margin-right: 0;
    zoom: 1;
    display: block;
    .login-header{
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
}
</style>