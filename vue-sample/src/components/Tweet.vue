<script setup lang="ts">
import { ref } from 'vue';
import TweetPostForm from './TweetPostForm.vue';
import TweetList from './TweetList.vue';

type Tweet = {
  id: Number;
  description: String;
};
const tweets = ref<Tweet[]>([]);

const postTweet = (tweet: Tweet) => {
  tweets.value.push(tweet);
};

const deleteTweet = (id: Number) => {
  tweets.value = tweets.value.filter((tweet) => tweet.id !== id);
};
</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <TweetPostForm @post-tweet="postTweet" />
    <div class="tweet-container">
      <p v-if="tweets.length === 0">追加してください。</p>
      <template v-else>
        <TweetList :tweets="tweets" @delete-tweet="deleteTweet" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
