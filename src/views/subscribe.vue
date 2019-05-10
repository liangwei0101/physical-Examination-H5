<template>
  <mu-paper style="width: 100%; padding:0">

    <mu-appbar color="teal">
      <mu-button icon slot="left" @click="back">
        <i class="material-icons">
          keyboard_backspace
        </i>
      </mu-button>
    </mu-appbar>

    <mu-list v-for="item in mealList" :key="item.id">
      <mu-list-item button :ripple="false" @click="userAdd(item.id)">
        <mu-list-item-action>
          <mu-icon value="grade"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>
          [ {{ item.name }} ] 的价格： {{ item.money }} 元</mu-list-item-title
        >
      </mu-list-item>
      <mu-divider />
    </mu-list>

  </mu-paper>
</template>

<script>
import { mealQryAction, mealProjectByIdQryAction } from "../api/api.js";
export default {
  data() {
    return {
      mealList: [],
      projectList: [],
      nameShowStr: "",
      branchNo: ''
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    selectItemClick(branchNo) {
      this.$router.push({
        path: "/about",
        query: {
          id: branchNo
        }
      });
    },
    mealQry() {
      mealQryAction().then(res => {
        this.mealList = res.data.data;
        this.mealProjectByIdQry(this.mealList[0].id);
        this.nameShowStr = this.mealList[0].name;
      });
    },
    userAdd(id) {
       this.$router.push({
        path: "/user",
         query: {
          id: this.branchNo
        }
      })
    }
  },
  mounted() {
    this.mealQry();
    this.branchNo = this.$route.query.id;
  }
};
</script>

<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
}
</style>