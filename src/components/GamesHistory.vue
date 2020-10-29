<template>
  <div v-if="dictionary" class="games-history">

    <category-history v-bind:categoryId="categoryId"></category-history> 
 
    <stats 
        v-bind:time   = "time"
        v-bind:clicks = "clicks"
        v-bind:fails  = "fails" >
    </stats>

    <a href="#" class="btn see-game" v-on:click="seeGame">{{dictionary[language].SEE_GAME}}</a>

    <a href="#" class="btn delete" v-on:click="removeGame">{{dictionary[language].DELETE_GAME}}</a>
       
    <hr/>

  </div>
</template>

<script>
import CategoryHistory from '../components/CategoryHistory';
import Stats from './Stats';

export default {
  components: {
    'category-history': CategoryHistory,
    stats: Stats
  },  

  props: {
    time: String,
    clicks: Number,
    fails: Number,
    categoryId: Number,
    id: Number
  },

  methods: {
    removeGame(){
      this.$store.dispatch('removeGame', this.id);
    },

    seeGame() {
      this.$router.push({name: 'GameHistory', params: {id: this.id}});
    }
  }, 
  
  computed: {
    language(){
      return this.$store.getters.getLanguage();
    },

    dictionary() {
      return this.$store.getters.getDictionary;
    }    
  }  
}
</script>

<style scoped>
.see-game{
  margin-right: 5px;
}
</style>


