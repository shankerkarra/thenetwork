<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row w-200">
      <div class="col">
        <SearchResults :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
import { profileService } from '../services/ProfileService'
import { displayService } from '../services/DisplayService'
import { useRoute } from 'vue-router'

export default {
  name: 'Home',
  setup() {
    const router = useRoute()
    onMounted(async() => {
      try {
        await profileService.getProfileById({ creatorId: router.params.id })
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })

    onMounted(async() => {
      try {
        await postsService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    onMounted(async() => {
      try {
        await displayService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })

    return {
      prev: computed(() => AppState.posts.newer),
      next: computed(() => AppState.posts.older),
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
