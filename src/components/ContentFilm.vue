<template>
  <section class="container">
      <div class="mt-5" 
      v-for="(film, index) in filmList" :key="`filmList${index}`"
      >

         <FilmCard 
         :title=" film.title"
         :originalTitle=" film.original_title"
         :language=" film.original_language"
         :vote=" film.vote_average"
         />

      </div>
  </section>
</template>

<script>
import FilmCard from '@/components/FilmCard.vue';

export default {
name: 'ContentFilm',

components: {
    FilmCard,
},

props: {
    filmList: Array
}

};
</script>

<style>

</style>