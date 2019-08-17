<template>
  <div class="_home">
    <Header>
      首页
      <span slot="left">返回</span>
      <span slot="right">更多</span>
    </Header>
    <div>
      <Swipe :autoplay="3000" indicator-color="red">
        <SwipeItem v-for="(item, i) in banner" :key="i">
          <img :src="item.pic" alt="" />
        </SwipeItem>
      </Swipe>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import { Swipe, SwipeItem } from "vant";

export default {
  name: "home",
  components: {
    Header,
    Swipe,
    SwipeItem
  },
  data() {
    return {
      banner: []
    };
  },
  mounted() {
    window.console.log(this.$api);
    this.getHomeData();
  },
  methods: {
    async getHomeData() {
      const opt = {
        params: {
          show_location: 3
        }
      };
      let [err, res] = await this.$api.homeGetHomeData(opt);
      if (err) {
        return window.console.log(err.message);
      }
      window.console.log(`res:`, res);
      this.banner = res.data.wap_banner_img;
    }
  }
};
</script>
<style lang="less" scoped>
.test {
  height: 30px;
  background: teal;
  width: 375px;
}
._home {
  padding-top: 40px;
}
</style>
