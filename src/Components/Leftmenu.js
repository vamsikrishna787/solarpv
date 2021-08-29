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
import Menu from '@material-ui/core/Menu';



export default function Leftmenu() {
  


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  const [anchorE2, setAnchorE2] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };



  const [anchorE3, setAnchorE3] = React.useState(null);

  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorE3(null);
  };
  



  return <>
    <Paper>
     
      <MenuList>
       
      <MenuItem component={Link} to={'/'}>
          <ListItemIcon> <SendIcon fontSize="small" /> </ListItemIcon>
          <Typography variant="inherit">Home</Typography>
       </MenuItem>


       <MenuItem component={Link} to={'/login'}>
          <ListItemIcon> <SendIcon fontSize="small" /> </ListItemIcon>
          <Typography variant="inherit">Login</Typography>
       </MenuItem>



        <MenuItem component={Link} to={'/register'}>
          <ListItemIcon> <PriorityHighIcon fontSize="small" /> </ListItemIcon>
          <Typography variant="inherit">Register</Typography>
        </MenuItem>


        <MenuItem>
          <ListItemIcon> <DraftsIcon fontSize="small" /> </ListItemIcon>
          <Typography variant="inherit" noWrap>A very long text that overflows </Typography>
        </MenuItem>

       
       
    <MenuItem onClick={handleClick}> 
         <ListItemIcon> <DraftsIcon fontSize="small" /> </ListItemIcon>
          <Typography variant="inherit" noWrap  > PV Module </Typography>
    </MenuItem>


      <Menu  anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose} component={Link} to={'/login'}>   <ListItemIcon> <DraftsIcon fontSize="small" /> </ListItemIcon> <Typography variant="inherit" noWrap>Testing & Certification </Typography> </MenuItem>
        <MenuItem onClick={handleClose}>   <ListItemIcon> <DraftsIcon fontSize="small" /> </ListItemIcon> <Typography variant="inherit" noWrap>PV Rating </Typography> </MenuItem>
      </Menu>


      <MenuItem onClick={handleClick2}> 
         <ListItemIcon> <DraftsIcon fontSize="small" /> </ListItemIcon>
          <Typography variant="inherit" noWrap  > PV System Perfomance </Typography>
    </MenuItem>
      <Menu  anchorEl={anchorE2} keepMounted open={Boolean(anchorE2)} onClose={handleClose2}>
        <MenuItem onClick={handleClose2}>   <ListItemIcon> <DraftsIcon fontSize="small" /> </ListItemIcon> <Typography variant="inherit" noWrap>Monitoring  & Inspection </Typography> </MenuItem>
        <MenuItem onClick={handleClose2}>   <ListItemIcon> <DraftsIcon fontSize="small" /> </ListItemIcon> <Typography variant="inherit" noWrap>Perfomance Analysis </Typography> </MenuItem>
        <MenuItem onClick={handleClose2}>   <ListItemIcon> <DraftsIcon fontSize="small" /> </ListItemIcon> <Typography variant="inherit" noWrap>Compare system </Typography> </MenuItem>
        <MenuItem onClick={handleClose2}>   <ListItemIcon> <DraftsIcon fontSize="small" /> </ListItemIcon> <Typography variant="inherit" noWrap>Certification </Typography> </MenuItem>
      </Menu>


      <MenuItem onClick={handleClick3}> 
         <ListItemIcon> <DraftsIcon fontSize="small" /> </ListItemIcon>
          <Typography variant="inherit" noWrap  > Data Analytics </Typography>
    </MenuItem>
      <Menu  anchorEl={anchorE3} keepMounted open={Boolean(anchorE3)} onClose={handleClose3}>
        <MenuItem onClick={handleClose3}>   <ListItemIcon> <DraftsIcon fontSize="small" /> </ListItemIcon> <Typography variant="inherit" noWrap>Module lifetime prediction </Typography> </MenuItem>
        <MenuItem onClick={handleClose3}>   <ListItemIcon> <DraftsIcon fontSize="small" /> </ListItemIcon> <Typography variant="inherit" noWrap>Energy Prediction </Typography> </MenuItem>
      </Menu>



      <MenuItem>
          <ListItemIcon> <DraftsIcon fontSize="small" /> </ListItemIcon>
          <Typography variant="inherit" noWrap>Cybersecurity and smart Grid Technology </Typography>
        </MenuItem>

  

        <MenuItem>
          <ListItemIcon> <DraftsIcon fontSize="small" /> </ListItemIcon>
          <Typography variant="inherit" noWrap>Solar PV University </Typography>
        </MenuItem>


      </MenuList>
    </Paper>
  </>;
}
