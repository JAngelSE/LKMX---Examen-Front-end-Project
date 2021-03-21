import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    tasks: (state) => state.tasks,
  },
  actions: {
    addTask: ({ commit }, task) => {
      commit("add_task", task);
    },

    deleteTask: ({ commit }, id) => {
      commit("delete_task", id);
    },

    updateTask: ({ commit }, task) => {
      commit("update_task", task);
    },
  },
  mutations: {
    add_task(state, task) {
      state.tasks.push(task);
    },

    delete_task(state, id) {
      state.tasks = state.tasks.filter((task) => task.id != id);
    },

    update_task(state, task) {
      let index = state.tasks.findIndex((t) => t.id == task.id);
      if (index != -1) {
        state.tasks[index] = task;
      }
    },
  },
  modules: {},
});
