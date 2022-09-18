<template>
  <div class="wrapper">
    <div class="btn-test">
      <v-btn
             v-for="(routeItem,index) in routerControl"
             @click="routerController(routeItem)"
             :key="routeItem+index">
        {{ routeItem }}
      </v-btn>
    </div>
<!--    <div class="alert-wrapper">-->
<!--      <alert-pop-index></alert-pop-index>-->
<!--    </div>-->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import AlertPopIndex from '@/components/AlertPop/AlertPopIndex.vue'

export default Vue.extend({
  name: 'App',
  data: () => ({
    routerControl: [
      '/login',
      '/home',
      '/articleList'
    ]
  }),
  // components: {
  //   AlertPopIndex
  // },
  methods: {
    routerController (path: string) {
      this.$router.push({ path })
    }
  }
})
</script>

<style lang="less">
.btn-test {
  position: absolute;
  left: 30px;
  top: 500px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 20px;
  }
}
.alert-wrapper {
  position: absolute;
  top: 10px;
  width: 100vw;
}
</style>
