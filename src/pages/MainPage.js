import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import BrushIcon from '@mui/icons-material/Brush';
import MovieIcon from '@mui/icons-material/Movie';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

export default function MainPage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
              Title Comes Here
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
        <ListItemButton>
          <ListItemIcon> <MailIcon /> </ListItemIcon>
        <ListItemText primary="Sent mail" />
       </ListItemButton>

        <ListItemButton>
          <ListItemIcon> <MovieIcon /> </ListItemIcon>
        <ListItemText primary="Drafts" />
        </ListItemButton>
        
        <ListItemButton>
        <ListItemIcon> <OtherHousesIcon /> </ListItemIcon>
        <ListItemText primary="Other Houses" />
        </ListItemButton>

        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
        </Typography>
      </Box>
    </Box>
  );
}