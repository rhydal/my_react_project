import React from 'react'
import ReactDOM from 'react-dom'

import './signin.css';
import {Route, useHistory} from 'react-router-dom'
import {useState, useRef} from 'react'
import Dashboard from './Dashboard'

// example of Prop Drilling task: pass data from signin-dashboard-profile-notification

/* 
signin renders a form and display the from input on d dashboard componet
the dashboard then pass on data to profilr
and profile pass on to notification
*/
function SignIn() {
    const history=useHistory();

    const [userName, setuserName] = useState();
    const [userPass, setuserPass] = useState()
    
    // // handlechange for username
    // const handleUsername=(e)=>{
    //     e.preventDefault();
    //     const name=setuserName(e.target.value);
    //     // onchange update username
    //     // setuserName(name);
    // }
    // //  handlechage for password
    // const handlePassword=(e)=>{
    //     e.preventDefault();
    //     const pass=setuserPass(e.target.value);
    //     // onchange update username
    //     // setuserPass(pass);
    // }
   

    // login validation on click submit
   const handleClick= (e) => {
       e.preventDefault()
        // acces form inputs  
        const formData = {
             name: setuserName(),
             pass: setuserPass()
        }
     if (formData.name === "" && formData.pass ==="") {
      alert("Please enter username and password to sign in!");
     } 
     else if (formData.name === "") {
      alert("Please enter username to sign in!");
     } 
     else if (formData.pass === "") {
      alert("Please enter password to sign in!");
     } 
     else {
      history.push("/Dashboard");
     }
    };

  
   return(
        <>
           {/* task 1: create form  and on submit display inputs */}
          <form>
                <input 
                  type="text" 
                  value={userName} 
                  placeholder="username" 
                //   onChange={handleUsername} 
                />
              <input 
              type="password"
              value={userPass} 
              placeholder="password"
            //   onChange={handlePassword}  
              />
        
              <label>
              <input type="checkbox"  />
                 Remember me
              </label>

             <button type="submit" className="myButton" onClick={handleClick}>Login</button>
            </form>
            
            {/* task2: pass input data to dashboard */}
            {/* we create props called name and assign it Esi ,we can call it from the dash comp*/}
            <Dashboard name='esi' pass='756'/>
        </>
    );
}


export default SignIn;


  
    // ///////////////////////////////////////
    // //  AIT 1 to acess inputs
    //   const nameEl = React.useRef(null);
    //   const passwordEl = React.useRef(null);
    //   const rememberMeEl = React.useRef(null);
    //    //  onsubmit function handle
    //   const handleSubmit = e => {
    //      e.preventDefault();
    //       // acces form inputs  
    //        const formData = {
    //           username: nameEl.current.value,
    //          password: passwordEl.current.value,
    //          rememberMe: rememberMeEl.current.checked,
    //         }
    //      console.log(formDate);
    //     }
    //     // task 1: create form  and on submit display inputs
    // return(
    //     <>
    //        <form onSubmit={handleSubmit}>
    //          <input type="text" placeholder="username" ref={nameEl} />
    //          <input type="password" placeholder="password" ref={passwordEl} />
        
    //          <label>
    //          <input type="checkbox" ref={rememberMeEl} />
    //              Remember me
    //   </label>

    //          <button type="submit" className="myButton">Login</button>
    //        </form>
    //     </>
    // );