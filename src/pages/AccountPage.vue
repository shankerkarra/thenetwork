<template>
  <div class="card p-1 m-1 border border-black text-center">
    <img class="rounded" :src="account.picture" alt="" />
    <br>
    <p>{{ account.class }} </p>
    <br>
    <p>{{ account.name }} </p>
    <br>
    <p>{{ account.email }}</p>
    <br>
    <p>{{ account.github }}</p>
    <br>
    <p>{{ account.linkedin }}</p>
    <br>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
