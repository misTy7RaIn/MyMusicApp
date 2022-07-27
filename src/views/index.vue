<template>
  <div id="app">
    <FooterNav></FooterNav>
    <router-view />
  </div>
</template>
<script>
import FooterNav from "../common/FooterNav.vue";
export default {
  components: { FooterNav },
};
</script>

<style></style>
