import React from 'react'

function CheckoutProduct({id,title,image,price,rating}) {
    return (
        <div>
            <img className ='checkoutImage' src={image} />
        </div>
    )
}

export default CheckoutProduct
