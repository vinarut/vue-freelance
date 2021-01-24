<template>
  <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ activeTasks.length }}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ new Date(task.deadline).toLocaleDateString() }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="show(task.id)">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import AppStatus from '@/components/AppStatus'

export default {
  components: { AppStatus },
  setup() {
    const store = useStore()
    const router = useRouter()

    const show = id => router.push('/task/' + id)

    return {
      show,
      tasks: store.state.tasks,
      activeTasks: store.getters.activeTasks
    }
  }
}
</script>
