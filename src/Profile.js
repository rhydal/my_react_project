import React from 'react'
import { Link} from 'react-router-dom'
import Notification from './Notification';

// prop drilling: pass data to notification
function Profile({name,pass}) {
    // const {name}=useParams();
    
    return (
        <div>
        <h3>my Profile</h3>
        <p>Click to acess<Link to='/profile'> {name}'s Profile</Link></p>
        <Notification name={name} pass={pass}/>
        </div>
    )
}

export default Profile
