import React from 'react'
// prop drilling acess data from profile
function Notification({name,pass}) {
    return (
        <div>
          <h3>my Notification</h3>
          <p>The user by name, {name}  has logged in
          with password {pass}</p>  
        </div>
    )
}

export default Notification
