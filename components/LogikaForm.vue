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
        <label class="label"></label>  
        <Navbar />
   
			
				
  
    <b-form >
      <div>
          <b-form-group label="Individual radios" v-slot="{ ariaDescribedby }">
            <b-form-radio v-model="form.selected" :aria-describedby="ariaDescribedby" name="some-radios" value="И">Логическое И</b-form-radio>
            <b-form-radio v-model="form.selected" :aria-describedby="ariaDescribedby" name="some-radios" value="ИЛИ">Логическое ИЛИ</b-form-radio>
          </b-form-group>

          <div class="mt-3">Selected: <strong>{{ form.selected }}</strong></div>
          <b-button @click="onSubmit" variant="outline-success">Выбрать условие</b-button>
             
      </div>

      
        
    </b-form>

     

     <!-- <div>
         <br>
          <b-button variant="outline-success">Добавить диапазон</b-button>
          <b-button variant="outline-danger">Удалить условие</b-button>
      </div> -->
			
  </div>		
				
</div>
</template>

<script>
export default {
 data() {
      return {
        form: {
            selected: '',
        }
      }
    },
  computed: {
    operand() {
      return this.$store.state.operand
    }
  },
  

  methods: {
    onSubmit (event) {
      event.preventDefault()
      console.log(this.form.selected)
      this.$store.commit('SET_OPERAND', this.form.selected)
      console.log(this.operand)
      this.$router.push("/Interview")
    }    
  }
 
}  
</script>



<style>

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
