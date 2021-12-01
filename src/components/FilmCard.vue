<template>
   <div class="section-card">
           
     <ul>
       <div>
         <li> 
             <!-- inserimento immagine -->
            <img class="poster" v-if="img" :src="`https://image.tmdb.org/t/p/w342${img}`" alt="">
            <!-- se non trova l'immagine mostro questa -->
            <img class="no_found_poster" v-else src="../assets/progetta-poster-glitched-tipografico-vettore-clipart_csp40896763.webp" alt="">
         </li>
       </div>

         <li>{{title}}</li>
         <li>{{originalTitle}}</li>
         <li> testo: {{text}} </li>
         <li v-if="arrFlags">
           <img class="flag" :src="require(`../assets/${language}.png`)" alt="">
         </li>
         <li v-else> {{language}} </li>

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
 .poster {
     width: 300px; 
 }
 .no_found_poster{
   width: 300px;
 }

 li {
     color: $title-color;
     list-style: none;
 }
 .section-card {
     display: flex;

 }

</style>