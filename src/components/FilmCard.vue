<template>
   <ul>
         <li>{{title}}</li>
         <li>{{originalTitle}}</li>
         <li v-if="arrFlags">
           <img :src="require(`../assets/${language}.png`)" alt="">
         </li>
         <li v-else> {{language}} </li>
         <li>{{vote}}</li>
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
 img {
     width: 30px;
 }
</style>