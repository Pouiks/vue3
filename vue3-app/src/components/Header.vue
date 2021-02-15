<template>
  <nav>
    <a to="/">Home</a>
    <a to="/articles">articles</a>
    <a to="/technos">technos</a>
 </nav>

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
a{
    text-decoration: none;
    margin: 2rem 2rem;
    color: #fff;
    font-size:1.5em;
}

</style>