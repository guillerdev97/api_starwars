<script>
import { mapActions } from "pinia";
import apiListingCards from "../components/apiListingCards.vue";
import { useStarwarsStore } from "../stores/starwars";
export default {
  name: "HomeView",
  data() {
    return {
      characters: [],
      api: [
        "https://swapi.dev/api/people?page=1",
        "https://swapi.dev/api/people?page=2",
      ],
      images: [],
    };
  },
  props: {},
  methods: {
    async getCharacters() {
      let dataCharacters = [];
      const apiUrls = this.api;
      for(const url of apiUrls) {
        const response = await fetch(url);
        const data = await response.json();
        const charactersArray = data.results;
        charactersArray.forEach(function (element) {
            dataCharacters.push(element);
          });
      }
      this.characters = dataCharacters;
    },
    getImages() {
      for (let i = 1; i < 22; i++) {
        if (i === 17) {
          continue;
        } else {
          let urlObject = {
            url: `https://starwars-visualguide.com/assets/img/characters/${i}.jpg`,
          };
          this.images.push(urlObject);
        }
      }
    },
    //...mapActions(useStarwarsStore, ['addFavorite'])
  },
  created() {
    this.getCharacters();
    this.getImages();
  },
  components: { apiListingCards},
};
</script>

<template>
  <h4>CHARACTER GUIDE</h4>
  <div class="grid">
    <div class="box" v-for="(character, index) in characters" :key="character.index" >
    <apiListingCards
      :src="images[index].url"
      :name="character.name"
      :gender="character.gender"
      :homeworld="character.homeworld"
      :speciesData="character.species"
      :character="character"
    />
    </div>
  </div>
</template>


<style scoped>
@import '../assets/homeView.css';
</style>
