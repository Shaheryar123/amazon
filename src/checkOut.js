import React from 'react'
import { useStateValue } from './StateProvider'

const checkOut = () =>
{
    const [{basket}] =useStateValue()
    return (
        <div className ='checkout'>
            
        </div>
    )
}

export default checkOut
