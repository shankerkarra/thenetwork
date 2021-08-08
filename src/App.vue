<template>
  <main class="container-fluid">
    <div class="row border-black">
      <div class="col-md-5">
        <Account />
      </div>
      <div class="col-md-7">
        <Navbar />
        <!-- Navbar commented to make test -->
        <Display />
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Login from './components/LoginComponent.vue'
// import DisplayComponent from './components/DisplayComponent.vue'

export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: {
    Navbar,
    Login
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
