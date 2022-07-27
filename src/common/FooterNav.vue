<template>
  <div>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup
      v-model="show"
      position="left"
      :style="[{ width: ' 80% ', height: '100%' }]"
      >内容</van-popup
    >
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o" to="/home"
        >发现</van-tabbar-item
      >
      <van-tabbar-item name="podcast" icon="search" to="/podcast"
        >播客</van-tabbar-item
      >
      <van-tabbar-item name="my" icon="friends-o" to="/my"
        >我的</van-tabbar-item
      >
      <van-tabbar-item name="focus-on" icon="setting-o" to="/focus-on"
        >关注</van-tabbar-item
      >
      <van-tabbar-item name="community" icon="setting" to="/community"
        >社区</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  data() {
    return {
      active: 0,
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style></style>
