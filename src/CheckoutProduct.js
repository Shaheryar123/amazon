import './checkOut.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating })
{
    const [{basket},dispatch] =useStateValue()
    const removeItem=()=>{
        dispatch({
            type: "REMOVE FROM BASKET",
            id: id,
            
        })
        console.log(basket)
    }
    
    return (
        
        <div>
        <div className ='checkoutProduct'>
            <img className='checkoutImage' src={image} />
          <div style ={{ marginLeft:'8px',display:'flex' , flexDirection:'column'}}>
                <p className='checkoutTitle'>{title}</p>
            <small style={{fontSize:'20px'}}>$</small>
                <strong style={{fontSize:'20px'}}>{price}</strong>
                <div style ={{display:'flex'}}> {
                    Array(rating).fill().map((_) => (
                        <p > &#x2B50; </p>
                    ))
                    }
                         
                    </div>
                    <button style={{ marginTop:'20px' ,maxWidth:'100px' ,backgroundColor: 'orange', border: '1px solid', cursor: 'pointer' }}
                onClick = {removeItem}
                >Remove Item</button>
            </div>
        
               
            </div>
            <div>
                
            </div>
            </div>
    )
}

export default CheckoutProduct
