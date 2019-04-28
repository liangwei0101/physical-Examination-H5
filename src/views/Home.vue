<template>
  <div class="home" style="width: 100%; padding:0">
    <mu-paper>
      <mu-appbar color="cyan">
        预约
      </mu-appbar>
      <mu-list textline="three-line" v-for="item in branchList" :key="item.branch_no">

        <mu-list-item avatar :ripple="false" button>
          <mu-list-item-action>
            <mu-avatar color="teal" style="font-size: 14px;">
              {{item.name}}
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{item.name}}</mu-list-item-title>
            <mu-list-item-sub-title>
              <span style="color: rgba(0, 0, 0, .87)">最大预约数：{{item.subscribeMaxCount}}人</span>
              <br />
              {{item.address}}
            </mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-divider />

      </mu-list>
    </mu-paper>
  </div>
</template>

<script>
// @ is an alias to /src
import { branchQryAction } from "../api/user.js"
export default {
  data() {
    return {
      branchList: []
    };
  },
  methods: {
    UserQry() {
      branchQryAction().then(res => {
        this.branchList = res.data.data
      })
    }
  },
  mounted() {
    this.UserQry()
  }
}
</script>

<style>
.demo-list-wrap {
  width: 100%;
  overflow: hidden;
}
</style>
