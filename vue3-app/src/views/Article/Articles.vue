<template>
    <div class="article">
        <div class="article-card" v-for="item in data" :key="item.id">
        <h3>{{ item.name }}</h3>
        <p>{{ item.couleur }}</p>
        <router-link :to="{name: 'ArticleDetails', params: {id: item.id}}" class="article-link">Aller voir</router-link>
        </div>
    </div>

</template>

<script>
export default {
    name : 'Article',
  setup() {
     return{

      data : [ 
        {
            id: 1,
            name: "Vetement homme",
            couleur: "verte",
        },
        {
            id: 2,
            name: "Vetement Femme",
            couleur: "rouge",
        },
        {
            id: 3,
            name: "Enfant",
            couleur: "verte",
        },
        {
            id: 4,
            name: "Chaussure",
            couleur: "verte",
        }
    ]};

},
};
</script>
<style>
    .article{
        display: flex;
        width: 100%;
        height: auto;
        justify-content:center;
    }
    .article-card{
        width: 15%;
        height: 150px;
        border: 1px solid rgb(197, 196, 196);
        border-radius: 10px;
        margin:0 0.5rem;
        -webkit-box-shadow: 0px 0px 5px 3px rgba(173,173,173,0.97); 
        box-shadow: 0px 0px 4px 1px rgba(173,173,173,0.97);
        transition: all .2s ease;

    }
    .article-card:hover{
    transform: scale(1.015);
    }
    .article-link{
        background-color: #B33B3B;
        padding:10px 5px;
        font-size: 15px;
    }
</style>