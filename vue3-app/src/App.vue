<template>
<h1>Veille techno</h1>
<Form @add="saveTechno" /> 
<br>
<br>
<ul>
  <li v-for="tech in technos" :key="tech.id">
    {{tech.techno}}
  </li>
</ul>
</template>

<script>

import Form from '@/components/Form';
import { ref } from 'vue';
export default {

  name: 'App',
  components: {
    Form,
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
