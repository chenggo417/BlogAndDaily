<template>
  <div class="login-wrapper">
    <div class="img-wrapper">
      <img class="bg-img"
           draggable="false"
           src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wppI?ver=53ba" alt="">
    </div>
    <div class="login-form-bg"></div>
    <div class="form-wrapper">
      <v-form class="form" ref="loginForm" v-model="valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="title">
                <p>blog</p>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col
              cols="8"
            >
              <v-text-field
                v-model="FormData.AuthKey"
                :rules="AuthRule"
                :counter="12"
                label="Auth Key"
                required
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col
              cols="8"
            >
              <v-text-field
                v-model="FormData.AdminKey"
                :rules="AdminRule"
                :counter="12"
                label="Admin Key(没有可不填)"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="position-relative">
              <v-btn @click="submit" class="layout-center-absolute">submit</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { AdminAuthenticatePort, AdminAuthenticateResult } from '@/service/userService'

export default Vue.extend({
  name: 'LoginIndex',
  data: () => ({
    valid: true,
    FormData: {
      AuthKey: '',
      AdminKey: ''
    },
    AuthRule: [
      (v: string) => !!v || 'required',
      // (v: string) => /^\w{4,12}$/.test(v) || '4-12位字符'
      (v: string) => /^[a-zA-Z][a-zA-Z0-9_]{3,11}$/.test(v) || '4-12位字符（字母数字下划线 字母开头）'
    ],
    AdminRule: [
      (v: string) => !!v && (/^[a-zA-Z][a-zA-Z0-9_]{0,12}$/.test(v) || '输入中含有非法字符')
    ]

  }),
  methods: {
    auth (): Promise<AdminAuthenticateResult> {
      return AdminAuthenticatePort({
        Key: this.FormData.AuthKey,
        AdminKey: this.FormData.AdminKey
      })
    },
    validator () {
      return new Promise<boolean>((resolve, reject) => {
        this.$nextTick(() => {
          // const flag = (this.$refs.loginForm as any).validate()
          const AuthFlag = this.AuthRule.every((value) => {
            const result = value(this.FormData.AuthKey)
            return typeof result === 'boolean'
          })
          const AdminFlag = this.AdminRule.every(value => {
            const result = value(this.FormData.AdminKey)
            return typeof result === 'boolean'
          })
          const flag = AdminFlag && AuthFlag
          flag ? resolve(true) : reject(new Error('验证未通过'))
        })
      })
    },
    submit () {
      this.validator()
        .then(() => {
          return this.auth()
        })
        .then(res => {
          console.log(res)
          if (res.code === 200) {
            this.$router.push({
              path: '/home'
            })
            this.$store.dispatch('changeUserAuth', res)
          } else {
            return Promise.reject(new Error('验证失败'))
          }
        })
        .catch(err => {
          this.$message.error('失败: ' + err)
        })
    }
  }
})
</script>

<style scoped lang='less'>
.img-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .bg-img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    object-fit: cover;
  }
}

/*
//.login-form-bg, .form-wrapper {
//  position: absolute;
//  top: 50%;
//  left: 50%;
//  transform: translate(-50%, -50%);
//  width: 500px;
//  height: 400px;
//  background-color: inherit;
//  //border: white 2px solid;
//  border-radius: 10px;
//  overflow: hidden;
//  &:before {
//    content: "";
//    background: inherit;
//    position: absolute;
//    top: -30px;
//    right: 0;
//    left: -30px;
//    bottom: 0;
//    //box-shadow: inset 0 0 0 3000px rgba(255,255,255,0.4);
//    filter: blur(10px);
//    backdrop-filter: blur(15px);
//  }
//}
*/

.login-form-bg, .form-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 500px;
  background-color: inherit;
  border-radius: 10px;
  overflow: hidden;
  transition: .2s;
}

.login-form-bg {
  filter: blur(10px);
  backdrop-filter: blur(15px);
  box-shadow: 5px 5px 8px #333333;
}

.title {
  text-align: center;
  margin-top: 40px;
  font-size: 30px;
}

@media screen and (max-width: 1366px) {
  .login-form-bg, .form-wrapper {
    width: 500px;
    height: 400px;
  }
}
</style>
