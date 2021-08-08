d<template>
  <div class="card border-black w-75 p-1 m-1">
    <div class="row no-gutters m-1">
      <div class="col-12 justify-align-right">
        <img align="left"
             src="https://randomuser.me/api/portraits/women/14.jpg"
             width="35"
             height="35"
             class="img img-rounded"
        /> <p> Post Author Name</p>
      </div>
    </div>
    <div class="row p-1 no-gutters justify-align-left">
      <div class="col-md-12 py-1 px-1 word-break word-wrap">
        <p>
          <a class="float-left"><small>{{ post.body }}</small></a><br>
          UX, or user experience, is every interaction your business has with people on your website, mobile site, apps, and online properties or services. That might sound like an exhausting number of situations to consider, but creating good UX design means focusing on the user, no matter where they are
        </p>
      </div>
    </div>
    <!-- <div class="row d-flex flex-column"> -->
    <div class="imgdisplay">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.W8apTKARTqVhmLzMCisNmAHaEs%26pid%3DApi%26h%3D160&f=1" class="img-fluid" />
      <br>
      <p class="likedcount align-right">
        <i class="fa fa-heart"> &nbsp;  {{ post.likes.length }}</i>
      </p>
    </div>
    <div class="align-self-end" v-if="account.id === post.creatorId">
      <button class="btn btn-danger" @click.stop="destroy">
        delete
      </button>
    </div>
    <!-- </div> -->
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

</style>
