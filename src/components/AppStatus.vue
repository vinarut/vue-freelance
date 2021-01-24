<template>
  <span class="badge" :class="statusClass">{{ statusText }}</span>
</template>

<script>
import { STATUS } from '@/constants'

export default {
  props: {
    type: {
      required: true,
      type: String,
      validator(value) {
        return Object.values(STATUS).includes(value)
      }
    }
  },
  setup(props) {
    return {
      statusText: {
        [STATUS.ACTIVE]: 'Активная',
        [STATUS.DONE]: 'Завершенная',
        [STATUS.IN_PROGRESS]: 'Выполняется',
        [STATUS.CANCELED]: 'Отмененная'
      }[props.type],
      statusClass: {
        [STATUS.ACTIVE]: 'primary',
        [STATUS.DONE]: 'primary',
        [STATUS.IN_PROGRESS]: 'danger',
        [STATUS.CANCELED]: 'danger'
      }[props.type]
    }
  }
}
</script>
