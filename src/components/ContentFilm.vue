<template>
  <section class="container">
      <div class="mt-5" 
    
      >

         <FilmCard 
           v-for="(film, index) in filmList" :key="`filmList${index}`"
         :title=" film.title"
         :originalTitle=" film.original_title"
         :language=" film.original_language"
         :vote=" film.vote_average"
         />
           <FilmCard 
             v-for="(serie, index) in seriesList" :key="`seriesList${index}`"
         :title=" serie.name"
         :originalTitle=" serie.original_name"
         :language=" serie.original_language"
         :vote=" serie.vote_average"
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
    filmList: Array,
    seriesList: Array
}

};
</script>

<style>

</style>