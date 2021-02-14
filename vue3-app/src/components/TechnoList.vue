<template>
<h3>Toutes les technos que je dois ajouter à ma veille</h3>
  <ul>
  <li v-for="tech in technos" :key="tech.id" >
    <button @click="deleteTechno(tech)">X</button>
    {{tech.techno}}
  </li>
</ul>
<p>Nombre de techno{{technos.length > 1 ? "s" : null}} : {{technos.length}}</p>
</template>

<script>
export default {
  emits:  ["delete-techno"],
  props:{
    technos:{
      type : Array, 
      required: true
    }
  },
  setup(props, {emit}) {
    const deleteTechno = (tech) => {
      emit('delete-Techno', tech);
    }
    return{
      deleteTechno
    }
  }
}
</script>

<style>

</style>