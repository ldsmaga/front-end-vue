<template>
  <div>

  <div class="container my-3">
     <table class="table table-striped table-hover my-5" border="3px solid black">
         <thead class='bg-primary text-white'>
        <td>Nome</td>
        <td>Descrição</td>
        <td>Preço</td>
         </thead>
         <td>{{produto.name}}</td>
        <td>{{produto.description}}</td>
        <td>R$ {{produto.price}}</td>
        </table>
    </div>
  </div>
</template>

<script>
import Produto from "../../services/products";

export default {
    data(){
    return {
      produto: [],
      id: this.$route.params.id
    }
},

  created: function () {
    Produto.showProduct(this.id).then(resposta=>{
      this.produto = resposta.data.response
    })
  },

};
</script>