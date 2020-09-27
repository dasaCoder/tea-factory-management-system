import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AddAccount from '../addAccount/addAccount';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function SideBar() {
  const classes = useStyles();
  const [selectedScreen, setSelectedScreen] = React.useState('addAccount');

  function toggleScreen(){
    switch(selectedScreen){
        case 'addAccount':
            return <AddAccount/>
        default:
            return <div>dsdf</div>
           
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>

        <Toolbar>
          <Typography variant="h6" noWrap>
            Dana Tea
          </Typography>
        </Toolbar>

      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key={"addAccount"} onClick={()=>{setSelectedScreen('addAccount');}}>
                <ListItemIcon>{<InboxIcon /> }</ListItemIcon>
                <ListItemText primary={"Add Account"} />
            </ListItem>

            <ListItem button key={"addTransaction"} onClick={()=>{setSelectedScreen('addAccounds')}}>
                <ListItemIcon>{<InboxIcon /> }</ListItemIcon>
                <ListItemText primary={"Add Transaction"} />
            </ListItem>

          </List>

          {/* <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}

        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        
        {
            toggleScreen()
        }
      </main>
    </div>
  );
}
