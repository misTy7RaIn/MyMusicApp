<template>
  <div>
    <h2>导航</h2>
    <router-view />
    <FooterNav></FooterNav>
  </div>
</template>
<script>
import FooterNav from "../common/FooterNav";
export default { components: { FooterNav } };
</script>

<style></style>
