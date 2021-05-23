import React,{useContext} from 'react'

//import routers
import {Route,NavLink} from 'react-router-dom'

// import the object context
import {cartContext} from './store/Context'

// import needed bootstrap css
import { Navbar,Nav} from 'react-bootstrap'

/* this navbar function displays things in the bar
the cart, price, listem items in the shop
*/

function BootstrapNavbar() {
    // retrive value from store created as cartcontex, hence we use
    const {totalCart} = useContext(cartContext)
    
    return (
        <div> 
            <div className='row'>
                <div className='col-md-12'>
                    <Navbar bg='info' sticky='top'>
                        <Nav className='mr-auto'>
                            {/* render the list by creating route path  and adding a navigation using link*/}
                         <Nav.Link exact activeClassName="active" href="/">Home</Nav.Link>
                         <Nav.Link activeClassName="active" href="/Phone">Phone</Nav.Link>
                         <Nav.Link activeClassName="active" href="/Watches">Watches</Nav.Link>   
                        </Nav>
                        Cart:{totalCart}
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

export default BootstrapNavbar;
