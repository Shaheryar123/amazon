import React from 'react'
import { useStateValue } from './StateProvider'
import './checkOut.css'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'
const CheckOut = () =>
{
    const [{ basket }] = useStateValue()
    
    return (
        
        <div className='checkout'>
            <div className='checkoutLeft'>
            <img className ='checkoutBanner'  src ='https://image.shutterstock.com/image-vector/sale-banner-template-vector-illustrations-600w-1922252276.jpg' />
            {basket?.length === 0 ? (
                <div>
                 <h1>Your Basket is Empty</h1>
                 </div>)
                : 
                <div>
                    {basket?.map(item =>
                    (<CheckoutProduct
                        id={item.id}
                        image={item.img}
                        title={item.title}
                        rating={item.rating}
                        price ={item.price}
                    />
                        
                    
                    ))}
                    </div>
                    
                }
                </div>
            {
                basket.length >= 0 && (
                    <div className="checkoutRight">
                        <SubTotal />
                    </div>
                )
        }
        </div>
    )
}

export default CheckOut
