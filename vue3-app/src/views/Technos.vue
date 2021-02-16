<template>

        <h1>JE suis la page TEchnos</h1>
<Form @add="saveTechno" /> 
<br>
<br>

<TechnoList :technos="technos" @delete-techno="deleteTechno" @edit-techno="editTechno"/>
<br>
<br>
</template>

<script>
import Form from '@/components/Form';
import TechnoList from '@/components/TechnoList';
import { ref } from 'vue';
export default {

  name: 'App',
  components: {
    Form,
    TechnoList,

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
    }

  }
}
</script>

<style>

</style>