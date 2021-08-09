<template>
  <div class="card row no-guttersp-1 m-1 w-30 h-30 border border-black text-center" v-for="d in displays" :key="d.title">
    <div class="col-12 p-1 justify-align-right">
      <p> {{ d.title }} </p>
      <img class="tall"
           :src="d.tall"
           alt=""
           srcset=""
           align="left"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    displays: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
  }
.card {
    max-width: 50%; overflow: hidden;
}
</style>
