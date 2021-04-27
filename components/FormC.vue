<template>
<div >
  
  <section id="pageC">
   
  <nav1>Условие {{conditionN}}
   
  </nav1>
  <nav2 >
    Тип 1
  </nav2>
  <nav3 id="hide_me_1_formC" hidden>
    
    <mark background-color="#FFF"> ИЛИ </mark> Тип 2
  </nav3>

  <main>
        <select >
          <option value="">{{$store.state.view_conditions[conditionN-1].name}}</option>
        </select>
        <br>
        <br>
        
        <select >
          <option value="">Active</option>
          <option value="">Not Active</option>
          <option value="">Blocked</option>
          <option value="">In production</option>
        </select>
        <br>
        <br>
        <select id="hide_me_2_formC" hidden>
          <option value="">Active</option>
          <option value="">Not Active</option>
          <option value="">Blocked</option>
          <option value="">In production</option>
        </select>
  </main>
  
  <footer>
          <b-button @click="addStatus" variant="outline-success">Добавить тип</b-button>
          <b-button @click="removeCondition(conditionN-1)" variant="outline-danger">Удалить условие</b-button>
   
  </footer>
</section>

</div>  
      
      
</template>

<script>
import InterviewForm from './InterviewForm.vue'
export default {
props:{
  conditionN: Number
},

  computed: {
    rules() {
      return this.$store.state.view_conditions
      
    },

    operand() {
      return this.$store.state.operand
    }
  
  },
  
  methods: {
    removeCondition (i) {
       event.preventDefault()
        console.log(this.rules)
        debugger
      this.$store.commit('REMOVE_RuletoShow', i)
      
      this.$router.push("/Interview")
    },
  
    addStatus()  {
      document.getElementById('hide_me_1_formC').hidden = false
      document.getElementById('hide_me_2_formC').hidden = false
           
    }
  }
}
</script>



<style>



.FormC{
  margin-top: -15px;
  margin-bottom: -15px;
  position: flex;
  width: 850px;
  height: 190px;
  border: solid 1px;
  padding: 10px;
  background-color: rgb(207, 208, 240);
  border-radius: 5px;
}

#pageC {
  border: solid 1px;
  border-radius: 3px;
  display: grid;
  width: 100%;
  height: 200px;
  margin-top: -15px;
  margin-bottom: -15px;
  grid-template-areas: 
                       "nav1   main"
                       "nav2  main"
                       "nav3  main"
                       "nav3  foot";
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: 200px 1fr;
  background-color: #dcdcf7;
}

#pageC > nav1 {
  grid-area: nav1;
  padding: 15px 20px;
/*   
  background-color: #ffa08c; */
}
#pageC > nav2 {
  grid-area: nav2;
  padding: 10px 20px;
/*   
  background-color: #ffa08c; */
}

#pageC > nav3 {
  grid-area: nav3;
  padding: 10px 20px;
/*   
  background-color: #ffa08c; */
}

#pageC > main {
  grid-area: main;
  padding: 20px 90px;
  text-align: left;
  /* background-color: #ffff64; */
}

#pageC > footer {
  grid-area: foot;
  margin-left: 90px;
  width: 500px;  
  margin-block: 10px;
  display: inline-flex;
  justify-content:space-between;
}
</style>
