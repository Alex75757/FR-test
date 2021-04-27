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
          <b-form-checkbox-group >
            <b-form-checkbox v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="И">Условие 1</b-form-checkbox>
            <b-form-checkbox v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="ИЛИ">Условие 2</b-form-checkbox>
          </b-form-checkbox-group>

          <div class="mt-3">Выбрано: <strong>{{ selected }}</strong></div>
          <!-- <b-button @click="onSubmit" variant="outline-success">Выбрать условие</b-button> -->
             
      </div>

    </b-form >

    <b-form >
      
      
      <b-form-group>
        <b-form-input
          
          v-model="form.name"
          placeholder="название условия"
          type="text"
          required
          @blur="handleBlurName"
        />

        <b-form-invalid-feedback :state="validationName">
          {{nameError}}
        </b-form-invalid-feedback>
      </b-form-group>

      <div>
    
    <b-form-group label="Вид условия">
      <b-form-radio required v-model="form.type"  name="some-radios" value="A">Статус (активна/неактивна)</b-form-radio>
      <b-form-radio required v-model="form.type"  name="some-radios" value="B">Диапазон (от и до)</b-form-radio>
       <b-form-radio required v-model="form.type" name="some-radios" value="C">Тип (список)</b-form-radio>
    
       
        </b-form-group>
    <div class="mt-3">Выбрано: <strong>{{ form.type }}</strong></div>
  </div>
    <div v-if="form.type == 'C'">
            <b-form-input
          
            v-model="form.subtype.name"
            placeholder="название вида условия"
            type="text"
            />
        </div>      
    <br>
    <br>
    <b-button @click="onSubmit"  type="submit"  variant="outline-primary">
        Сохранить условие
      </b-button>
      
      
   
      
        
    </b-form>
		
  </div>		
				
</div>
</template>

<script>
export default {
 data() {
      return {
        form:{
            name: '',
            type: '',
            subtype:{
                name: '',
            }
        },
        nameError: '',
        selected: '',
        
      }
    },
 computed: {
    validationName () {
      return this.form.name.length >= 4 && this.form.name.length <= 100
    }
 },
  methods: {

     handleBlurName () {
      this.nameError = "Введиите название от 4 до 100 символов"
    },

    onSubmit (event) {
      event.preventDefault()
      console.log(this.form)
      if (this.validationName) {
      this.$store.commit('ADD_Condition', this.form)
      this.form.name = '',
      this.form.subtype.name = '',
      this.form.type = '',
      this.$router.push("/Interview")
      }
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
