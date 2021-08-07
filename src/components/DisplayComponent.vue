<template>
  <div class="card p-1 m-1 border border-black text-center">
    <img class="rounded" :src="account.picture" alt="" />
  </div>
</template>

<script>
import { AppState } from '../AppState'

export default {
  name: 'Display',
  setup() {
    onMounted(async() => {
      try {
        // await displaysService.getAll()
        // async getAll(query = {}) {
        const res = await api.get('/api/ads')
        logger.log(res.data)
        AppState.displays = res.data
      } catch (error) {
        pop.toast(error, 'error')
      }
    })
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
  border-radius:75%;
}
</style>
