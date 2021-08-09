d<template>
  <div class="card row no-gutters card-block border-black w-500 p-1 m-1">
    <!-- disabled as button "Stop" is propagating to the parent and not allowing  -->
    <div class="col-12 justify-align-right">
      <!-- <router-link router-link
                     :to="{ name: 'Login', params: {id: post.creator.id } }"
                     @click.stop=""
                     class="creator p-3 align-self-end"
        > -->
      <img class="h-100 rounded-pill"
           :src="post.creator.picture"
           width="30"
           height="30"
           alt=""
           srcset=""
           align="left"
      >&nbsp;
      {{ post.creator.name }}
      <!-- </router-link> -->
      <!-- </div> -->
    </div>
    <div class="row p-1 no-gutters justify-align-left">
      <div class="col-md-12 py-1 px-1 word-break word-wrap">
        <p>
          <a class="card-text float-left"><small>{{ post.body }}</small></a><br>
        </p>
      </div>
    </div>
    <div class="imgdisplay m-1">
      <img class="coverimg img-fluid" :src="post.creator.coverImg" />
    </div>
    <br>
    <p class="likedcount align-right">
      <i class="fa fa-heart"> &nbsp;  {{ post.likes.length }}</i>
    </p>
    <div class="align-self-end" v-if="account.id === post.creatorId">
      <button class="btn btn-danger" @click.stop="destroy">
        delete
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
import '@mdi/font/css/materialdesignicons.css'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async destroy() {
        try {
          if (await Pop.confirm()) {
            await postsService.destroy(props.post.id)
            Pop.toast('Delorted', 'success')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cover-img {
  height: 200px;
  width: 250px;
  object-fit: cover;
}
a {
  color: inherit;
  text-decoration: inherit;
}
.creator{
  height: 3em;
}
.img-rounded{border-radius:50%;}

.card {
    max-width: 100%; overflow: hidden;
}
.card-text {
    word-wrap: break-word;
}
.card-block {
  word-wrap: break-word;
}

</style>
