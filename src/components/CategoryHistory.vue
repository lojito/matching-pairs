<template>  
  <div v-if="dictionary" class="categories">
    {{dictionary[language].CATEGORY}} {{dictionary[language][categories[categoryId].name]}}
  </div>
</template>

<script>
export default {
  props: {
    categoryId: {
      type: Number
    }
  },

  computed: {
    language(){
      return this.$store.getters.getLanguage();
    },

    categories() {
      return this.$store.getters.getCategories;
    },

    dictionary() {
      return this.$store.getters.getDictionary;
    }
  }

}
</script>

<style scoped>
.categories{
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>