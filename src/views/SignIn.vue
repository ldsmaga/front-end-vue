<template>

<div class="wrapper fadeInDown">
  <div id="formContent">

    <!-- Icon -->
    <div class="fadeIn first">
      <h3>Front-end | <strong>Vue</strong></h3>
    </div>

    <!-- Login Form -->
    <form @submit.prevent="submit">
      <input type="text"  name="email" id="email" v-model="form.email" class="fadeIn second" placeholder="email" required>
      <input type="password" id="password" class="fadeIn third" name="password" placeholder="senha" v-model="form.password" required>
      <input type="submit" class="fadeIn fourth" value="Entrar">
    </form>

    <!-- Create User -->
    <div id="formFooter">
      <router-link :to="{name: 'signup'}">Cadastre-se</router-link>
      <!-- <a class="underlineHover" href="#">Cadastre-se</a> -->
    </div>

  </div>
</div>

</template>


<script>
import {mapActions} from 'vuex'

export default {
  name: 'signin',
  components: {
    //
  },

  data(){
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },

  methods:{
    ...mapActions({
      signIn: 'auth/signIn'
    }),

    submit(){
      this.signIn(this.form).then(()=>{
        this.$router.replace({
          name: 'home'
        })
      }).catch((e)=>{
        alert("Credenciais inválidas:")
        console.log(e)
      })
    },

  }
}
</script>
