<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row w-200">
      <div class="user">
        <Account />
      </div>
      <div class="col">
        <PostThread :posts="posts" />
        <button type="button" value="${prev}" @click="counter-=1" class="prev">
          Prev
        </button>
        <button type="button" value="prev" @click="counter +=1" class="next">
          Next
        </button>
      </div>
      <div class="col Border-black">
        <p>
          <Display />
        </p>
      </div>
      <div>
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
import { useRoute } from 'vue-router'
import { displayService } from '../services/DisplayService'

export default {
  name: 'Home',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
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
        await postsService.getPostById(router.params.id)
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
