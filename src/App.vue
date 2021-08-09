<template>
  <main class="container-fluid">
    <div class="row border-black">
      <Account />
      <Navbar />
      <router-view />
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
