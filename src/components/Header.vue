<template>
  <div class="header flex">
    <div>
      <span @click="$router.go(-1)">&lt;</span>
      <slot name="left"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>
<style scoped lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 375px;
  height: 40px;
  background: red;
  font-size: 16px;
  color: #fff;
  padding: 0 10px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
