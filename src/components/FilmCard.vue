<template>
   <div class="section-card">
             <!-- inserimento immagine -->
            <img class="poster" v-if="img" :src="`https://image.tmdb.org/t/p/w342${img}`" alt="">
            <!-- se non trova l'immagine mostro questa -->
            <img class="no_found_poster" v-else src="../assets/progetta-poster-glitched-tipografico-vettore-clipart_csp40896763.webp" alt="">

       <ul>
          <li>{{title}}</li>
          <li>{{originalTitle}}</li>
          <li> testo: {{text}} </li>
          <li v-if="arrFlags">
            <img class="flag" :src="require(`../assets/${language}.png`)" alt="">
          </li>
          <li v-else> {{language}} 

          </li>

          <li> 
             Voto:
             <i v-for="(vote, i) in Math.ceil(vote/2)" :key="i" class="fas fa-star"></i>
             <i v-for="(vote, i) in 5 - Math.ceil(vote/2)" :key="i" class="far fa-star"></i>
         </li>
       </ul>
   </div>
</template>

<script>
export default {
name: 'FilmCard',

props: {
    title: String,
    originalTitle: String,
    language: String,
    vote: Number,
    img: String,
    text: String


},

data() {
    return {
        arrLanguage: ['en', 'it'],
    }
},

computed: {
    arrFlags() {
        return this.arrLanguage.includes(this.language);
    }
}


}
</script>

<style  scoped lang="scss">
@import '@/styles/globals';

 .flag {
     width: 30px;
 }
 
 
 .no_found_poster{
   width: 342px;
 }

 li {
     color: $title-color;
     list-style: none;
     font-size: 12px;
 }
 .section-card {
     position: relative;
     margin-left: 20px;
     margin-bottom: 20px;
     ul,
     .poster{
          transition: all 0.6s;
     }
     &:hover ul {
         opacity: 100;
     }
     &:hover .poster {
           filter:  blur(2.8px)  brightness(0.2) grayscale(0.38);
           
     }
 }

 ul {
     position: absolute;
      opacity: 0; 
     top: 16px;
     left: 40px;
 }
 .section-card:hover ul {
     opacity: 1;
     cursor: pointer;
 }

</style>