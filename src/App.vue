<template>
  <div id="app" >
    <!-- Header -->
    <section>
    <Header  @search="result" />
    <!-- main -->
    <ContentFilm 
    :filmList="ContentFilm"
    :seriesList="ContentSeries" />
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header.vue'
import ContentFilm from '@/components/ContentFilm.vue'
export default {
  name: 'App',
  components: {
    Header,
    ContentFilm, 
  },
  data() {
    return {
      ContentFilm: [],
      searchFilm: '',
      ContentSeries: [],
      language: 'it-IT'
    }
  },
   
  methods: {
       getCreateFilmList() {
        if (this.searchFilm != '') {
      axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: '7c559330d97194d2440c38cc8c64c805',
        query: this.searchFilm,
        language: this.language,
      },
      })
      .then(result => {
        this.ContentFilm = result.data.results;
      })
      .catch(error =>{
        console.log(error);
        }) 
          axios.get('https://api.themoviedb.org/3/search/tv', {
      params: {
        api_key: '7c559330d97194d2440c38cc8c64c805',
        query: this.searchFilm,
        language: this.language,
      },
      })
      .then(result => {
        this.ContentSeries = result.data.results;
      })
      .catch(error =>{
        console.log(error);
        }) 
       }
    },
    result(text) {
      this.searchFilm = text;
      this.getCreateFilmList()
    },
  },
}


</script>

<style scoped lang="scss">
@import '@/styles/globals';

  section {
      background-color: $text-color;
 } 
</style>
