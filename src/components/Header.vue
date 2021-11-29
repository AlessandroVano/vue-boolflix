<template> 
  <section class="bg">
    <div class="container p-4 d-flex ">
      <div class="d-flex">
        <a href="#">
         <img class="logo" src="../assets/Logonetflix.png" alt="">
        </a>

       <ul class="d-flex">
        <li>
          <a href="/">Home</a>
        </li>
         <li>
          <a href="/">Serie tv</a>
        </li>
         <li>
          <a href="/">Film</a>
        </li>
         <li>
          <a href="/">Originali</a>
        </li>
         <li>
          <a href="/">Aggiunti di recente</a>
        </li>
        <li>
          <a href="/">Mia lista</a>
        </li>
      </ul>
      </div>
      

     <div class="reserch">
      <input type="text" class="mt-2 "
       placeholder="Che film vuoi ricercare?"
       v-model.trim="searchFilm">
       <button class="b"
         @click="$emit('search', searchFilm)"
       >
        Vai
        </button>
     </div>
      

    </div>

  </section>
</template>


<script>

export default {
 name: 'Header',

 data() {
   return {
     searchFilm: '',
   }
 }
}
</script>

<style scoped lang="scss">
@import '@/styles/globals';
.bg {
  background-color: $bg-color;
  margin-bottom: 80px;
}
.container {
  justify-content: space-between;
}

img {
  width: 147px;
  margin-top: 17px;
}

  ul {
    display: flex;
    list-style: none;
    margin: 1.6rem 0 ;
}
a{
   display: inline-block;
    padding-left: 20px;
    text-decoration: none;
    color: $text-color;
    &.active,
    &:hover {
        color: $title-color;
        transition: color .4s;
    }
}
.reserch {
  margin-top: 19px;
}
 input {
   margin-right: 20px;
    border: 0;
    color: $title-color;
     background: $bg-color; 
    border-bottom: 1px solid  rgba(255, 248, 248, 0.603); 
    outline: none;
    transition: border .3s;
} 
.b {

 padding: 3px 28px;
text-transform: uppercase;
font-size: 14px;
background-color: #e10000;
border: 0;
border-radius: 30px;
}

.b:hover,
.b:focus{
  transition: background .4s;
    background:  rgb(65, 63, 63);
    color: $title-color ;
}


</style>