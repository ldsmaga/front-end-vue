<template>

<div class="wrapper fadeInDown">
  <div id="formContent">

    <!-- Title -->
    <div class="fadeIn first">
      <h3>Cadastrar usuário</h3>
    </div>

    <!-- Login Form -->
    <form @submit.prevent="submit">
      <input type="text"  name="email" id="email" v-model="user.email" class="fadeIn second" placeholder="email" required>
      <input type="text"  name="name" id="name" v-model="user.name" class="fadeIn second" placeholder="nome" required>
      <input type="password" id="password" class="fadeIn third" name="password" placeholder="senha" v-model="user.password" required>
      <input type="date"  name="birthday" id="birthday" v-model="user.birthday" class="fadeIn second">
      <input type="submit" class="fadeIn fourth" value="Cadastrar">
    </form>

    <!-- Back -->
    <div id="formFooter">
      <router-link :to="{name: 'signin'}">Já possui cadastro?</router-link>
      <!-- <a class="underlineHover" href="#">Cadastre-se</a> -->
    </div>

  </div>
</div>

<!-- {{form}} -->
</template>
<script>

import Usuario from '../services/user'

export default {
  name: 'signup',
  components: {
    //
  },

  data(){
    return {
      user: {
        email: '',
        name: '',
        birthday: '',
        password: '',
      }
    }
  },

  methods:{
    submit(){
      Usuario.create(this.user).then(()=>{
          alert('Usuário cadastrado com sucesso')
          this.$router.replace({
          name: 'signin'
        })
      }).catch((e)=>{
        alert("Credenciais inválidas:" + e)
      })
    }
  }

}

</script>
