import { defineStore } from 'pinia'

export const useStarwarsStore = defineStore({
    id: 'starwars',
    state: () => ({
        pictureArray: [],
        characterArray:[],
        characterAddFavoriteArray: [],

    }),
    getters: {
        
    },
    actions: {
        addFavorite(src,character) {
            if(this.characterArray.includes(character)) {
                alert("Este personaje ya fue seleccionado");
            } else{
                this.pictureArray.push(src);
                this.characterArray.push(character);
            }
                   
        },
        deleteFavorite(index) {
            this.characterArray.splice(index, 1);
            this.pictureArray.splice(index, 1);
            console.log(index);
        },
        addNewCharacter(){
            this.personalizedCharacterArray.push(this.characterArray)
        },

        submmit(name, gender, homeworld, specie, image) {
            this.characterAddFavoriteArray.push({name : name, gender: gender, homeworld: homeworld, specie: specie, image: image })
        },
        deleteAddFavorite(index) {
            this.characterAddFavoriteArray.splice(index, 1);
        }
    }
})

        

