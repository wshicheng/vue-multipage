<template>
  <div>
    <div id="login_head">
      <h1>蜜蜂出行数据运营平台</h1>
    </div>
    <div id="login_form">
      <Form class="form" ref="formInline" :model="formInline" :rules="ruleInline">
          <h1>登录</h1>
          <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="请输入用户名">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="请输入密码">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem>
              <button type="button" @click="handleSubmit('formInline')">登录</button>
          </FormItem>
      </Form>
    </div>
    <div id="login_footer">
      <h4>北京蜜蜂出行科技有限公司版权所有©2017</h4>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('登录成功!');
                        this.$router.push('/')
                    } else {
                        // this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>
<style lang='scss' scoped type="text/css">
#login_head {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-indent: 40px;
  h1 {
    color: #888;
    font-size: 30px;
  }
}

#login_form {
  width: 100%;
  height: 800px;
  background: url('../../assets/img/1.jpg') no-repeat;
  background-size: cover;
  position: relative;
  form {
    padding: 40px 50px 20px 50px;
    background:#fff;
    border: 1px solid #444;
    border-radius: 4px;
    width: 420px;
    position: absolute;
    right: 30px;
    top: 35%;
    h1 {
      color: #444;
      margin: -20px 0 10px 0;
    }
    button {
      width: 320px;
      height: 36px;
      border-radius: 4px;
      outline: none;
      border: none;
      background: rgba(241, 194, 52, 1);
      color: #fff !important;
      cursor: pointer;
    }
  }
}

#login_footer {
  width: 100%;
  overflow: hidden;
  height: 50px;
  line-height: 50px;
  text-align: center;
  h4 {
    margin: 0 auto;
  }
}
</style>




