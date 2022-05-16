<template>
  <my-dialog v-model:show="DialogVisible">
  <div class="task">
    <div>
      <h3 class="task_title">{{data.title}}</h3>
    </div>
    <button class="task_delete" @click="task_delete()">Delete</button>
    <button class="task_edit" @click="ShowDialog()">Edit</button>
  </div>
  </my-dialog>
</template>

<script>
import MyDialog from "./MyDialog.vue";

export default {
  name: "Task",
  components: {
    MyDialog,
  },
  props: ['data'],
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    task_delete(){
      this.$emit('task_delete')
    },
    ShowDialog(){
      this.dialogVisible = true;
    }
  }
}
</script>