<template>
  <div class="card p-1 m-1 border border-black text-center" v-for="d in displays" :key="d.title">
    <div class="row no-gutters m-1">
      <div class="col-12 justify-align-right">
        <p> {{ d.title }} </p>
        <img class="h-100 rounded-pill"
             :src="d.tall"
             alt=""
             srcset=""
             align="left"
        >
      </div>
    </div>
  </div>
</template>

<script>
// export default {
//   props: {
//     displays: {
//       type: Array,
//       required: true
//     }
//   }
// }
// </script>

// starts here

export default {
  // components: { DisplayComponent },
  name: 'Display',
  setup() {
    const router = useRoute()
    onMounted(async() => {
      try {
        await displayService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })

    return {
      displays: computed(() => AppState.displays)
    }
  }
}
</script>

// ends here

<style scoped>
img {
  max-width: 100px;
  border-radius:75%;
}
.card {
    max-width: 100%; overflow: hidden;
}
</style>
