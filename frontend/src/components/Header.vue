<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
     <div class="container">
       <div class="collapse navbar-collapse">
         <ul class="navbar-nav ml-auto">
           <li class="nav-item">
             <router-link class="nav-link" to="/profile">Mon compte</router-link>
           </li>
           <li class="nav-item">
            <div class="nav-link" id="disconnect_btn" @click= disconnect()>Me déconnecter</div>
           </li>
         </ul>
       </div>
     </div>
   </nav>
</template>

<script>
export default {
    name: 'Header',

    methods: {
        disconnect(){
            localStorage.removeItem('user');
            location.href = "/login";
        }
    }
}
</script>