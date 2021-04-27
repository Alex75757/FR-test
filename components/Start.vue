<template>
<div>
  
  <div class="container-start">
    <svg id="red" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#EF483E"/>
      </svg>
    <div class="vertical-menu">
      
      <nuxt-link  to="/">   
        <img width="50" height="50"  src="../assets/home.svg" alt="interview">
             <br>
         Home
      </nuxt-link> 
       <br>
      <nuxt-link to="/Interview" >
        
        <img width="50" height="50" src="../assets/contact.svg" alt="interview">
             <br>
          Опросы
       </nuxt-link> 
          
        <br>
      <nuxt-link  to="/Users" name="Пользователи">
        <img width="36" height="36" src="../assets/clown.svg" alt="interview">
        <br>
          Пользователи
      </nuxt-link>
        <br>
      <nuxt-link  to="/Blacklist" name="Черные списки">
        <img width="36" height="36" src="../assets/black-list.svg" alt="interview">
        <br>
          Черные списки
      </nuxt-link>
        <br>
      <div v-if="$store.state.operand">  
      <nuxt-link to="/Call">
        <img width="36" height="36" src="../assets/phone.svg" alt="interview">
        <br >
          Колл-центр
          <br>
          
      </nuxt-link>
      </div>
    </div>

    </div>
  
  
</div>      
      
</template>

<script>
export default {


}
</script>

<style>


.container-start{
  margin-right: 30px;
  min-height: 100vh;
  display:inline-block;
  justify-content: center;
  width: 200px;
  border-right: #ccc solid 0.2rem;
  text-align: center;
}

.vertical-menu {
  position: absolute;
  margin-top: 50px;
  margin-left: 30px;
  height: 600px;
  width: 130px;
  
}

.vertical-menu a {
    background-color: #eee;
    color: black;
    display: block;
    padding: 2px;
    text-decoration: none;
}

.vertical-menu a:hover {
    background-color: #ccc;
}

a.nuxt-link-exact-active{
background-color: #4CAF50;
    color: white;
}  

</style>
