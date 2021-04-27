<template>
<div>
  
  <div class="container">
    
    <Start />

    <div class="container-right">
      <div v-if="conditions.length">
        <h1>Выберите условие из имеющихся:</h1>
        <select id="Select"
         v-model="sel"
         @click="isSelected(sel)"
        >
          
          <option 
          v-for ="(value) in conditions"
                    :key="value.id"
                   v-bind:value="value.id"
                     
          > {{value.name}}
        
          </option>
          </select>
          <br>
          <span >Выбрано: {{ sel }}</span>	
      </div>
      <div v-else>
        <h1>Условий нет, создайте или загрузите</h1>
        <Navbar />
      </div>
          
    </div>
</div>

</div>  
      
      
</template>

<script>
export default {
  data () {
    return {
      sel:''
      
    }
  },
  computed: {
    conditions () {
      return this.$store.state.conditions
    }
  },

  methods: {
    isSelected (value) {
    if (value){  
    console.log(`view_cond= ${value}`)
    console.log(this.$store.state.conditions.filter((t) => t.id===value))
    let a = this.$store.state.conditions.filter((t) => t.id===value)
    console.log(a)
    this.$store.commit('SET_RuletoShow', a[0])

     console.log("gjrf")
     debugger
     this.$router.push("/Interview")}
     
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
