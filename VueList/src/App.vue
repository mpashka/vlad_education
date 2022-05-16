<template>
  <div class="stats">
    <h3 class="stats_title">{{"Текущих задач: "+ tasks.length}}</h3>
  </div>
  <task
      v-on:task_delete="delete_task(index)"
      :data="data"
      v-for="(data,index) in tasks"
      :key="index">
  </task>
  <div class="add_task">
    <div class="add_task_input ">
      <input
          placeholder="Новая задача..."
          type="text"
          v-model="new_task.title"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength = "20">
    </div>
    <button class="add_task_btn"
            @click="add_task">Add</button>
  </div>
</template>

<script>
import Task from "./components/Task.vue";


export default {
  name: "App",
  components: {
    Task,
  },
  data() {
    return {
      new_task: {
        title: ''
      },
      tasks: []
    }
  },
  methods: {
    add_task(){
      if(this.new_task.title != ''){
        this.tasks.push({
          title: this.new_task.title
        });
        this.new_task.title='';
      }
    },
    delete_task(id){
      this.tasks.splice(id,1);
    }
  }
}
</script>

<style>
#app{
  width: 350px;
  box-shadow: 0 3px 20px rgba(0,0,0,0.3);
  font-family: sans-serif;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

.stats_title {
  margin: -10px -10px 10px -10px;
  padding: 10px;
  text-align: center;
  background-color: bisque;
  color: Black;
  font-weight: 500;
}

.task {
  display: flex;
  flex-direction: row;
  align-items: center;
  /*transition: all 1s;*/
  justify-content: space-between;
  margin: -10px -10px 10px -10px;
  padding: 3px 10px 3px 15px;
  max-width: 100%;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-leave-active {
  /*pass*/
}

.task:hover {
  transition: 0.3s;
  background-color: #2f485811;
}

.task_title {
  font-size: 20px;
}

.task_delete {
  height: 30px;
  width: 50px !important;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  background-color: #ffb3b3;
}

.task_delete:hover {
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 4px;
  background-color: #ff8080;
}

.add_task {
  display: flex;
}

.add_task_input {
  width: 80%;
}

.add_task_input input, textarea {
  width: 100%;
  max-width: 100%;
  padding: 5px 0 5px 5px;
  font-family: sans-serif;
  font-weight: bold;
  border: 2px solid #2f485811;
  border-radius: 4px;
}

.add_task_btn {
  width: 20%;
  border: none;
  font-weight: bold;
  margin-left: 20px;
  border-radius: 4px;
  background-color: #b3ffcc;
}
.add_task_btn:hover {
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
  background-color: #66ff99;
}

</style>