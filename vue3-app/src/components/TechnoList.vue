<template>
<h3>Les technos que je dois ajouter à ma veille</h3>
<p>Nombre de techno{{technos.length > 1 ? "s" : null}} : {{technos.length}}</p>
  <ul>
  <li v-for="tech in technos" :key="tech.id" >
    <button @click="editTechno(tech)">Modif</button>
    <button @click="deleteTechno(tech)">Supp</button>

    <span v-if="technoToEdit !== null && technoToEdit.id === tech.id" >
      <input type="text" v-model="technoToEdit.techno" @keypress.enter="save">
      <button @click="save">Sauvegarder</button>
    </span>

    <span v-else>{{tech.techno}}</span>
  </li>
</ul>
</template>

<script>
import { ref } from 'vue';
export default {
  emits:  ["delete-techno", "edit-techno"],
  props:{
    technos:{
      type : Array, 
      required: true
    }
  },
  setup(props, {emit}) {
    let technoToEdit = ref("");

    let deleteTechno = (tech) => {
      emit('delete-Techno', tech);
    }
    let editTechno = (tech) => {
      technoToEdit.value = tech;
    };

    let save = () => {
      emit('edit-techno', technoToEdit.value);
      technoToEdit.value = null;
    };
    return{
      deleteTechno,
      technoToEdit,
      editTechno,
      save
    };

    
  }

}
</script>

<style>

ul{
  list-style: none;
  width:50%;
  margin-left: 100px;
  text-align: left;
  display: flex;
  flex-direction: column;
  

}
li{
  width: 100%;
  margin: 0.3rem 0;
  padding: 0.3rem 0;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 5px;
}
button{
  margin: 0 0.3rem;
}

</style>