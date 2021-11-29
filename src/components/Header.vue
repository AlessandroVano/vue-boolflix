<template>
  <section class="container">
    <input type="text" class="mt-5"
    placeholder="Che film vuoi ricercare?"
    v-model.trim="searchFilm">
  <button
  @click="$emit('search', searchFilm)"
  >
     Vai
  </button>

  </section>
</template>


<script>

export default {
 name: 'Header',

 data() {
   return {
     searchFilm: '',
   }
 }
}
</script>

<style scoped lang="scss">

</style>