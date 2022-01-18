<template>
<div id="app">
   <Header/>
    <section  @submit.prevent="postComment()" class="hero">
         <div class="container">
              <div class="cardbox shadow-lg bg-white">
                  <div class="media-body">
                      <p class="m-0">Justine</p>
                    </div>
                      <div class="cardbox-comments">
                          <div class="search">
                              <input placeholder="Write a comment" type="text" id="post" v-model="post">
                            </div><!--/. Search -->
                            <button v-on:click="sendMessage" class="btn btn-dark btn-block" style="margin-left: flex;">Publier</button>  
                        </div><!--/ cardbox -->
            </div>
        </div><!--/ container -->
    </section>
   <div>
         <div class="container">
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
                                    <p class="m-0">Justine</p>
                                      <small><span><i class="icon ion-md-time"></i> 10 hours ago</span></small>
                                  </div>
                    <div class="cardbox-item">
                      <p>Hello, ceci est le 1er commentaire posté !</p>
                    </div><!--/ cardbox-item -->
                          <div class="cardbox-base">
                          </div><!--/ cardbox-base -->
                            <div class="cardbox-comments">
                              <span class="comment-avatar float-left">
                                <a href=""><img class="rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="..."></a>                           
                              </span>
                                <div class="search">
                                  <input placeholder="Write a comment" type="text">
                                </div><!--/. Search -->
                                   <button class="btn btn-dark btn-block" style="margin-left: flex;">Publier</button>  
                              </div><!--/ cardbox-like -->			  
                            </div><!--/ cardbox -->
                          </div><!--/ col-lg-6 -->
            </div><!--/ row -->
        </div><!--/ container -->
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'

    export default {
        name: 'User',
        components: {
          Header
          },
          data() {
            return {
                post: ""
            }
        },
        mounted() {
        this.userId = JSON.parse(localStorage.getItem("user"));
        console.log(this.userId)
    },

        methods: {
         postComment(){
         axios.post('http://localhost:3000/api/post/', {
                    post: this.post
                })
                .then(res => res.json())
                .then((res) => {
                    console.log(res)
                    if (res.ok) {
                        window.location.reload();
                        this.inputMessage = {} // Retour à 0 des inputs //
                    } else {
                        alert("Message bien reçu");
                    }
                })
                .then(this.$router.push("/list"))
                .catch(error => console.log(error))
        }
      }
      
    }
</script>

<style>
  .navbar-light {
    background-color: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  }

.hero {
  padding: 6.25rem 0px !important;
  margin: 0px !important;
}
.cardbox {
  border-radius: 3px;
  margin-bottom: 20px;
  padding: 0px !important;
}

.cardbox .cardbox-heading {
  padding: 16px;
  margin: 0;
}
.cardbox .btn-flat.btn-flat-icon {
 border-radius: 50%;
 font-size: 24px;
 height: 32px;
 width: 32px;
 padding: 0;
 overflow: hidden;
 color: #fff !important;
 background: #b5b6b6;
 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
}
.cardbox .float-right .dropdown-menu{
  position: relative;
  left: 13px !important;  
}
.cardbox .float-right a:hover{
  background: #f4f4f4 !important;	
}
.cardbox .float-right a.dropdown-item {
  display: block;
  width: 100%;
  padding: 4px 0px 4px 10px;
  clear: both;
  font-weight: 400;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px !important;
  color: #848484;
  text-align: inherit;
  white-space: nowrap;
  background: 0 0;
  border: 0;
}

.media {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
}
.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}
.media .mr-3{
  margin-right: 1rem !important;
}
.media img{
  width: 48px !important;
  height: 48px !important;
  padding: 2px;
  border: 2px solid #f4f4f4;
} 
.media-body {
  -ms-flex: 1;
  flex: 1;
  padding: .4rem !important;
}
.media-body p{
  font-family: 'Fira Sans', sans-serif;	
  font-weight: 500 !important;
  font-size: 14px;
  color: #88898a;
}
.media-body small span{
  font-family: 'Fira Sans', sans-serif;	
  font-size: 12px;
  color: #aaa;
  margin-right: 10px;
}

.cardbox .cardbox-item {
    position: relative;
    display: block;
}

.img-responsive{
    display: block;
    max-width: 100%;
    height: auto;
}	
.fw {
  width: 100% !important;
	height: auto;
}

.cardbox-base{
 border-bottom: 2px solid #f4f4f4;
}	
.cardbox-base ul{
 margin: 10px 0px 10px 15px!important; 
 padding: 10px !important;
 font-size: 0px;	
 display: inline-block;
}
.cardbox-base li {
  list-style: none;
  margin: 0px 0px 0px -8px !important;
  padding: 0px 0px 0px 0px !important;
  display: inline-block;
}

.cardbox-base li a{
  margin: 0px !important;
  padding: 0px !important;
}
.cardbox-base li a i{
 position: relative;
 top: 4px; 
 font-size: 16px;
 color: #8d8d8d;
 margin-right: 15px;
}
.cardbox-base li a span{
 font-family: 'Fira Sans', sans-serif;
 font-size: 14px;
 color: #8d8d8d;
 margin-left: 20px;
 position: relative;
 top: 5px; 
}
.cardbox-base li a em{
 font-family: 'Fira Sans', sans-serif;
 font-size: 14px;
 color: #8d8d8d;
 position: relative;
 top: 3px; 
}
.cardbox-base li a img{
  width: 25px;
  height: 25px;
  margin: 0px !important;
  border: 2px solid #fff;
}

.cardbox-comments{
  margin-left: 15%;
  padding: 10px 40px 20px 40px !important;
  font-size: 0px;	
  text-align: center;
  display: inline-block;
}
.cardbox-comments .comment-avatar img{
  margin-top: 1px;
  margin-right: 1px;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 40px;
  height: 40px;
}
.cardbox-comments .comment-body {
  overflow: auto;
}
.search {
 position: relative;
 right: 10px;
 top: -40px;
 margin-bottom: -40px;
 border: 2px solid #f4f4f4;	
 width: 100%;
 overflow: hidden;
}
.search input[type="text"] {
 background-color: #fff;
 line-height: 10px;
 padding: 15px 60px 20px 10px;
 border: none;
 border-radius: 4px;
 width: 360px;
 font-family: 'Fira Sans', sans-serif;
 font-size: 14px;
 color: #8d8d8d;
 height: inherit;
 font-weight: 700;
}
.search button {
 position: absolute;
 right: 0;
 top: 0px;
 border: none;
 background-color: transparent;
 color: #bbbbbb;
 padding: 15px 10px;
 cursor: pointer;
 
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center;
}
.search button i {
 font-size: 20px;
 line-height: 30px;
 display: block;
}

.btn-block{
  margin-left: -3%;
}
</style>