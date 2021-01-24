import { createStore, createLogger } from 'vuex'
import { STATUS } from '@/constants'
import { storage } from '@/utils'

export default createStore({
  plugins: [createLogger()],
  state() {
    return {
      tasks: storage('tasks') || []
    }
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
      storage('tasks', state.tasks)
    },
    changeStatusOfTask(state, { id, status }) {
      const idx = state.tasks.findIndex(task => task.id === id)
      state.tasks[idx].status = status
      storage('tasks', state.tasks)
    }
  },
  getters: {
    activeTasks(state) {
      return state.tasks.filter(task => task.status === STATUS.ACTIVE)
    }
  }
})
