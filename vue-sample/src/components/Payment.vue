<script setup lang="ts">
// v-focus
const vFocus = {
  mounted: (el: HTMLElement) => {
    el.focus();
  },
};
</script>

<template>
  <div>Payment</div>
  <input type="text" v-focus />
</template>

<style scoped></style>
