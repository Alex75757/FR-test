export const store = () => ({
    state: {
      operand: "И",
      
    },
    getters: {
        // OPERAND: state => {
        //   return state.operand;
        // },
      },
})
    
export const mutations = {
      SET_OPERAND(state, payload) {
       (payload == "И") ? (state.operand = "И") : (state.operand = "ИЛИ")
        console.log(this.state.operand)
              
      }
    }