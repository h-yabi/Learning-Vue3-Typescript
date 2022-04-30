<script setup lang="ts">
import { ref } from 'vue';
const inputText = ref<string>('');
const tweets = ref<Sample[]>([{} as Sample]);

interface Sample {
  id: Number;
  description: String;
}

const postTweet = () => {
  if (inputText.value?.length === 0) {
    confirm('入力してください');
    return;
  }
  const tweet = {
    id: Math.random(),
    description: inputText.value,
  };
  tweets.value.push(tweet);
  inputText.value = '';
};

const deleteTweet = (id: Number) => {
  tweets.value = tweets.value.filter((tweet) => tweet.id !== id);
};
</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <div class="form-container">
      <input v-model="inputText" type="text" />
      <button class="save-button" @click="postTweet()">POST</button>
    </div>
    <div class="tweet-container">
      <p v-if="tweets.length === 0">追加してください。</p>
      <ul v-else class="tweet-lists">
        <li v-for="(tweet, index) in tweets" :key="index" class="tweet-list">
          <span>{{ tweet.description }}</span>
          <button @click="deleteTweet(tweet.id)">delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
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
