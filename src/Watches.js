import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import watch from './watch.jpg'

// import the object context
import {cartContext} from './store/Context'

function Watches() {
    let history=useHistory();

     // function to change path on  navigation click
     const changeCart=()=>{
        history.push('/Phone')
    }

    //retrive value from store created as cartcontex, hence we use
    const {totalCart,addToCart,removeFromCart} = useContext(cartContext)
    

    return (
        <div>
            <img src={watch}></img>
             
            {/* add item to cart */}
         <button onClick={addToCart}>Add Watch to Cart</button>
            
            {/* remove item from cart */}
         <button onClick={removeFromCart}>Remove from Cart</button>

         <button onClick={changeCart}><a href='#'>navigate to phone page</a></button>
        </div>
    )
}

export default Watches
