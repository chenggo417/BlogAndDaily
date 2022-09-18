<template>
  <v-alert
    v-model="show"
  ></v-alert>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'AlertPopIndex',
  data: () => ({
    show: true
  })
})
</script>

<style scoped lang='less'>

</style>
