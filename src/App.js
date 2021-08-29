
import Grid from '@material-ui/core/Grid';
import Topmenu from './Components/Topmenu';
import Leftmenu from './Components/Leftmenu';
import Rightcontent from './Components/Rightcontent';
import Login from './Components/Login';



function App() {

 
  
  
  return <>
 
    <Grid container >
         <Grid item xs={12}>
              <Topmenu/>
          </Grid>


    <Grid item xs={2}>
            <Leftmenu/>
    </Grid>


    <Grid item xs={8}>
            <Login/>
    </Grid>

    <Grid item xs={2}>
             <Rightcontent/>
    </Grid>


    </Grid>


  </>;
}

export default App;
