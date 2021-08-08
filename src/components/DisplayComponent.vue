<template>
  <div class="card p-1 m-1 border border-black text-center">
    <div class="row no-gutters m-1">
      <div class="col-12 justify-align-right">
        <!-- <PostThread :posts="posts" /> -->
        <img align="left"
             src="https://randomuser.me/api/portraits/women/14.jpg"
             width="35"
             height="35"
             class="img img-rounded"
        /> <p> Post Author Name</p>
      </div>
    </div>
  </div>
  <!-- <img class="rounded" :src="account.picture" alt="" />
  </div> --> -->
</template>
<script>

import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { logger } from '../utils/Logger'
import { displayService } from '../services/DisplayService'

export default {
  name: 'Display',
  setup() {
    return {
      async getAll() {
        try {
          const res = await displayService.getAll()
          debugger
          logger.log(res.data)
          AppState.displays = res.data
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}

</script>

<style scoped>
img {
  max-width: 100px;
  border-radius:75%;
}
</style>
