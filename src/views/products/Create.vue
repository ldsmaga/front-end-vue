<template>

  <div class="container my-3">
    <!-- Login Form -->
    <form @submit.prevent="submit"> 
        <h2>Cadastrar Produto</h2>
      <input type="text"  name="name" id="name" v-model="form.name" placeholder="Nome" required>
      <input type="text" name="description" id="description" v-model="form.description"  placeholder="Descrição" required>
      <input type="text" @keypress="isNumber($event)" id="price"  name="price" placeholder="Preço" v-model="form.price" required>
      <input type="submit"  value="Cadastrar">
      <router-link to="/home" tag="button" class="btn btn-light">Voltar</router-link>
    </form>

  </div>

</template>

<script>

import Produto from '../../services/products'

export default {
  name: 'signin',
  components: {
    //
  },

  data(){
    return {
      form: {
        name: '',
        description: '',
        price: '',
      }
    }
  },

  methods:{
    submit(){
      Produto.createProduct(this.form).then(()=>{
          alert('salvo com sucesso')
          this.$router.replace({
          name: 'home'
        })
      })
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
  }
}
</script>
