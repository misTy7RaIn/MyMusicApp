<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ message: '请填写手机号' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          @click.stop="GetLongin"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    // onSubmit(values) {
    //   console.log("submit", values);
    // },
    //登录
    onSubmit() {
      // let CardNo_reg = /^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/
      // CardNo_reg.test(this.form.username):
      // this.$router.push({
      //     path: this.redirect || "/index",
      // });
      // return
      if (!this.form.phone) {
        this.$message({
          message: "请输入电话号码",
          type: "warning",
        });
        return;
      } else if (!this.form.password) {
        this.$message({
          message: "请输入密码",
          type: "warning",
        });
        return;
      } else {
        this.$store
          .dispatch("Login", this.form)
          .then(() => {
            console.log(123);
            this.loading = false;
            this.form = {};
            this.$router.push({
              path: "/index",
            });
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style></style>
