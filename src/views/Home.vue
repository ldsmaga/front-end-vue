<template>
  <div class="container my-3">
     <table class="table table-striped table-hover">
    <thead class='bg-primary text-white'>
        <td>Nome</td>
        <td>Preço</td>
        <td>Ações</td>
        <td>Remover</td>
    </thead>
        <tr v-for="produto of produtos" :key="produto.id">
        <td>{{produto.name}}</td>
        <td>R$ {{produto.price}}</td>
        <td><router-link :to="{name:'show', params: {id: produto.id}}">Ver mais</router-link> | <router-link :to="{name:'edit', params: {id: produto.id}}">Editar</router-link></td>
        <td>
    <form @submit.prevent="submit(produto.id)">
      <button type="submit" class="btn btn-danger">Excluir</button>
    </form></td> 
        </tr>
     </table>
  </div>
</template>

<script>

import Produto from '../services/products'

export default{
  data(){
    return {
      produtos: []
    }
},

  methods:{
    submit(id){
      Produto.deleteProduct(id).then(()=>{
          alert('Produto excluído com sucesso')
          location.reload();
      }).catch((e)=>{
        alert("Erro:" + e)
      })
    }
  },

  mounted(){
    Produto.getProducts().then(resposta=>{
      this.produtos = resposta.data.products
    })
  }
}
</script>
