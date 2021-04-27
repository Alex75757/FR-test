<template>
 
<div class="container">
  
  <Start />
   

  
  <section class="container-right">
       <br>
      
        <label class="route"> {{$nuxt.$route.name}}</label>
        <br>
         
        
        <Navbar />
        
        <label class="label">Добавить опрос </label> 
        <div class="rule" v-for="(rule,i) in rules"
        :key="rule.id"
        
        >
          <div class="right_condition">
              <div v-if="rule.type=='A'">
                <div class="and" v-if="i>0">
                {{operand}}
                </div>
                <br>
                
                <FormA v-bind:conditionN="i+1" />
                              
              </div>
             
              <div v-if="rule.type=='B'">
                <div class="and" v-if="i>0">
                {{operand}}
                </div>
                <FormB v-bind:conditionN="i+1"/>
                
              </div>
              
              <div v-if="rule.type=='C'">
                <div class="and" v-if="i>0">
                {{operand}}
                </div>
                <FormC v-bind:conditionN="i+1"/>
              </div>
          </div>

        </div>
     
    <div>
      <br>
     <b-button @click="onAddCondition" variant="outline-success" class="AddBtn">+ <br>  Нажмите, чтобы добавить условие выборки.
       <br> Все условия связываются логиеским "{{$store.state.operand}}"
     </b-button>
    </div> 
    
  </section>		
				
</div>
</template>

<script>
import AddConditionForm from './AddConditionForm.vue'
import FormA from './FormA'
export default {
  data () {
    return {
      add_type : '',
      iNumber: ''
    }
  },  
computed: {
    rules() {
      return this.$store.state.view_conditions
      
    },

    operand() {
      return this.$store.state.operand
    }
  
  },
methods : {

  onAddCondition() {
    this.$router.push("/AddCondition")
    
  }
}

}
</script>

<style>

.and{
  margin-top: 0px;
  display:inline-block;
  width: 60px;
  height: 30px;
  font: 1.5em sans-serif;
  background-color: rgb(194, 166, 166);
 
  z-index: 10;
  text-align: center
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
  width:850px;
  justify-content:center;
  }

.AddBtn{
  width: 100%;
}  
</style>
