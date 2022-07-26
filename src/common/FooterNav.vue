<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o" to="/home"
        >发现</van-tabbar-item
      >
      <van-tabbar-item name="category" icon="search" to="/login"
        >播客</van-tabbar-item
      >
      <van-tabbar-item name="shop-cart" icon="friends-o" to="/home"
        >我的</van-tabbar-item
      >
      <van-tabbar-item name="setting" icon="setting-o">关注</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">社区</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style></style>
