<script setup lang="ts">
import { DirectiveBinding } from 'vue';

// v-focus
const vFocus = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    el.focus();
    if (binding.modifiers.alert) {
      el.style.backgroundColor = 'pink';
    }
  },
};
</script>

<template>
  <div>Payment</div>
  <input type="text" v-focus.alert />
</template>

<style scoped></style>
