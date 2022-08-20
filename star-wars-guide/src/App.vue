<script>
import HomeView from "./views/HomeView.vue";
import FavoriteView from "./views/FavoriteView.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",
  data: () => ({}),
  components: { HomeView, FavoriteView, HeaderComponent, FooterComponent },
};
</script>

<template>
<div>
<header>
  <HeaderComponent></HeaderComponent>
</header>
<main>
  <router-view></router-view>
  
</main>
<footer>
 <FooterComponent/>
</footer>

</div>
</template>

<style>



</style>
