<template>
  <div class="row m-1">
    <div class="col-8">
      <PostCard v-for="p in posts.posts" :key="p.id" :post="p" />
      <button type="button" value="Prev" @click="props.posts.newer" class="prev">
        Prev
      </button>
      <button type="button" value="Next" @click="props.posts.older" class="next">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thread',
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
