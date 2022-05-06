Vue.component('task',{
    props: ['data'],
    data() {
        return {
        }
    },
    methods: {
        task_delete(){
            this.$emit('task_delete')
        }
    },
    template: `
  <div class="task">
    <div>
      <h3 class="task_title">{{data.title}}</h3>
    </div>
    <button class="task_delete" @click="task_delete()">Delete</button>
  </div>`
})

const vue = new Vue({
    el: '#app',
    data: {
        new_task: {
            title: ''
        },
        tasks : [
        ]
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
})
