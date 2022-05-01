<script setup lang="ts">
import { ref, defineEmits } from 'vue';
const inputText = ref<string>('');

const emit = defineEmits(['post-tweet']);
const postTweet = () => {
  if (inputText.value?.length === 0) {
    confirm('入力してください');
    return;
  }
  const tweet = {
    id: Math.random(),
    description: inputText.value,
  };
  emit('post-tweet', tweet);
  inputText.value = '';
};
</script>

<template>
  <div class="form-container">
    <input v-model="inputText" type="text" />
    <button class="save-button" @click="postTweet">POST</button>
  </div>
</template>

<style scoped lang="scss">
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 24px 0;
  width: 60%;
  margin-bottom: 12px;
  border-radius: 4px;
}
.save-button {
  margin-top: 12px;
}
</style>
