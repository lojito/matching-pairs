<template>
  <div class="game-history" v-if="dictionary && (game.time != undefined)">

    <category-history v-bind:categoryId="game.categoryId"></category-history>  

    <stats 
        v-bind:time   = "game.time"
        v-bind:clicks = "game.clicks"
        v-bind:fails  = "game.fails" >
    </stats>

    <board-history
      v-bind:board = "game.board"
      v-bind:folder = "game.folder">
    </board-history>

    <a href="#" class="btn delete" v-on:click="removeGame">{{dictionary[language].DELETE_GAME}}</a>
    
    <a href="#" class="btn delete" v-on:click="backToHistory">{{dictionary[language].BACK}}</a>

  </div>
</template>

<script>
import CategoryHistory from '../components/CategoryHistory';
import Stats           from '../components/Stats';
import BoardHistory    from '../components/BoardHistory';

export default {
  components: {
    'category-history': CategoryHistory,
    stats: Stats,
    'board-history': BoardHistory
  },

  methods: {
    removeGame() {
      this.$store.dispatch('removeGame', this.$route.params.id);
      this.$router.push('/history');
    },

    backToHistory() {
      this.$router.push('/history');
    }
  },

  computed: {
    game(){
      return this.$store.getters.getGame(this.$route.params.id);
    },

    language() {
      return this.$store.getters.getLanguage();
    },
    
    dictionary() {
      return this.$store.getters.getDictionary;
    }    
  }

};
</script>