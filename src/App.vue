<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Todo app</h1>
    <div id="add-todos">
      <input v-model="task" type="text" class="task-input" />
      <button class="add-task-button" @click="addTask">Add Task</button>
    </div>
    <div id="todos">
      <ul>
        <li v-for="(todo, index) in todos" :key="index" class="todo-item">
          <span>{{ todo }}</span>
          <button class="delete-task-button" @click="deleteTask(todo)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      task: "",
      todos: []
    };
  },
  methods: {
    addTask() {
      if (this.task !== "") {
        this.todos.push(this.task);
        this.task = "";
      }
    },
    deleteTask(todoItem) {
      this.todos = this.todos.filter(item => item !== todoItem);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
  margin: auto;
}
.task-input {
  margin-right: 10px;
}
.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border: 1px solid #b9b9b9;
  margin-top: 4px;
}
</style>
