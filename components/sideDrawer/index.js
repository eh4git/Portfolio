import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'
import {
    Drawer,
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflow: 'hidden',
    height: '500px'
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
  },
}));

export default function SideDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
      <Drawer
        onMouseEnter={handleDrawer}
        onMouseLeave={handleDrawer}
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
        <List>
            <ListItem button>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={"Projects"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={"Contact"} />
            </ListItem>
        </List>
      </Drawer>
  );
}
SideDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
