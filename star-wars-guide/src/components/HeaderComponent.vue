<script setup>
import IconStarwars from './icons/IconStarwars.vue';
import IconHome from './icons/IconHome.vue';

</script>
<template>
  <header>
    <div class="iconprincipal">
      <IconStarwars />
    </div>
    <div class="title">
      <h1>EXPLORE THE GALAXY</h1>
    </div>

    <nav>
      <button type="button">
        <RouterLink to="/"> <IconHome /></RouterLink>
         
      
        <RouterLink to="/">
         <H3 id="homie">Home</H3>
        </RouterLink>
        
      </button>
      <button>
        <RouterLink to="/favorite"><img class="fav" src="../assets/imgs/favoritos.png" alt="Icon Fav"></RouterLink>


        <RouterLink to="/favorite">
          <H3 id="fav">Favorite</H3>
        </RouterLink>
      </button>
    </nav>
  </header>
</template>

<style scoped>
@import '../assets/headerComponent.css';
</style>
