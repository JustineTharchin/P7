<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
     <div class="container">
      <!-- <img src="../../img/icon-left-font-monochrome-black.e0c03c97.svg"> -->
       <div class="collapse navbar-collapse">
         <ul class="navbar-nav ml-auto">
           <li class="nav-item">
             <router-link class="nav-link" to="/login">Se connecter</router-link>
           </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/signup">S'inscrire</router-link>
           </li>
         </ul>
       </div>
     </div>
   </nav>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>