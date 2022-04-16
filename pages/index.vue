<template>
  <HomePage />
</template>

<script lang="ts">
import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'G-SHX7D7M0HY' },
})

export default Vue.extend({
  name: 'IndexPage',
})
</script>
