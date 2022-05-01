<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

type Tweet = {
  id: Number;
  description: String;
};

type Props = {
  tweets: Tweet[];
};

defineProps<Props>();

const emit = defineEmits(['delete-tweet']);
const deleteTweet = (id: Number) => {
  emit('delete-tweet', id);
};
</script>

<template>
  <ul class="tweet-lists">
    <li v-for="(tweet, index) in tweets" :key="index" class="tweet-list">
      <span>{{ tweet.description }}</span>
      <button @click="deleteTweet(tweet.id)">delete</button>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.tweet-lists {
  padding-left: 0;
  > li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 300px;
    margin-bottom: 12px;
    padding: 8px 20px;
    background-color: rgb(204, 219, 233);
    border-radius: 4px;
    font-size: 12px;
  }
}
</style>
