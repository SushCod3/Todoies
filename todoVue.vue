<script setup>
import { ref } from 'vue'

// give each todo a unique id
let id = 1

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])

function addTodo(x) {
  // ...
  todos.value.push({ id: id++, text: x});
}

function removeTodo(todo) {
  // ...
  todos.value = todos.value.filter((i, index) => i.id != todo.id)
}
</script>

<template>
  <form @submit.prevent="addTodo(newTodo)">
    <input v-model="newTodo">
    <button>Add Todo</button>    
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.id + ". " + todo.text}}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>