<template>
  <mu-card style="width: 100%; padding:0px">
    <mu-appbar color="teal">
      <mu-button icon slot="left" @click="goHome">
        <i class="material-icons">
          keyboard_backspace
        </i>
      </mu-button>
    </mu-appbar>

    <mu-card-media :title="branchObj.name" :sub-title="branchObj.address">
      <img src="branch.jpg" />
    </mu-card-media>
    <mu-card-title title="体检项目"></mu-card-title>
    <mu-card-text>
      {{ projectShowStr }}
    </mu-card-text>
    <mu-card-actions>
      <mu-button flat @click="goSubscribe">
        <i class="material-icons">
          add_shopping_cart
        </i>
      </mu-button>
    </mu-card-actions>
  </mu-card>
</template>

<script>
import {
  branchQryAction,
  branchByIdQryAction,
  projectQryAction
} from "../api/api.js";
import { constants } from "crypto";
export default {
  data() {
    return {
      branchList: [],
      branchNo: "",
      branchObj: {},
      projectList: [],
      projectShowStr: ""
    };
  },
  methods: {
    UserQry() {
      branchQryAction().then(res => {
        this.branchList = res.data.data;
      });
    },
    selectItemClick(branchNo) {
      this.$router.push({
        path: "/about",
        query: {
          id: this.branchNo
        }
      });
    },
    goHome() {
      this.$router.push({
        path: "/"
      });
    },
    goSubscribe() {
      this.$router.push({
        path: "/user"
      });
    },
    branchByIdQry(branchNo) {
      branchByIdQryAction(branchNo).then(res => {
        this.branchObj = res.data.data;
      });
    },
    projectQry() {
      projectQryAction().then(res => {
        this.projectList = res.data.data;

        for (let i = 0; i < this.projectList.length; i++) {
          this.projectShowStr +=
            (i + 1).toString() + ":" + this.projectList[i].name + "、";
        }
      });
    }
  },
  mounted() {
    this.branchNo = this.$route.query.id;
    this.branchByIdQry(this.branchNo);
    this.projectQry();
  }
};
</script>

<style>
.demo-list-wrap {
  width: 100%;
  overflow: hidden;
}

.card {
  margin-top: 1%;
  margin-left: 1%;
  margin-right: 1%;
}
</style>