<template>
  <div id="app">
    <!-- Header -->
    <Header  @search="result" />
    <!-- main -->
    <ContentFilm />
  
  </div>
</template>

<script>
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
      filmList: null,
      searchFilm: '',
    }
  },

  methods: {
    result(el) {
      this.searchFilm = el;
    }
  }

}
</script>

<style lang="scss"></style>
