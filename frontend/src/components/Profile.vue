<template>
<div id="app">
<Header />
   <br/><br/><br/><br/><br/><br/><br/><br/>
   <div class="auth-wrapper">
    <div class="auth-inner">
    <form>
        <h3>Mon profil</h3>
         <div class="form-group">
            <label>Prénom</label>
            <input type="text" class="form-control" v-model="prenom" />
        </div>
         <div class="form-group">
            <label>Nom</label>
            <input type="text" class="form-control" v-model="nom" />
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email"/>
        </div>
        <div class="form-group">
            <label>Mot de passe</label>
            <input type="password" class="form-control" v-model="password"/>
        </div>
        <br/>
        <button class="btn btn-dark btn-block"  @click.prevent="modifyProfil(user)">Modifier mon profil</button>
    </form>
    </div>
   </div>
</div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'

 export default {
        name: 'Profile',
        components: {
            Header
        },
         data(){
      return{
          prenom:"",
          nom:"",
          email:"",
          password:""
     }
  },
created(){
const user= localStorage.getItem('user');

  axios.get("http://localhost:3000/api/auth/"+ user, {
      headers: {
          Authorization: "Bearer " + localStorage.token,
      },
    })
    .then((response)=> 
    (this.user = response.data))
    .catch((err) => console.log(err));
},
methods:{
   modifyProfil(user){
   
    axios.put('http://localhost:3000/api/auth/'+ user.id,{
     email: user.email},
      {headers: {
                Authorization: "Bearer " + localStorage.token,
            },
      })
    .then((response)=>{console.log(response)
    this.email=response.email},
    window.alert('modification effectué'))
    .catch((err)=> console.log(err))
    }
  }
}
</script>

<style scoped>
  body{
    background: #e4e7eb;
    min-height: 100 vh;
    display: flex;
    font-weight: 400;
    font-family: 'Fira Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, label, span {
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;
  }

  html, body, #app, #root, .auth-wrapper {
    width: 100%;
    height: 100%;
  }

  .auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
  }

  .auth-inner {
    width: 450px;
    margin: auto;
    background: white;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }

  .auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }
</style>