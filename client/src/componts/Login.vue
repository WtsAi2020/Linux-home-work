<template>
  <div class="login">
    <section class="form_container">
      <div class="manage_tip"></div>
      <el-form
        :model="loginUser"
        :rules="rules"
        ref="loginForm"
        class="loginForm"
        label-width="60px"
      >
        <el-form-item label="学号" prop="userId">
          <el-input v-model="loginUser.userId" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginUser.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登 录</el-button>
        </el-form-item>
        <ul class="tiparea">
          <li>
            还没有账号？现在
            <router-link to="/register">注册</router-link>
          </li>
          <li class="iconQq">
            <span>QQ登录：</span>
            <router-link to="#">
              <img src="../assets/icon/QQ.png" alt="QQ登录" />
            </router-link>
          </li>
        </ul>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginUser: {
        userId: "",
        password: ""
      },
      rules: {
        userId: [
          {
            required: true,
            message: "账号不正确",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("/api/usersController/login",this.loginUser)
            .then(res => {
              console.log(res);
              this.$router.push("/");
            });
        }
      });
    }
  }
};
</script>

<style scoped>
.form_container {
  display: flex;
  width: 370px;
  height: 250px;
  position: absolute;
  top: 20%;
  left: 38%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}
.form_container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: #fff;
}
.loginForm {
  height: 240px;
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit_btn {
  width: 100%;
}
.tiparea {
  font-size: 12px;
  color: #333;
  list-style-type: none;
}
.iconQq {
  margin-left: 35%;
}

.iconQq span {
  float: left;
}
.iconQq img {
  float: left;
  margin-right: 40px;
  width: 32px;
  height: 32px;
}
.tiparea li {
  line-height: 32px;
}
.tiparea li a {
  color: #409eff;
}
</style>


