<template>
  <div v-if="dictionary" class="contact">
    <p>
      <span>{{dictionary[language].AUTHOR}} </span><span class="me">Livan Ojito Villanueva</span>
    </p>
    <p>
      <span>{{dictionary[language].EMAIL}} </span><span class="me">livanojito@gmail.com</span>
    </p>      
    <p>
      <span>{{dictionary[language].GITHUB}} </span>
      <a target="_blank" href="https://github.com/lojito">https://github.com/lojito</a>
    </p>        
    <p>
      <span>{{dictionary[language].LINKEDIN}} </span>
      <a target="_blank" href="https://ca.linkedin.com/in/lov">https://ca.linkedin.com/in/lov</a>
    </p>
    <p>
        <span>{{dictionary[language].AVAILABILITY}} </span>
        <span class="me">{{dictionary[language].AVAILABILITY_STATUS}} </span>
    </p>         
  </div>
</template> 

<script>

export default {

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
.contact{
  width: 95%;
  margin: 0 auto;
  margin-bottom: 20px;  
}

span{
  font-weight: bold;
}

.me{
  color: green;
  font-weight: normal;
}
</style>