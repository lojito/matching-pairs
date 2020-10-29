<template>
    <div class="history">
      <p class="info" v-if="games.length == 0">{{dictionary && dictionary[language].NO_HISTORY}}</p>
      <template v-for="(game, index) in games">
        <GamesHistory 
            v-bind:key        = "index" 
            v-bind:time       = "game.time"
            v-bind:clicks     = "game.clicks"
            v-bind:fails      = "game.fails"
            v-bind:categoryId = "game.categoryId"
            v-bind:id         = "game.id" >
        </GamesHistory>
      </template>
    </div>
</template>

<script>
import GamesHistory from '../components/GamesHistory';

export default {
  components: {
    GamesHistory
  },

  computed: {
    games(){
      return this.$store.getters.getGames;
    },

    language(){
      return this.$store.getters.getLanguage();
    },
    
    dictionary(){
      return this.$store.getters.getDictionary;
    }    
  }
}
</script>