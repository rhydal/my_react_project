import React from 'react'

// import routers
import {BrowserRouter,Route,Switch} from 'react-router-dom'

// import components
import Watches from './Watches';
import Phone from './Phone';
import BootstrapNavbar from './BootstrapNavbar';
import AppComp from './Assignment2/AppComp';


function App() {
  return (
    <BrowserRouter>
      <>  
        <BootstrapNavbar/>  {/* navigation bar showing the nav */}
        
        <Switch>
          {/* at exact local path render welcome message to the user */}
          <Route exact path="/" component ={ Home} />
          <Route path="/Phone" component={Phone}/>
          <Route path="/Watches" component={Watches}/>
          <Route path='./Assignment2' component={AppComp}/>
          <Route render={()=><h1>404: page not found</h1>}/>
        </Switch>

      </>
    </BrowserRouter>
  );
}

const Home=()=>(
  <>
  <h1>Welcome to Jumai</h1>
  </>
)


export default App;