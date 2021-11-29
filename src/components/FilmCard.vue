<template>
   <ul>
         <li>{{title}}</li>
         <li>{{originalTitle}}</li>
         <li>{{language}}</li>
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

}
</script>

<style>

</style>