<script setup lang="ts">
import { ref, reactive, computed, watch, toRefs, DirectiveBinding } from 'vue';

// v-focus - sample
const vFocus = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    el.focus();
    if (binding.modifiers.alert) {
      el.style.backgroundColor = 'pink';
    }
  },
};

const name = ref<string>('Desk');
// const price = ref<number>(0);
const item = reactive({
  price: 0,
});

const items = reactive([
  {
    name: 'カレーライス',
    price: 400,
    url: 'https://www.google.com/?hl=ja',
  },
  {
    name: 'test',
    price: 200,
    url: 'https://www.yahoo.co.jp/',
  },
]);

const budget = 50000;
const priceLable = computed(() => {
  if (price.value > budget) {
    return '予算オーバーです';
  } else {
    return price.value + '円';
  }
});
const { price } = toRefs(item);
watch(price, (newValue, oldValue) => {
  console.log(newValue);
});
</script>

<template>
  <div class="container">
    <h1>最近の支出</h1>
    <input type="text" v-focus.alert />
    <div class="input-form">
      <div class="input-name"><input type="text" v-model="name" /></div>
      <div class="input-price"><input type="number" v-model="price" /></div>
      <button class="input-button" type="button">追加</button>
    </div>
    <div class="payment" v-for="(item, index) in items" :key="index">
      <label for="">{{ item.name }}</label>
      <label for="">{{ item.price }}</label>
      <a :href="item.url">Link</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.payment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 80px;
  margin-bottom: 8px;
  background-color: aliceblue;
}
label {
  font-size: 20px;
  font-weight: bold;
}
.input-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 10px;
}
.input-name {
  margin-bottom: 5px;
}
.input-name,
.input-price {
  width: 70%;
  input {
    width: 100%;
    box-sizing: border-box;
  }
}
.input-button {
  position: absolute;
  top: 0;
  right: 0;
  width: 25%;
  height: 100%;
}
</style>
