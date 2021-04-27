export const state = () => ({
      viewNumber: 0,
      operand: "И",
      conditions: [{
        id: 1,
        name: "Тип карты лояльности",
          type: "A",
          subtype:{
            name: "",
          }
        },
        {
          id: 2,
          name: "Статус карты лояльности",
            type: "A",
            subtype:{
              name: "",
            }
          },
          {    
            id: 3,
            name: "Диапазон",
              type: "B",
              subtype:{
                name: "",
              }      
          }],
          view_conditions:[]
      
})
    
export const mutations = {
      SET_OPERAND(state, payload) {
       (payload == "И") ? (state.operand = "И") : (state.operand = "ИЛИ")
        console.log(this.state.operand)
              
      },

      ADD_Condition(state, form){
        
        // on start page initialisation to be added
        // like this:
          // async asyncData({ params, redirect }) {
          //   const mountains = await fetch(
          //     'https://api.nuxtjs.dev/mountains'
          //   ).then((res) => res.json())

         

        console.log(state.conditions)
        
        state.conditions.push({
          id: Date.now(),
          name: form.name,
          type: form.type,
          subtype:{
            name: form.subtype.name,
          }
        }) 
       
        console.log(state.conditions)
        
      },

      SET_RuletoShow(state, view) {
        state.view_conditions.push(view)
        console.log(state.view_conditions)
             
      },
         
      REMOVE_RuletoShow(state, view) {
        
        console.log(view)
        debugger
        state.view_conditions.splice(view, 1)
        console.log(`delete= ${state.view_conditions}`)     
      },
      
}
    