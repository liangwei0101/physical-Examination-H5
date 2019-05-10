<template>
  <mu-paper style="width: 100%; padding:0">
    <mu-appbar color="teal">
      <mu-button icon slot="left" @click="back">
        <i class="material-icons">
          keyboard_backspace
        </i>
      </mu-button>
    </mu-appbar>

    <mu-container>
      <mu-form
        :model="form"
        class="mu-demo-form"
        label-position="left"
        label-width="100"
      >
        <mu-form-item prop="input" label="姓名">
          <mu-text-field v-model="form.realName"></mu-text-field>
        </mu-form-item>

        <mu-form-item label="密码" prop="password" :rules="passwordRules">
          <mu-text-field
            type="password"
            v-model="form.pwd"
            prop="password"
          ></mu-text-field>
        </mu-form-item>

        <mu-form-item prop="input" label="身份证号">
          <mu-text-field v-model="form.idCard"></mu-text-field>
        </mu-form-item>

        <mu-form-item prop="radio" label="性别">
          <mu-radio v-model="form.sex" value="男" label="男"></mu-radio>
          <mu-radio v-model="form.sex" value="女" label="女"></mu-radio>
        </mu-form-item>

        <mu-form-item prop="input" label="手机号码">
          <mu-text-field v-model="form.phone"></mu-text-field>
        </mu-form-item>

        <mu-form-item prop="input" label="邮箱">
          <mu-text-field v-model="form.email"></mu-text-field>
        </mu-form-item>

        <mu-form-item prop="select" label="套餐">
          <mu-select v-model="form.meal">
            <mu-option
              v-for="option in mealList"
              :key="option"
              :label="option.name + '：' + option.money + '元'"
              :value="option.id"
            ></mu-option>
          </mu-select>
        </mu-form-item>

        <mu-form-item prop="date" label="预约时间">
          <mu-date-input
            v-model="form.date"
            type="date"
            label-float
            full-width
            actions
          ></mu-date-input>
        </mu-form-item>

        <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
  </mu-paper>
</template>

<script>
import {
  mealQryAction,
  mealProjectByIdQryAction,
  UserAddAction,
  subscribeAddAction
} from "../api/api.js";
export default {
  data() {
    return {
      labelPosition: "top",
      form: {
        realName: "",
        pwd: "",
        idCard: "",
        select: "",
        date: "",
        sex: "",
        userType: "用户",
        phone: "",
        email: "",
        meal: ""
      },
      mealList: [],
      argeeRules: [{ validate: val => !!val, message: "必须同意用户协议" }],
      validateForm: {
        username: "",
        password: "",
        isAgree: false
      }
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    mealQry() {
      mealQryAction().then(res => {
        this.mealList = res.data.data;
        this.nameShowStr = this.mealList[0].name;
      });
    },
    submit() {
      UserAddAction(this.form).then(res => {
        let addNumberValidateForm = {
          idCard: this.form.idCard,
          branchNo: this.branchNo,
          subscribeType: "个人",
          subscribeTime: this.form.date,
          mealId: this.form.meal
        };
        subscribeAddAction(addNumberValidateForm).then(res => {
            alert('121212')
        });
      });
    }
  },
  mounted() {
    this.branchNo = this.$route.query.id;
    this.mealQry();
  }
};
</script>
<style>
.mu-demo-form {
  width: 100%;
  margin-top: 20px;
  max-width: 460px;
}
</style>