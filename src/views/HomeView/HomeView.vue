<template>
  <p>home</p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeIndex',
  mounted () {
    console.log(this.$store.state)
  }
})
</script>
