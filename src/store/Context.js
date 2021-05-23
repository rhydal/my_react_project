import {createContext,useState} from 'react'

// import items database
// import Items from './Items'


// assign context object to variable
const cartContext=createContext()
// console.log(cartContext)--//has some properties including provider

// create the function provider which acept props
function CartProvider(props) {

 // create all needed context common/needed to all componnts of our application
    
   // 1st context creation : we declare a state variable to store carts count of item
    const [totalCart, settotalCart] = useState([]) //set initial count to 0

    //2nd context  creation: create a function to update counting upon adding up cart button click
    function addToCart(){
        let value=totalCart   //set initial total cart to variable value
        value++
        settotalCart(value)  //update the variable by addtion of 1 on click
    }

    // 3rd context: function to remove item from cart w.r.t item index using filter method
    function removeFromCart(){
        let value=totalCart
        value=value-1
        if (value<0) {
            return
        } 
        else {
           return settotalCart(value) 
           
        }
    }



    return(
        // the provider component pass values in store to all pages in application
        // we need to provide the totalcart,addTocart to the accesbible children
        <cartContext.Provider value={{totalCart,addToCart,removeFromCart}}>  
            {
                // make value accesible to all children (phone,watches,navbar)
                props.children
            }
        </cartContext.Provider>
    )
}

export  {cartContext,CartProvider}
