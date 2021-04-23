<template>
 
<div class="container">
  
  <Start />
   

  
  <div class="container-right">
       <b-form-input
          id="input-formatter"
          v-model="text1"
          placeholder="Поиск по системе"
          
          :formatter="formatter"
        > </b-form-input>
      
        <label class="route"> {{$nuxt.$route.name}}</label>
        <br>
        <label class="label">Добавить опрос </label>  
        
        <Navbar />
    <!-- <div class="form-1">
     
          <label class="label-1">Условие 1</label>
          <div>
            <input class="form__field" 
                  type="text"
                  value=" Возраст респондента">
            <div class="dropdown">
                <img class="dropdown__element " src="../assets/element.svg" alt="element">

            </div>
          </div>
          <label class="label-2">Диапазон 1</label>

          <label class="label-3">от</label>
          <label class="label-4">до</label>
          <input class="form-1__field form-1__field--short1" 
                  type="text"
                  value="">		
          <input class="form-1__field form-1__field--short2" 
                  type="text"
                  value="">		
            <p class="label-5"> или Диапазон 2</p>

            <label class="label-6">от</label>
            <label class="label-7">до</label>
            <input class="form-1__field form-1__field--short3" 
                  type="text"
                  value="">		
            <input class="form-1__field form-1__field--short4" 
                  type="text"
                  value="">	
            <div>  
            <br>
            <br>
            <br>
              <b-button variant="outline-success">Добавить диапазон</b-button>
              <b-button variant="outline-danger">Удалить условие</b-button>
            </div>

    </div>	 -->
			
				
  

    <div class="and">
      {{operand}}
    </div> 

    <div class="form-2">
     <br>
      <label class="label-1">Условие 2</label>
      <div>
        <input class="form__field" 
              type="text"
              value=" Тип карты лояльности">
        <!-- <div class="dropdown">
						<img class="dropdown__element " src="../assets/element.svg" alt="element">
				</div> -->
      </div>
        <!-- <div class="dropdown2">
						<img class="dropdown__element" src="../assets/element.svg" alt="element">
				</div>
      <label class="label-8">Тип</label> -->

      
			<input class="form__field" 
              type="text"
              value="Gold">		
			
			 <div>  
         <br>
          <b-button variant="outline-success">Добавить диапазон</b-button>
          <b-button variant="outline-danger">Удалить условие</b-button>
      </div>
		</div>	
  </div>		
				
</div>
</template>

<script>
export default {
computed: {
    operand() {
      return this.$store.state.operand
    }
  },


}
</script>



<style>

.and{
  position: absolute;
  display:inline-block;
  width: 60px;
  height: 30px;
  top: 335px;
  left: 470px;
  font: 1.5em sans-serif;
  background-color: rgb(194, 166, 166);
 
  z-index: 10;
  text-align: center
}

.dropdown{
  position: relative;
  left: 170px;
  top: -25px;
}

.dropdown2{
  position: absolute;
  left: 570px;
  top: 90px;
}

.dropdown__element{
position: relative;
/* left: 43.33%;
right: 45.33%;
top: 35.67%;
bottom: 37.5%; */
}
.caption{
  position: relative;
}
.form-1{
  margin-top: 20px;
  
  position: absolute;
  width: 800px;
  height: 250px;
  left: 420px;
  top: 90px;
  border: solid 1px;
  padding: 10px;
  background-color: bisque;
}

.form-2{
  position: absolute;
  width: 800px;
  height: 250px;
  left: 420px;
  top: 350px;
  border: solid 1px;
  padding: 10px;
  background-color: rgb(207, 208, 240);
}

.form__field{
  width: 380px;
  height: 30px;
}

.form-1__field--short1{
  position: relative;
  width:  80px;
  height: 30px;
  left: -80px;
  top: 5px; 
}

.form-1__field--short2{
  position: relative;
  width:  80px;
  height: 30px;
  left: 40px;
  top: 5px; 
}

.label-1{
 position: absolute;
  width: 80px;
  height: 30px;
  left: 50px; 
  color: brown;
}

.label-2{
 position: absolute;
  width: 90px;
  height: 30px;
  left: 50px;
  top: 70px; 
  
}

.label-3{
 position: absolute;
  width: 30px;
  height: 30px;
  left: 200px;
  top: 70px; 
}
.label-4{
 position: absolute;
  width: 30px;
  height: 30px;
  left: 400px;
  top: 70px; 
}

.label-5{
  position: absolute;
  width: 120px;
  height: 30px;
  left: 50px;
  top: 120px; 
}
.label-6{
  position: absolute;
  width: 90px;
  height: 30px;
  left: 170px;
  top: 120px; 
}
.form-1__field--short3{
  position: absolute;
  width:  80px;
  height: 30px;
  left: 235px;
  top: 120px; 
}

.label-7{
  position: absolute;
  width: 90px;
  height: 30px;
  left: 370px;
  top: 120px; 
}
.form-1__field--short4{
  position: absolute;
  width:  80px;
  height: 30px;
  left: 440px;
  top: 120px;
}

.label-8{
  position: absolute;
  width: 90px;
  height: 30px;
  left: 20px;
  top: 90px; 
}

.container{
  display: flex;
  margin: 0 0;
  padding: 0 0;
}

.container-right{
  display: inline-block;
  margin: 0 auto;
  min-height: 100vh;
  width:400rem;
  justify-content: left;
  }
</style>
