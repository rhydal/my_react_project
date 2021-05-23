import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import phone from './phone.jpg'
// import Items from './Items'

// import the object context created in the context store
import {cartContext} from './store/Context'



function Phone() {
    let history=useHistory()

    // function to change path on  navigation click
    const changeCart=()=>{
        history.push('/Watches') //navigate to he watches page on click
    }

    // retrive value from store created as cartcontex, hence we use
    const {totalCart,addToCart,removeFromCart} = useContext(cartContext)
    
    return (
        <div>
            {/* add phone image */}
         <img src={phone}></img>
            
            {/* add button for cart count update */}
         <button type='button'className={'btn'}  onClick={addToCart}>Add Phone to Cart</button>
            
            {/* remove item from cart */}
         <button onClick={removeFromCart}>Remove from Cart</button>

            {/* add button for navigation */}
        <button onClick={changeCart}><a href='#'>navigate to watche page</a></button>
        </div>
    )
}

export default Phone
