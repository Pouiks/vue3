<template>
  <nav>
    <router-link to="/" >Home</router-link>
    <router-link to="/article" >articles</router-link>
    <router-link to="/technos" >technos</router-link>
 </nav>
<router-view/>

</template>

<script>
export default {
    name : 'navBar'
}
</script>
<style>
nav{
    width: 100%;
    height:50px;
    display: flex;
    flex-direction:row;
    background-color: rgb(179, 59, 59);
    justify-content:flex-end;
    align-items:center;

}
router-link{
    text-decoration: none;
    margin: 2rem 2rem;
    color: #fff;
    font-size:1.5em;
}

</style>