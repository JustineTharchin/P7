<template>
    <div class="UserProfile">
        <div class="profile-info">
        </div>
        <div class="delete-profile" @click="deleteUser()">Supprimer le compte</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'DeleteUser',
    methods: {
      deleteUser(){
        const userId = this.$user.userId;
        axios.delete(`http://localhost:3000/api/user/${userId}`,
        )
        .then(localStorage.removeItem('user'))
        .then(() => {
          this.$router.push('/login');
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
    .profile-info{
        margin: 50px auto;
        max-width: 800px;
    }

    .profile-info h2 {
        margin-bottom: 20px;
        font-size: 3rem;
    }

    .profile-info span {
        font-size: 3rem;
    }

    .delete-profile{
      color: red;
      margin-bottom: 30px;
      font-size: 18px;
      cursor: pointer;
    }
</style>