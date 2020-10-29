<template>
  <div v-if="dictionary && fetchCategories" class="categories">
    {{dictionary[language].CATEGORY}}
    <select v-model="selected" v-on:change="onCategoryChange()">
      <template v-for="(category, index) in this.categories">
        <option v-bind:key="index" v-bind:value="index">{{dictionary[language][category.name]}}</option>        
      </template>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    categoryId: {
      type: Number
    }
  },

  data() {
    return {
      selected: 0,
      categories: ''
    }
  },

  methods: {
    onCategoryChange() {
      this.emitCategory();
    },

    emitCategory() {
      let category = this.categories[this.selected];
      category.categoryId = this.selected;
      this.$emit('categoryChange', category);
    },

    initCategories(categories){
        this.categories = categories;
        this.selected = Math.floor(Math.random() * this.categories.length);
        this.emitCategory();
    }

  },

  computed: {
    language(){
      return this.$store.getters.getLanguage();
    },
    
    dictionary() {
      return this.$store.getters.getDictionary;
    },

    fetchCategories() {
      const categoriesList = this.$store.getters.getCategories;
      if (categoriesList){
        this.initCategories(categoriesList);
      }  
      return categoriesList;
    }

  },
 


}
</script>

<style scoped>
.categories{
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>