import { InjectionKey, ref } from 'vue';

type Todo = {
  id: Number;
  title: String;
};

const defaultTodos = [
  { id: 0, title: 'first' },
  { id: 1, title: 'second' },
];

// ▼1つずつ書く場合
// export const todos = ref<Todo[]>(defaultTodos);
// export const addTodo = (title: String): void => {
//   const newTodo: Todo = {
//     id: Math.random(),
//     title,
//   };
//   todos.value.push(newTodo);
// };

// ▼ まとめて書くこともできる
export const todos = (() => {
  const todos = ref<Todo[]>(defaultTodos);
  const addTodo = (title: String) => {
    const newTodo: Todo = {
      id: Math.random(),
      title,
    };
    todos.value.push(newTodo);
  };
  return { todos, addTodo };
})();

// 重要: 型を指定、これをやらないと型エラーになる
type TodoType = typeof todos;
export const todoKey: InjectionKey<TodoType> = Symbol('useTodos');
