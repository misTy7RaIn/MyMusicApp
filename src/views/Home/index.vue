<template>
  <div>
    <h2>首页组件</h2>
  </div>
</template>

<script>
import { getMv } from "../../api/mv";
import { getAllMv } from "../../api/mv";

export default {
  data() {
    return {
      MvList: [],
      AllMvList: [],
    };
  },
  created() {
    this.getMVlist();
    this.getAllMVlist();
  },

  methods: {
    // 获取MV列表
    getAllMVlist() {
      getAllMv().then((res) => {
        this.AllMvList = res.data;
      });
    },
    // 获取MV列表
    getMVlist() {
      getMv().then((res) => {
        this.MvList = res.data;
      });
    },
  },
};
</script>

<style></style>
