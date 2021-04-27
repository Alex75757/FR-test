<template >

  <div class="MyNavBar">

  <ul>
  <li>
    <nuxt-link   to="/">
      Параметры
    </nuxt-link>
  </li>
  <li>
    <nuxt-link   to="/">
      Вопросы
    </nuxt-link>
  </li>
  <li>
    <nuxt-link   to="/Logika">
      Логика
    </nuxt-link>
  </li>
  <li>
    <nuxt-link   to="/Conditions">
      Условия
    </nuxt-link>
  </li>
  <li>
    <nuxt-link class="active"  to="/">
              Респонденты
     </nuxt-link>
  </li>
</ul>  
    
    
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style >
li{
  
  display: inline-block;
  width: 150px;
  list-style-type: none;

}

 
  .MyNavBar{
  /* Desktop - 2 */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  }  

  a:active{
    text-decoration-line: underline;
  }


</style>