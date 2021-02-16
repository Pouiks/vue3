<template>
<!-- <Header /> -->
<div>
    <nav>
      <router-link to="/" >Home</router-link>
      <router-link to="/article" >articles</router-link>
      <router-link to="/technos" >technos</router-link>
    </nav>
 </div>
 <router-view/>
</template>

<script>




export default {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: 0 auto;

}
nav{
    width: 100%;
    height:50px;
    display: flex;
    flex-direction:row;
    background-color: rgb(179, 59, 59);
    justify-content:flex-end;
    align-items:center;

}
a{
    text-decoration: none;
    color: #fff;
    font-size:1.5em;
    padding: 0 2rem;
    text-decoration: none;
}

</style>
