<script setup lang="ts">
// // import { reactive } from 'vue';
// // const resolve = reactive({ mockLoader });
// // import mockLoader from './mock/mockLoader';
// console.log(mockLoader, 'mockLoader'); // get an image set
</script>

<template>
  <div class="wrap">
    下面是我的图片
    <!-- {{ mockLoader }} -->
    <img :src="mockLoader.admin" alt="" />
  </div>
</template>

<style scoped>
.wrap {
  width: 200px;
}
</style>
