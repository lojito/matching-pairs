<template>
  <div v-if="dictionary" class="stats">
    <span class="time">   {{dictionary[language].TIME}}   {{time}}   </span>
    <span class="clicks"> {{dictionary[language].CLICKS}} {{clicks}} </span>
    <span>                {{dictionary[language].FAILS}}  {{fails}}  </span>
  </div>
</template>    

<script>

export default {
  props: {
    time: String,
    clicks: Number,
    fails: Number
  },

  computed: {
    language() {
      return this.$store.getters.getLanguage();
    },

    dictionary() {
      return this.$store.getters.getDictionary;
    }    
  }
}
</script>

<style scoped>
.stats {
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
}

.time, .clicks{
   margin-right: 10px;
}
</style>

