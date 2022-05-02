<script setup lang="ts">
import { provide } from 'vue';
import TodoList from './components/TodoList.vue';
import { todos, todoKey } from './useTodo';
// import { todos } from './useTodo';

// ▼ 1つずつ書く場合
// provide(todoKey, todos);
// provide(todoKey, addTodo);

// ▼ まとめて書くこともできる
provide(todoKey, todos);
</script>

<template>
  <TodoList />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
