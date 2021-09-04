import React from 'react'
import './Product.css'
const Product = ({id,title,price, rating, img}) => {
    return (
        <div className = 'product'>
            <div className = 'productInfo'>
                <p>{title}</p>
                <p className = 'productPrice'></p>
            <small>$</small>
            <strong>{price}</strong>
            <div className = 'productRating'> 
                {
                    Array(rating).fill().map((_) => (
                        <p> &#x2B50; </p>
                    ))
                }
            </div>
            </div>
            
            <img src={img} />
            <button>Add to Basket</button>
        </div>

    )
}

export default Product
