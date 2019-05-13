<template>
    <div class="login">
        <div class="login-form">

            <el-input placeholder="请输入用户名" suffix-icon="fa fa-user" v-model="username" style="margin-bottom: 18px">
            </el-input>
            <el-input placeholder="请输入真实姓名" suffix-icon="fa fa-user" v-model="realname" style="margin-bottom: 18px">
            </el-input>
            <el-input placeholder="请输入密码" suffix-icon="fa fa-keyboard-o" v-model="password" type="password" style="margin-bottom: 18px" @keyup.native.enter="login">
            </el-input>
            <el-input placeholder="请确认密码" suffix-icon="fa fa-keyboard-o" v-model="password" type="password" style="margin-bottom: 18px" @keyup.native.enter="login">
            </el-input>
            <el-input placeholder="请输入手机号码" suffix-icon="fa fa-keyboard-o" v-model="phone" type="telephone" style="margin-bottom: 18px" @keyup.native.enter="login">
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
                value: '1',
                label: '线路管理员'
            }, {
                value: '2',
                label: '巡检人员',

            }],
            role: '',
              options2: [{
                value: '1',
                label: '武深高速K1标段'
            }, {
                value: '2',
                label: '武深高速K2标段',
            }],
            pollingArea: '',
            username: '',
            realname:'',
            password: '',
            phone:'',
            email:'',
            create_time:'',
            update_time:'',
            Remenber: true,
            loginLoading: false
        }
    },
    methods: {

        sign: function() {
                    this.signUp().then((data) => {
                        alert("注册成功");
                    }).catch(err => {
                        console.log('出现错误', err.message)
                    })
        },
        signUp: function () {
            let data = {
                role:this.role,
                username: this.username,
                realname: this.realname,
                password: this.password,
                phone:this.phone,
                email: this.email,
                polling_area_id:this.pollingArea,
                create_time: new Date(),
                update_time:new Date(),
            }
            return this.$axios.post('/api/user/signUp', data, {
                withCredentials: true
            }).then(response => {
                return response.data
            }).catch(err => {
                throw new Error(err.message)
            })
        },
    }
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
      top: 23rem;
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