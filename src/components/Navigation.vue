<template>
  <nav v-if="dictionary">
    <input type="checkbox" id="menu" />

    <label class="menu-label" for="menu">
      <div id="burger-container">
          <div id="burger">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
        </div>
    </label>

    <ul>
      <li><router-link to ="/"           exact>{{dictionary[language].HOME}}        </router-link></li>
      <li><router-link to ="/history"    exact>{{dictionary[language].HISTORY}}     </router-link></li>
      <li><router-link to ="/repository" exact>{{dictionary[language].REPOSITORY}}  </router-link></li>      
      <li><router-link to ="/about"      exact>{{dictionary[language].ABOUT}}       </router-link></li>         
      <li><router-link to ="/contact"    exact>{{dictionary[language].CONTACT}}     </router-link></li>                  
    </ul>

  </nav>
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
nav{
  width: 80%;
  display:inline-block;
}

ul{
  list-style: none;
  padding-left: 0;
  margin-bottom: 8px;
}

li{
  display: inline-block;
  margin-right: 6px;
  cursor: pointer;
}

a.router-link-active{
  font-weight: 1000;
}

input#menu{
  display: none;
}

label.menu-label{
  display: none;
  cursor: pointer;
} 

#burger-container{
  position: relative;
  width: 100%;
}

#burger{
  cursor: pointer;
  display: block;
}

#burger span{
  background: green;
  display: block;
  left: 70%;
  width: 30px;
  height: 3px;
  margin-bottom: 6px;
  position: relative;
  top: 0;
  transition: all ease-in-out 0.4s;
}

@media screen and (max-width: 500px) {
  nav{
    width: 60%;
  }

  ul{
    margin: 0;
    display: block;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    text-align: left;
  }

  li{
    display: block;
    margin-right: 0;
  }

  a{
    display: block;
    text-decoration: none;
    padding: 10px;
    padding: 5px;
    background-color: darkseagreen;
  }

  label.menu-label{
    display: inline-block;
    width: 100%;
    cursor: default;
  }

  input#menu:checked ~ ul{
    max-height: 160px;
    transition: all ease 1s;
  }

  input#menu:checked ~ label >  #burger-container span:nth-child(2){
    width: 0;
    opacity: 0;
  }

  input#menu:checked ~ label > #burger-container span:nth-child(3){
    transform: rotate(45deg);
    top: -9px;
  }

  input#menu:checked ~ label >  #burger-container span:nth-child(1){
    transform: rotate(-45deg);
    top: 9px;
  }

  input#menu ~ ul a.router-link-active{
    position: absolute;
    top: 5px;
  }

  input#menu:checked ~ ul a.router-link-active{
    position: relative;
    top: 0px;
  }  
}  
</style>