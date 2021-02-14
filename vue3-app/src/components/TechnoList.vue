<template>
<h3>Toutes les technos que je dois ajouter à ma veille</h3>
  <ul>
  <li v-for="tech in technos" :key="tech.id">
    {{tech.techno}}
  </li>
</ul>
<p>Nombre de techno{{technos.length > 1 ? "s" : null}} : {{technos.length}}</p>
</template>

<script>
export default {
  props:{
    technos:{
      type : Array, 
      required: true
    }
  }
}
</script>

<style>

</style>