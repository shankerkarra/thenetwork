<template>
  <div class="card p-1 m-1 border border-black text-center">
    <div class="row no-gutters m-1">
      <div class="col-12 justify-align-right" v-for="d in display" :key="d.title" />
      <p> Display comes here </p>
      <p> {{ d.title }} </p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    display: {
      type: Object,
      required: true
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
