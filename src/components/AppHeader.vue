<template>
  <header>
    <div class="flags">
      <img v-on:click="setLanguage(0)" :src="`${imageFolder}flags%2Fusa.jpg?alt=media`">
      <img v-on:click="setLanguage(1)" :src="`${imageFolder}flags%2Ffrance.jpg?alt=media`">
      <img v-on:click="setLanguage(2)" :src="`${imageFolder}flags%2Fspain.jpg?alt=media`">
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      imageFolder: "https://firebasestorage.googleapis.com/v0/b/puzzle-ebd10.appspot.com/o/images%2F"
    }
  },
  
  methods: {
    setLanguage(language){
      this.$store.dispatch('setLanguage', language);
    }
  }
}
</script>

<style scoped>
header{ 
  display:inline-block;
  width: 20%;
}

.flags img{
  cursor: pointer;
  margin:0 2%;
}

@media screen and (max-width: 500px) {
  header{
    vertical-align: top;
    width: 40%;
  }
}
</style>