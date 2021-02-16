<template>
<!-- <Header /> -->
<div>
    <nav>
      <router-link to="/" >Home</router-link>
      <router-link to="/article" >articles</router-link>
      <router-link to="/technos" >technos</router-link>
    </nav>
 </div>
 <router-view/>

<!-- <h1>Veille techno</h1>
<Form @add="saveTechno" /> 
<br>
<br>

<TechnoList :technos="technos" @delete-techno="deleteTechno" @edit-techno="editTechno"/>
<br>
<Article />
<br>
<Count  /> -->

</template>

<script>

// import Form from '@/components/Form';
// import TechnoList from '@/components/TechnoList';
// import Count from '@/components/Count';
// // import Header from '@/components/Header';
// import Article from '@/components/Article';
import { ref } from 'vue';
export default {

  name: 'App',
  components: {
    // Form,
    // TechnoList,
    // Count,
    // // Header,
    // Article,
  },

  setup(){


    const editTechno = (tech) => {
      technos.value = technos.value.map(t => t.id !== tech.id ? t : tech);
    }

    let deleteTechno = (tech) => {
      console.log('App | deleteTechno() | tech',tech);
      // On garde uniquement les id differente de celle sur lequel on clique.
      technos.value = technos.value.filter(t => t.id !== tech.id);
    }

    let technos = ref([]);

    const saveTechno = (data) => {
      console.log("App | saveTechno() | data ", data);
      technos.value = [...technos.value, {techno: data, id: Date.now()}]
      console.log("App | saveTechno() | technos.value ", technos.value);
    }
    return {
      saveTechno,
      technos,
      deleteTechno,
      editTechno,
      // Article

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: 0 auto;

}
nav{
    width: 100%;
    height:50px;
    display: flex;
    flex-direction:row;
    background-color: rgb(179, 59, 59);
    justify-content:flex-end;
    align-items:center;

}
a{
    text-decoration: none;
    color: #fff;
    font-size:1.5em;
    padding: 0 2rem;
    text-decoration: none;
}

</style>
