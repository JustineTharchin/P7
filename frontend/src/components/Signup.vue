<template>
<div id="app">
  <div class="auth-wrapper">
    <div class="auth-inner">
    <form @submit.prevent="signup()">
         <div class="form-group">
            <label>Prénom</label>
            <input type="text" class="form-control" id="prenom" v-model="prenom" />
        </div>
         <div class="form-group">
            <label>Nom</label>
            <input type="text" class="form-control" id="nom" v-model="nom" />
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" id="email" v-model="email"/>
        </div>
        <div class="form-group">
            <label>Mot de passe</label>
            <input type="password" class="form-control" id="password" v-model="password"/>
        </div>
         <div class="form-group">
            <label>Confirmation du mot de passe</label>
            <input type="password" class="form-control" v-model="password_confirm" />
        </div>
        <div class="login">
            <a href="login">Déjà un compte ?</a>
          </div>
        <button class="btn btn-dark btn-block" type="submit">S'incrire</button>
           <div class="error-message">{{message}}</div>
        <p>*Veuillez remplir tous les champs du formulaire</p>
    </form>
    </div>
   </div>
</div>
</template>

<script>
    export default {
        name: 'Signup',
        data() {
            return {
                prenom: '',
                nom: '',
                email: '',
                password:'',
                password_confirm:'',
                message:''
            }
        },
        methods: {
         signup(){
         const dataUser = {
                prenom: this.prenom,
                nom: this.nom,
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm
           }
              this.$store.dispatch('signup', dataUser)
                .then(() => this.$router.push('/login'))
                .catch((error) => {
                  (error.response.status === 401) 
                    this.message = "Le formulaire n'a pas été correctement rempli";
                })
            }
        }
    }
</script>

<style scoped>
* {
    box-sizing: border-box;
  }

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

  #app {
    text-align: center;
  }

  .navbar-light {
    background-color: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
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
