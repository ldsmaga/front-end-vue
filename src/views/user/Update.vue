<template>
  <div>

  <div class="container my-3">
<form @submit.prevent="submit"> 
        <h3>Meus Dados</h3>
      <input type="text"  name="name" id="name" v-model="user.name" placeholder="Nome" required>
      <input type="text" name="email" id="email" v-model="user.email"  placeholder="Email" required>
      <input type="password" id="password"  name="password" placeholder="Senha" v-model="user.password">
      <input type="date"  name="birthday" id="birthday" v-model="user.birthday" class="fadeIn second"><br>
      <input type="submit"  value="Alterar">
      <button type="button" @click="deleteUser()" class="btn btn-danger">Excluir conta</button>
    </form>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import User from '../../services/user'

export default {
    data(){
    return {
      user: [],
      id: this.$route.params.id
    }
},

  created: function () {
    User.me().then(resposta=>{
      this.user = resposta.data
    })
    
  },

  methods: {
      ...mapGetters({
          authenticated: 'auth/authenticated',
          userData: 'auth/user'
      }),
      ...mapActions({
          logout: "auth/signOut"
      }),

    submit() {
      User.update(this.user).then(()=>{
          alert('Editado com sucesso')
          this.$router.replace({
          name: 'home'
        })
      }).catch((e)=>{
        alert("Não foi possível editar")
        console.log(e)
      })
    },

    
    deleteUser(){
          let confirmacao = confirm("Tem certeza? Essa ação é irreversível")
          if(confirmacao){
            
      User.delete(this.user).then(()=>{
          alert('Usuário excluído com sucesso')  
          this.logout()
          this.$router.replace({
          name: "signin",
        });
      }).catch((e)=>{
        alert("Erro:" + e)
      })
          }
    }
  },
};
</script>