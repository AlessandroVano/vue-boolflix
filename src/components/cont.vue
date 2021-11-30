<template>
  <div id="app" >
    <section>
    <!-- Header -->
    <Header  @search="getCreateFilmList" />
    <!-- main -->
    <ContentFilm 
    :filmList="searchFilm"  
    :seriesList="searchSeries"
     />
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
      ContentFilm: '',
      searchFilm: [],
      searchSeries: [],
      language: 'it-IT'
    }
  },
    created() {
        this.getCreateFilmList()
   }, 
  methods: {

       getCreateFilmList(text) {

        if (this.ContentFilm != '') {

      axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: '7c559330d97194d2440c38cc8c64c805',
        query: text,
        language: this.language,
      },

      })

      .then(result => {
        this.searchFilm = result.data.results;
      })

      .catch(error =>{
        console.log(error);
        }) 

           axios.get('https://api.themoviedb.org/3/search/tv', {
      params: {
        api_key: '7c559330d97194d2440c38cc8c64c805',
        query: text,
        language: this.language,
      },

      })

      .then(result => {
        this.searchSeries = result.data.results;
      })

      .catch(error =>{
        console.log(error);
        }) 

       }
    },
    result(text) {
      this.ContentFilm = text;
       this.getCreateFilmList();
    },
  },
}