<template>
  <section class="container">
  
      <div class="boxes" >
         <FilmCard 
           v-for="(film, index) in filmList" :key="`filmList${index}`"
           :img="film.poster_path"
           :title=" film.title"
           :originalTitle=" film.original_title"
           :text="film.overview"
           :language=" film.original_language"
           :vote=" film.vote_average"
         />
          <FilmCard 
             v-for="(serie, index) in seriesList" :key="`seriesList${index}`"
             :img="serie.poster_path"
             :title=" serie.name"
             :originalTitle=" serie.original_name"
             :text="serie.overview"
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

<style  scoped lang="scss">
@import '@/styles/globals';

section {
   background-color: $text-color;
}
 .boxes {
   display: flex;
   flex-wrap: wrap ;
   justify-content: center;
   margin-top: 150px;
 }
</style>