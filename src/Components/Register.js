import Container from '@material-ui/core/Container';
import { Alert, AlertTitle } from '@material-ui/lab';
import {Link } from 'react-router-dom';




function  Register () {




return <>

<Container maxWidth="sm" >    
          <Alert severity="error">
          <AlertTitle><strong>Error</strong></AlertTitle>
          <strong>Requested Path Not Exist Please <Link to ="/">Click here</Link> to go home! </strong> 
        </Alert>
  </Container>

</>


}

export default Register;
