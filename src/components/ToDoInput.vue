<template>
  <div>
    <div class="row">
      <input
        @change="taskTextChange"
        v-bind:value="taskText"
        class="col form-control mr-2"
        type="text"
        placeholder="Escribe una tarea"
      />

      <button @click="addTaskI" class="btn add">Agregar</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  data() {
    return {
      taskText: "",
    };
  },
  methods: {
    ...mapActions(["addTask"]),

    taskTextChange(e) {
      this.taskText = e.target.value;
    },

    addTaskI() {
      this.addTask({
        id: v1(),
        title: this.taskText,
      });
      this.taskText = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>