<template>
  <div class="row d-flex flex-column">
    <div class="col-4 border-black">
      <Login :user="user" />
    </div>
    <div class="col-4 border-black">
      <PostThread :posts="posts" />
    </div>
    <div class="col-4 border-black">
      <p>
        <DisplayComponent :displays="displays" />
      </p>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
import { profileService } from '../services/ProfileService'
import { useRoute } from 'vue-router'
import { displayService } from '../services/DisplayService'

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
      posts: computed(() => AppState.posts),
      displays: computed(() => AppState.displays)
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
