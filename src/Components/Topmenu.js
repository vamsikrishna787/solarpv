import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Topmenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}

<Avatar alt="Remy Sharp" src="https://www.eqmagpro.com/wp-content/uploads/2019/04/Bolivia-joins-International-Solar-Alliance.jpg" className={classes.large} />

          <Typography variant="h6" className={classes.title}>
            Solar PV<br/>
            Research & Development
          </Typography>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Contact Us</Button>
          <Button color="inherit">Social Media links</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
