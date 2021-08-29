import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import {Link} from 'react-router-dom';

export default function Leftmenu() {
  
  return <>
    <Paper>
      <MenuList>
       
       <MenuItem component={Link} to={'/login'}>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
      <Typography variant="inherit">Login</Typography>
        </MenuItem>



        <MenuItem component={Link} to={'/register'}>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Register</Typography>
        </MenuItem>


        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            A very long text that overflows
          </Typography>
        </MenuItem>





        
      </MenuList>
    </Paper>
  </>;
}
