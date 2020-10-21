<template>
  <div>

  <div class="container my-3">
<form @submit.prevent="submit"> 
        <h2>Editar Produto</h2><br>
      <label for="name">Nome:</label><br>
      <input type="text"  name="name" id="name" v-model="produto.name" placeholder="Nome" required><br>
      <label for="description">Descrição:</label><br>
      <input type="text" name="description" id="description" v-model="produto.description"  placeholder="Descrição" required><br>
      <label for="price">Preço: </label><br><input type="text" @keypress="isNumber($event)" id="price"  name="price" placeholder="Preço" v-model="produto.price" required>
      <input type="submit"  value="Alterar">
      <router-link to="/home" tag="button" class="btn btn-light">Voltar</router-link>
    </form>
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

  methods: {
    submit() {
      Produto.editProduct(this.produto, this.id).then(() => {
        alert("alterado com sucesso");
        this.$router.replace({
          name: "home",
        });
      });
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
  }
  },
};
</script>