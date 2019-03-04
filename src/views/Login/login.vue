<template>
  <div>
    <van-nav-bar title="用户登陆" left-text="返回" left-arrow @click-left="goBack"/>
    <div class="register-panel">
      <van-field
        v-model="username"
        label="用户名"
        icon="clear"
        placeholder="请输入用户名"
        required
        @click-icon="username = ''"
      />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
      <div class="register-button">
        <van-button :loading="openLoading" @click = "registrycli" type="primary" size="large">马上登陆</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant'
import { registry } from '@/api/api'
export default {
  data () {
    return {
      openLoading: false,
      username: "",
      password: ""
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    registrycli () {
      this.openLoading = true
      registry({username: this.username, password: this.password}).then(response => {
        if(response.data.code == 200){
            Toast.success('注册成功')
            this.$router.push('/')
        }else{
            Toast.fail('注册失败')
            this.openLoading = false
        }
      })
    }
  }
};
</script>
<style scoped>
.register-panel {
  width: 96%;
  border-radius: 5px;
  margin: 20px auto;
  padding-bottom: 50px;
}
.register-button {
  padding-top: 10px;
}
</style>