<template>
<div id="app">
<Header />
  <div class="arrow-left">
  <i class="fa fa-arrow-left"></i>
  </div>
    <div class="auth-wrapper">
      <div class="auth-inner">
      <form>
        <div class="error-message">{{message}}</div>
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
              <input type="email" class="form-control"  v-model="email"/>
          </div>
          <div class="form-group">
              <label>Mot de passe</label>
              <input type="password" class="form-control" />
          </div>
          <button class="btn btn-dark btn-block"  @click.prevent="modifyProfil(user)">Modifier mon profil</button>
          <DeleteUser />
      </form>
      </div>
    </div>
</div>
</template>

<script>
import Header from './Header.vue'
import DeleteUser from './DeleteUser.vue'
import axios from 'axios'

 export default {
        name: 'Profile',
        components: {
            Header,
            DeleteUser
        },
         data(){
      return{
          prenom:"",
          nom:"",
          email:"",
          message:""
     }
  },
created(){
const user= localStorage.getItem('user');
  axios.get("http://localhost:3000/api/user/" + user.userId, {
    })
},
methods:{
   modifyProfil(){
   const user= JSON.parse(localStorage.getItem('user'));
    axios.put(`http://localhost:3000/api/user/${user.userId}`,{
     prenom: this.prenom,
     nom: this.nom,
     email: this.email
     })
     .then(() => {
          this.message = "Votre profil a bien été modifié";
      })
      .catch((error) => {
          (error.response.status === 401) 
           this.message = "Une erreur s'est produite lors de la modification de vos données";
      });
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

  .auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }
</style>