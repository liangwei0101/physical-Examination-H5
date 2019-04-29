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
      <mu-list-item button :ripple="false" @click="mealProjectByIdQry(item.id)">
        <mu-list-item-action>
          <mu-icon value="grade"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>
          [ {{ item.name }} ] 的价格： {{ item.money }} 元</mu-list-item-title
        >
      </mu-list-item>
      <mu-divider />
    </mu-list>

    <mu-chip style="margin-top:10px;" class="demo-chip" color="primary">
      {{ nameShowStr }}
    </mu-chip>

    <mu-list v-for="item in projectList" :key="item.id">
      <mu-list-item button :ripple="false">
        <mu-list-item-title>{{ item.name }}</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="info"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider />
    </mu-list>

    <mu-card-actions>
      <mu-button color="primary">购买</mu-button>
    </mu-card-actions>
  </mu-paper>
</template>

<script>
import { mealQryAction, mealProjectByIdQryAction } from "../api/api.js";
export default {
  data() {
    return {
      mealList: [],
      projectList: [],
      nameShowStr: ""
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
        // console.log("------------------");
        // console.log(res.data.data);
        // console.log("------------------");
        this.mealProjectByIdQry(this.mealList[0].id);
        this.nameShowStr = this.mealList[0].name;
      });
    },
    mealProjectByIdQry(id) {
      this.mealList.forEach(element => {
        if (element.id === id) {
          this.nameShowStr = element.name;
        }
      });

      mealProjectByIdQryAction(id).then(res => {
        this.projectList = res.data.data;
      });
    }
  },
  mounted() {
    this.mealQry();
  }
};
</script>

<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
}
</style>