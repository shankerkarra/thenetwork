<template>
  <div class="card p-1 m-1 border border-black text-center">
    <img class="rounded" :src="user.picture" alt="" />
    <br>
    <p>{{ user.class }} </p>
    <br>
    <p>{{ user.name }} </p>
    <br>
    <p>{{ user.email }}</p>
    <br>
    <p>{{ user.github }}</p>
    <br>
    <p>{{ user.linkedin }}</p>
    <br>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Login',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      user: computed(() => AppState.user)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
  border-radius:75%;
}
</style>
