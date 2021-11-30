<template>
   <ul>
         <li> 
             <!-- inserimento immagine -->
            <img class="poster" v-if="img !== null" :src="`https://image.tmdb.org/t/p/w342${img}`" alt="">
            <!-- se non trova l'immagine mostro questa -->
            <img class="no_found_poster" v-else src="../assets/progetta-poster-glitched-tipografico-vettore-clipart_csp40896763.webp" alt="">
         </li>
         
         <li>{{title}}</li>
         <li>{{originalTitle}}</li>
         <li v-if="arrFlags">
           <img class="flag" :src="require(`../assets/${language}.png`)" alt="">
         </li>
         <li v-else> {{language}} </li>
         <li> Voto: {{vote}}</li>
   </ul>
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
</style>