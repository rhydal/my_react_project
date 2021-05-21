
import React from 'react'
import './App.css'
// import routers
import {BrowserRouter,Route,NavLink, Switch} from 'react-router-dom'
// import components
import Dashboard from './Dashboard';
import Notification from './Notification';
import SignIn from './SignIn';
import Profile from './Profile';
import Notfound from './Notfound';


function App() {
  return (
    <BrowserRouter>
          <>
           {/* creat route path  and adding a navigation using link */}
           <ul>
              <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
              <li><NavLink activeClassName="active" to="/SignIn">SignIn</NavLink></li>
              <li><NavLink activeClassName="active" to="/Dashboard">Dashboard</NavLink></li>
              <li><NavLink activeClassName="active" to="/Notification">Notification</NavLink></li>
              <li><NavLink activeClassName="active" to="/Profile">Profile</NavLink></li>
           </ul>
           <Switch>
             {/* at exact local path render welcome message to the user */}
             <Route exact path="/" component ={ Home} />
             <Route path="/SignIn" component={SignIn}/>
             <Route path="/Profile" component={Profile}/>
             <Route path="/Dashboard" component={Dashboard}/>
             <Route path="/Notification" component={Notification}/>
             <Route component={Notfound} /> catches every path that doesnt exit and redirect to 404 page
             <Route render={()=><h1>404: page not found</h1>}/>
           </Switch>
          </>
    </BrowserRouter>
  );
}

const Home=()=>(
  <h1>Welcome!</h1>
)
export default App;
