<template>
<div clas="UserPost">
      <div v-for="post in posts" :key="post.id" class="bloclist">
          <div class="blocauthor">
              <h3><i class="far fa-user-circle"></i> {{ post.prenom }} {{ post.nom }} </h3>
              <div class="blocjob"> 
                  <p><i class="far fa-clock"></i> {{ post.createdAt | moment("DD.MM.YY HH:mm") }} </p>
              </div>
          </div>
          <div class="blocmessage">
              <h5 class="pmessage"><i class="fas fa-angle-right"></i>"  {{ post.content }} "</h5>
          </div>  
      </div>   
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UserPosts',
    data(){
        return{
            posts: []
        }
    },
    methods: {
        getUserPosts(){
            const userId = this.$user.userId;
            axios.get(`${this.$apiUrl}/post/user${userId}/posts`)
            .then(res => this.posts = res.data)
        }
    }
}
</script>

<style lang="css">
.bloclist {
  width: 70%;
  margin: auto;
  margin-top: 25px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px; 
  padding: 25px;
}
h4 {
  text-transform: uppercase;
  font-size: 1.25em;
  text-decoration: underline;
   
}
.blocjob {
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 50%;
  justify-content: space-around;
  
}
.blocauthor i {
  color: #0c2444;
  font-size: 1.75em;
  
}

.blocauthor {
  width: 90%;
  background-color: grey;
  margin: 0 auto;
  border-radius: 30px; 
  display: flex; 
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: white;
}
.blocauthor h3 {
  font-size: 1.5em;
  margin: auto;
  padding-left: 15px;
  width: 50%;
}
.blocmessage {
  width: 90%;
  margin: 0 auto;
  border-radius: 30px; 
  border: 6px solid grey;
  box-sizing: content-box;
  text-align: center;
}
.blocmessage  h5 {
  font-style: italic;
}
h5 i, h4 i {
  font-size: 2em;
  color: #0c2444;
}
@media screen and (max-width: 450px) {
	.bloclist {
    width: 90%; 
    box-shadow: inset 0px 0px 0px 8px white;
    border: 5px solid #d44c5c;
    font-size: 0.7em;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    
  }
  label, input, textarea {
    width: 75%;
    text-align: center;
  }
}
</style>