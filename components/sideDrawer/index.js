import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import HomeIcon from '@material-ui/icons/Home';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
import DrawerThemeProvider from './drawerThemeProvider'

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  list: {

  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflow: 'hidden',
    justifyContent: "center"
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    justifyContent: "center"
  },
}));

export default function SideDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DrawerThemeProvider>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div style={{ border: "5px solid red", borderLeft: "none", borderRadius: 10 }}>
            <List
              onMouseEnter={handleDrawer}
              onMouseLeave={handleDrawer}
              className={classes.list}
            >
              <ListItem button>
                <ListItemIcon><HomeIcon fontSize="large"/></ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
              <ListItem button>
                <ListItemIcon><EmojiPeopleIcon fontSize="large"/></ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItem>
              <ListItem button>
                <ListItemIcon><ImportantDevicesIcon fontSize="large"/></ListItemIcon>
                <ListItemText primary={"Projects"} />
              </ListItem>
              <ListItem button>
                <ListItemIcon><MailIcon fontSize="large"/></ListItemIcon>
                <ListItemText primary={"Contact"} />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </DrawerThemeProvider>
    </div>
  );
}
SideDrawer.propTypes = {
  window: PropTypes.func,
};
