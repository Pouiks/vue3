<template>
    <form @submit.prevent="addTechno">
        <label for="techno">Techno à ajouter</label>
        <br>
        <input type="text" name="techno" v-model="techToLearn">
        <br>
        <button type="submit" @click="addTechno" >Ajouter</button>
    </form>
</template>

<script>
import { ref } from 'vue';
export default {
    setup(){
            let techToLearn = ref("");

            const addTechno = () => {

                console.log("form | addTechno() | techToLearn", techToLearn.value);
                techToLearn.value = '';
            }
        return {
            techToLearn,
            addTechno
        }
    }

}
</script>

<style>

</style>