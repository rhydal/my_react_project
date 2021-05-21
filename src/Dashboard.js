import React from 'react'
import Profile from './Profile'

//prop drilling...pass data to profile
function Dashboard({name,pass}) {
    return (
        <>
        <h3>my dashboard</h3>
        <p>My username is:{name}<br/>
         password:{pass}</p>
        <Profile name={name} pass={pass} />
        </>
    )
}

export default Dashboard
