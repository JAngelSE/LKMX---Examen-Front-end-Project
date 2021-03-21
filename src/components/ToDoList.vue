<template>
  <div class="list">
    
    <div v-for="task in tasks" :key="task.id">
      <ToDoItem :task="task" />
    </div>
    <div v-if="tasks.length == 0">
        <h2>No has agregado tareas</h2>
    </div>
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";
import { mapGetters } from "vuex";

export default {
  components: {
    ToDoItem,
  },

  computed: {
    ...mapGetters(["tasks"]),
  },
};
</script>

<style lang="scss" scoped>
</style>