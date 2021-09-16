export const initialState = {
  basket: [{
    id:12,
                    title:'Fresh Apple from Farms China Impoted Big Size (prize is for per 10 KG) - W2122FGF',
                price:7,
                rating:4,
                    img:'https://pngimg.com/uploads/apple/apple_PNG12490.png'
  },
  {
    id:12,
                    title:'Fresh Apple from Farms China Impoted Big Size (prize is for per 10 KG) - W2122FGF',
                price:7,
                rating:4,
                    img:'https://pngimg.com/uploads/apple/apple_PNG12490.png'
    },
    {
      id:12,
                      title:'Fresh Apple from Farms China Impoted Big Size (prize is for per 10 KG) - W2122FGF',
                  price:7,
                  rating:4,
                      img:'https://pngimg.com/uploads/apple/apple_PNG12490.png'
    }],
	user:null

}

const  reducer =(state,action)=>{
   switch(action.type){
     case 'ADDTOBASKET':
       return {
         ...state, basket:[...state.basket,action.item]
      }
     case 'REMOVE FROM BASKET':
       let newBasket = [state.basket]
       const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
      if(index>=0){ 
         newBasket.splice(index, 1)
      } else {
        console.log("Cant Remove Product")
       }
       
       return { ...state , basket:newBasket}
     default: 
	return state
}}
export default reducer;
