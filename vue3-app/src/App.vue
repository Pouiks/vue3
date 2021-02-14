<template>
<h1>Veille techno</h1>
<Form @add="saveTechno" /> 
<br>
<br>

<TechnoList :technos="technos" />

</template>

<script>

import Form from '@/components/Form';
import TechnoList from '@/components/TechnoList';
import { ref } from 'vue';
export default {

  name: 'App',
  components: {
    Form,
    TechnoList
  },

  setup(){
    let technos = ref([]);

    const saveTechno = (data) => {
      console.log("App | saveTechno() | data ", data);
      technos.value = [...technos.value, {techno: data, id: Date.now()}]
      console.log("App | saveTechno() | technos.value ", technos.value);
    }
    return {
      saveTechno,
      technos
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
  margin-top: 60px;

}

ul{
  list-style: none;
}
</style>
