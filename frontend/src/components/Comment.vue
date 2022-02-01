<template>
<div id="app">
   <Header/>
         <div class="container" v-for="post in posts" :key="post.postId">
          <div class="row">	
            <div class="col-lg-6 offset-lg-3">
              <div class="cardbox shadow-lg bg-white">
                      <button class="btn btn-flat btn-flat-icon" style= "margin-left: 93%;" type="button" data-toggle="dropdown" aria-expanded="false">
                        <em class="fa fa-ellipsis-h"> 
                          <select class="form-select mb-3">
                                <option hidden></option>
                                <option>Modifier</option>
                                <option>Supprimer</option>
                            </select>
                          </em>
                      </button>
                              <div class="d-flex mr-3">
                                <a href=""><img class="img-fluid rounded-circle" style="width: 50px;" src="../../img/justinetharchinprofil.jpg" alt="User"></a>
                              </div>
                                  <div class="media-body">
                                    <p class="m-0">{{ post.user.prenom }} {{ post.user.nom }}</p>
                                      <small><span><i class="icon ion-md-time"></i>  {{ post.createdAt | moment("DD.MM.YY HH:mm") }}</span></small>
                                  </div>
                    
                        <div class="cardbox-item">
                            <p> {{ post.user.content }}</p>
                        </div>
                          <div class="cardbox-base">
                          </div>
                          <form @submit.prevent="commentUser()">
                              <div class="search">
                                <input placeholder="Write a comment" type="text" id="comment" v-model="comment">
                                </div>
                                <button class="btn btn-dark btn-block" style="margin-left: flex;">Publier</button>
                    </form>
                    </div>
              </div><!--/ col-lg-6 -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'

    export default {
        name: 'Comment',
        components: {
          Header
          },
          data() {
            return {
               UserId:"",
               prenom: "",
               nom: "",
               userId: "",
               posts: [],
               post:"",
               comment: ""
            }
        },
        mounted() {
        this.userId = JSON.parse(localStorage.getItem("user"));
        console.log(this.userId)
         axios.get('http://localhost:3000/api/user/post/', {
                    userId: this.userId,
                    content: this.content
                })
                .catch(error => console.log(error))
      },
        methods: {
         commentUser(){
         axios.post('http://localhost:3000/api/comment/new', {
                    userId: this.userId,
                    postId: this.postId,
                    comment: this.comment
                })
                .then(this.$router.push("/post"))
                .catch(error => console.log(error))
        }
      }    
    }
</script>
