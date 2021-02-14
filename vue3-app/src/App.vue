<template>
<h1>Veille techno</h1>
<Form @add="saveTechno" /> 
</template>

<script>

import Form from '@/components/Form';
export default {

  name: 'App',
  components: {
    Form,
  },

  setup(){
    const saveTechno = (data) => {
      console.log("App | saveTechno() | data ", data);
    }
    return {
      saveTechno
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
</style>
