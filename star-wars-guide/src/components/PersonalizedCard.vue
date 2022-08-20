<script>
import { mapActions, mapState } from 'pinia'

import { useStarwarsStore } from '../stores/starwars';

export default {
  name: "PersonalizedCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    homeworld: {
      type: String,
      required: true,
    },
    speciesData: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    }
  },
  computed:{
    ...mapActions(useStarwarsStore, ["deleteAddFavorite"]),
    ...mapState(useStarwarsStore, ['characterAddFavoriteArray'])
  },

};
</script>

<template>
  <div class="card" >
    <img class="ficha" :src="src" />
    <div >
      <h4>Name: {{ name }}</h4>
      <h4>Gender: {{ gender }}</h4>
      <h4>
        Homeworld: {{ homeworld }}
      </h4>
      <h4>Specie: {{ speciesData }}</h4>
      <button type="button">
      <a>
        <img class="icon-delete" src="../assets/imgs/basura.png 12-01-47-582.png" @click="deleteAddFavorite(index)" alt="delete"/>


      </a>
      </button>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/apiListingCards.css';
</style>