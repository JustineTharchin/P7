<template>
 <div id="app">
  <div class="auth-wrapper">
    <div class="auth-inner">
    <form @submit.prevent="login()">
        <div class="form-group">
          <div class="error-message">{{message}}</div>
            <label>Email</label>
            <input type="email" class="form-control" id="email" v-model="email" />
        </div>
        <div class="form-group">
            <label>Mot de passe</label>
            <input type="password" class="form-control" id="password" v-model="password"/>
        </div>
          <div class="signup">
            <a href="signup">Pas encore inscrit ?</a>
          </div>
        <button class="btn btn-dark btn-block" type="submit">Connexion</button>
    </form>
    </div>
  </div>
 </div>
</template>

<script>
  export default {
    name: 'Login',
     data() {
       return {
            email: "",
            password: ""
       }
    },
    methods: {
      login() {
        const email = this.email;
        const password = this.password;

        this.$store.dispatch('login', { email, password })
          .then(() => this.$router.push('/post'))
          .catch(err => console.log(err))
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