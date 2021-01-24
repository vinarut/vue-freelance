<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" :key="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.deadline).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="changeStatusTo(STATUS.IN_PROGRESS)">Взять в работу</button>
      <button class="btn primary" @click="changeStatusTo(STATUS.DONE)">Завершить</button>
      <button class="btn danger" @click="changeStatusTo(STATUS.CANCELED)">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import AppStatus from '@/components/AppStatus'
import { STATUS } from '@/constants'

export default {
  components: { AppStatus },
  setup() {
    const route = useRoute()
    const store = useStore()

    const task = reactive({ ...store.state.tasks.find(task => task.id === route.params.id) })
    function changeStatusTo(status) {
      task.status = status
      store.commit('changeStatusOfTask', { id: task.id, status })
    }

    return {
      task,
      changeStatusTo,
      STATUS,
      id: route.params.id
    }
  }
}
</script>

<style scoped>

</style>
