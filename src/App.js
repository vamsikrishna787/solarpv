
import Grid from '@material-ui/core/Grid';
import Topmenu from './Components/Topmenu';
import Leftmenu from './Components/Leftmenu';
import Rightcontent from './Components/Rightcontent';
import Login from './Components/Login';
import Register from './Components/Register';
import Submenu from './Components/Submenu';
import Home from './Components/Home';
import {Route,Switch} from 'react-router-dom';


function App() {

 
  
  
  return <>
 
    <Grid container >
         <Grid item xs={12}>
              <Topmenu/>
          </Grid>

          <Grid item xs={12} style={{margin:"2px"}}>
              <Submenu/>
          </Grid>


    <Grid item xs={2}>
            <Leftmenu/>
    </Grid>


    <Grid item xs={8} >


         <Switch>

         <Route path = "/" exact>
            <Home/>
          </Route>

              <Route path = "/login" exact>
              <Login/>
              </Route>

               <Route path = "/register" exact>
                    <Register/>
                </Route>

         </Switch>


  
    </Grid>

    <Grid item xs={2}>
             <Rightcontent/>
    </Grid>


    </Grid>

  </>;
}

export default App;
