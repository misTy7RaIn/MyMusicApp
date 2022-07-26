<template>
  <div id="app">
    <router-view />
    <FooterNav></FooterNav>
  </div>
</template>
<script>
import FooterNav from "./common/FooterNav.vue";
export default {
  components: { FooterNav },
};
</script>

<style></style>
