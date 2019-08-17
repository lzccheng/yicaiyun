<template>
  <div class="_nav ">
    <div class="_nav_ flex">
      <div
        @click="$router.push(item.path)"
        v-for="(item, i) in nav"
        :key="i"
        class="_nav_item flex flex_column"
      >
        <div class="_nam_img_div">
          <img
            :src="item.icon"
            alt=""
            class="_nam_img"
            :class="{ _nam_img_3: i === 2 }"
          />
        </div>
        <span class="_nav_name">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        {
          path: `/index`,
          icon: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566032755769&di=d686369bf36a70c23ce7637c6fdd9592&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F40%2F21%2F09573cf0032c838.jpg`,
          name: `首页`
        },
        {
          path: `/index/hall`,
          icon: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566032755769&di=d686369bf36a70c23ce7637c6fdd9592&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F40%2F21%2F09573cf0032c838.jpg`,
          name: `大厅`
        },
        {
          path: `/index/interaction`,
          icon: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566032755769&di=d686369bf36a70c23ce7637c6fdd9592&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F40%2F21%2F09573cf0032c838.jpg`,
          name: `互动`
        },
        {
          path: `discover`,
          icon: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566032755769&di=d686369bf36a70c23ce7637c6fdd9592&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F40%2F21%2F09573cf0032c838.jpg`,
          name: `发现`
        },
        {
          path: `my`,
          icon: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566032755769&di=d686369bf36a70c23ce7637c6fdd9592&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F40%2F21%2F09573cf0032c838.jpg`,
          name: `我的`
        }
      ]
    };
  }
};
</script>
<style scoped lang="less">
._nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 375px;
  height: 50px;
  line-height: 50px;
  background: #fff;
}
.flex {
  display: flex;
}
.flex_column {
  flex-direction: column;
  justify-content: center;
}
._nav_item {
  position: relative;
  width: 25%;
  text-align: center;
  font-size: 14px;
  color: rgb(153, 153, 153);
}
._nam_img_div {
  width: 24px;
  height: 30px;
  margin: 0 auto;
}
._nam_img {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-top: 5px;
}
._nam_img_3 {
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -25px;
  margin-top: -25px;
  width: 50px;
  height: 50px;
}
._nav_name {
  display: inline-block;
  line-height: 20px;
}
</style>
