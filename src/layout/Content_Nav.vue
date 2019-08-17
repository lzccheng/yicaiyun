<template>
  <div class="padding_bom">
    <router-view />
    <Nav></Nav>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav
  }
};
</script>
<style scoped leng="less">
.padding_bom {
  padding-bottom: 80px;
}
</style>
