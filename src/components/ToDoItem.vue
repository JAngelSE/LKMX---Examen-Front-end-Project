<template>
  <div>
    <div class="row my-2 justify-content-between task">
      <h3 v-if="!editing">{{ task.title }}</h3>
      <input
        v-bind:value="taskText"
        @change="taskTextChange"
        v-else
        type="text"
        class="col form-control mr-2"
      />
      <div>
        <button
          @click="updateTaskI(task)"
          class="btn"
          v-bind:class="{ 'edit mr-2': !editing, save: editing }"
        ></button>
        <button
          v-if="!editing"
          @click="deleteTask(task.id)"
          class="btn delete"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    task: {},
  },

  data() {
    return {
      taskText: "",
      editing: false,
    };
  },

  methods: {
    ...mapActions(["deleteTask", "updateTask"]),

    taskTextChange(e) {
      this.taskText = e.target.value;
    },

    updateTaskI(task) 
    {
      this.editing = this.editing == true ? false : true;

      if (this.editing) 
      {
        this.taskText = task.title;
        this.updateTask(task);
      } else {
        task.title = this.taskText;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>