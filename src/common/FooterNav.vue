<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item name="category" icon="search">标签</van-tabbar-item>
      <van-tabbar-item name="shop-cart" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
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
