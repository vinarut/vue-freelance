<template>
  <form class="card" @submit.prevent="createTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model.trim="task.title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="task.deadline">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model.trim="task.description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>

<script>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { STATUS } from '@/constants'
import { getId, isDateLessThanCurrent } from '@/utils'

export default {
  setup() {
    const { commit } = useStore()
    const router = useRouter()
    const task = reactive({
      title: '',
      deadline: '',
      description: ''
    })

    const isValid = computed(() => task.title && task.deadline && task.description)

    function createTask() {
      commit('addTask', {
        ...task,
        id: getId(),
        status: isDateLessThanCurrent(task.deadline) ? STATUS.CANCELED : STATUS.ACTIVE
      })
      router.push('/')
    }

    return {
      task,
      createTask,
      isValid
    }
  }
}
</script>
