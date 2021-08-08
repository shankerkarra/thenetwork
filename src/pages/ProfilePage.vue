<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row w-200">
      <div class="col">
        <PostThread :posts="posts" />
        <button type="button" value="${prev}" @click="counter-=1" class="prev">
          Prev +  'ProfilePage${prev}'
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
import { displayService } from '../services/DisplayService'

export default {
  name: 'Home',
  prev: '',
  next: '',
  setup() {
    onMounted(async() => {
      try {
        await postsService.getAll()
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
