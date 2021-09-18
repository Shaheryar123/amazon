import React from 'react'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import './subtotal.css'
function SubTotal()
{
    const [{basket}] =useStateValue()
    return (
        <div className ='subtotal'  >
            <p>
            Subtotal ({basket.length} items): ${getBasketTotal(basket)}
            </p>
            <button className ='subtotalButton'>Place Order</button>
        </div>
    )
}

export default SubTotal
