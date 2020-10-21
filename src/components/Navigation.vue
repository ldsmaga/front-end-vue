<template>
<div>
            <template v-if="authenticated">
<nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="container">
            <router-link :to="{name: 'home'}"><strong>Front-end | Vue</strong></router-link>
            <ul class="navbar-nav ml-auto">
            <li class="nav-item"><router-link :to="{name: 'create'}">Cadastrar produto</router-link> | </li>
            <li class="nav-item"><router-link :to="{name: 'updateUser'}">{{user.name}}</router-link> | </li>
            <li class="nav-item"><a href="#" @click.prevent="signOut">Sair</a></li>
            </ul>
    </div>
    </nav>
    </template>
</div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    
    export default {
        computed:{
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user',
            })
        },
        methods:{
            ...mapActions({
                signOutAction: 'auth/signOut'
            }),
            signOut(){
                this.signOutAction().then(()=>{
                    this.$router.replace({
                        name:'signin'
                    })
                })
            }
        }
    }
</script>