<template>
<div>
  <section id="pageB">
   
  <nav1>Условие {{conditionN}}
   
  </nav1>
  <nav2 >
    Диапазон 1
  </nav2>
  <nav3 id="hide_me_1_formB" hidden>
    
    <mark background-color="#FFF"> ИЛИ </mark> Диапазон 2
  </nav3>

  <main>
        <select >
          <option value="">{{$store.state.view_conditions[conditionN-1].name}}</option>
        </select>
        <br>
        <br>
        <label for="">от</label>
        <input class="my_input" type="text">
        <label for="">до</label>
        <input class="my_input" type="text">
        <br>
        
        <div id="hide_me_2_formB" hidden>
          <label for="">от</label>
          <input class="my_input" type="text">
          <label for="">до</label>
          <input class="my_input" type="text">
        </div>
        
  </main>
  
  <footer>
          <b-button @click="addStatus" variant="outline-success">Добавить диапазон</b-button>
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
      document.getElementById('hide_me_1_formB').hidden = false
      document.getElementById('hide_me_2_formB').hidden = false
    }
  }
}
</script>



<style>



.FormA{
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

#pageB {
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
  background-color: #ffff64;
}

#pageB > nav1 {
  grid-area: nav1;
  padding: 15px 20px;
/*   
  background-color: #ffa08c; */
}
#pageB > nav2 {
  grid-area: nav2;
  padding: 10px 20px;
/*   
  background-color: #ffa08c; */
}

#pageB > nav3 {
  grid-area: nav3;
  padding: 10px 20px;
/*   
  background-color: #ffa08c; */
}

#pageB > main {
  grid-area: main;
  padding: 20px 90px;
  text-align: left;
 
}

#pageB > footer {
  grid-area: foot;
  margin-left: 90px;
  width: 500px;
  margin-block: 10px;
  display: inline-flex;
  justify-content:space-between;
}

.my_input[type="text"] {
    border: 1px solid #cccccc; /*//цвет рамки */
   border-radius: 3px;/* //закругление углов (общее)*/
   -webkit-border-radius: 3px; /*//закругление углов (Google Chrome)*/
   -moz-border-radius: 3px; /* //закругление углов (FireFox)*/
   -khtml-border-radius: 3px; /*//закругление углов (Safari)*/
   background: #ffffff !important; /*// желательно прописывать, так как в Chrome при сохранных данных оно может быть желтым*/
   outline: none; /* // удаляет обводку в браузерах хром(желтая) и сафари(синяя)*/
   height: 24px; /*// высота на свое усмотрение*/
   width: 40px; /*// ширина на свое усмотрение*/
   color: #cccccc;/* //цвет шрифта в обычном состоянии*/
   font-size: 11px;/* // Размер шрифта*/
   font-family: Tahoma; /*// Стиль шрифта*/
}
</style>
