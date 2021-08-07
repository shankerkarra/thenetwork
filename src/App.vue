<template>
  <main class="container-fluid">
    <div class="row border-black">
      <div class="col-md-5" width="20px" height="30px">
        <Login />
      </div>
      <div class="col-md-7" width="40px" height="70px">
        <Navbar />
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
