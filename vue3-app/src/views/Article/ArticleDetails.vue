<template>
  <h1>Article Details Page</h1>

</template>

<script>
export default {
setup() {
    return{
     id: this.params.id,
     name: this.params.name,
     couleur: this.params.couleur,   
    }
}
}
</script>

<style>

</style>