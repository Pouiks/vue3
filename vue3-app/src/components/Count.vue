<template lang="fr">
    <div>
        <p> {{count}} clic{{count > 1 ? "s" : null}}</p>
        <button @click="addOne"> ajouter 1</button>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    emits : ["increment"],
    setup(props, ctx) {
        let count = ref(0);

        let addOne = () => {
            console.log("j'ajoute 1");
            ctx.emit("increment", count.value);
            count.value++;
        }
        return{ 
            count, 
            addOne
        }
    }
}
</script>
<style >

</style>