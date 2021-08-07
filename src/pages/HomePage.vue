<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <Login />
    <PostThread :posts="posts" />
  </div>
  <button type="button" value="${prev}" @click="counter-=1" class="prev">
    Prev +  '${prev}'
  </button>
  <!-- <span v-for="n in Posts" :key="n.id">{{ n }} </span> -->
  <button type="button" value="prev" @click="counter +=1" class="next">
    Next
  </button>
  <div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
// import { displaysService } from '../services/DisplayService'

export default {
  name: 'Home',
  prev: '',
  next: '',
  setup() {
    onMounted(async() => {
      try {
        await postsService.getAll()
        // await displaysService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })

    return {
      prev: computed(() => AppState.posts.newer),
      // next: computed(() => AppState.posts.older),
      posts: computed(() => AppState.posts)
      // console.log(prev + "-"+ next)
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
