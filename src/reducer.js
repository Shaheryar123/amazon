export const initialState = {
	basket:[],
	user:null

}

const  reducer =(state,action)=>{
   switch(action.type){
     case 'ADDTOBASKET':
       return {
         ...state, basket:[...state.basket,action.item]
      }
     case 'REMOVEFROMBASKET':
       return { state }
     default:
	return state
}}
export default reducer;
