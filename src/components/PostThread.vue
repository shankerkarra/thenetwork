<template>
  <div class="row m-1">
    <div class="col-8">
      <PostCard v-for="p in posts.posts" :key="p.id" :post="p" />
    </div>
    <div class="col-4">
      <Acount />
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
