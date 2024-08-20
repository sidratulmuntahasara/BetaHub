'use client';
import React, { useState } from 'react';
import { Box, CssBaseline, Drawer, Button, AppBar, Toolbar, Badge, TextField, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Avatar, Switch } from '@mui/material';
import { Menu as MenuIcon, Dashboard as DashboardIcon, Analytics as AnalyticsIcon, Settings as SettingsIcon, Groups2, AccountCircle, Assignment as KanbanIcon, ViewCarousel, PeopleAlt, CoPresent, AutoStories, AddBusiness, ViewList, Lock } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useClerk } from '@clerk/clerk-react';
import { Line } from 'react-chartjs-2';
import Image from 'next/image';
import 'daisyui';
import Dashpane from '@/components/dashpane';

const drawerWidth = 240;

const Settings = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { user, signOut, deleteUser } = useClerk();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleDeleteAccount = async () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      try {
        await deleteUser();
        alert('Account deleted successfully.');
        router.push('/goodbye'); // Navigate to a farewell page
      } catch (error) {
        console.error("Error deleting account: ", error);
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: darkMode ? '#121212' : '#f5f5f5', height: '100vh', color: darkMode ? '#fff' : '#000'  }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: darkMode ? '#121212' : '#fff',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography noWrap component="div" className='text-rose-500'>
            Dashboard / <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Settings</span>
          </Typography>
        </Toolbar>
      </AppBar>
      
      {/* Navigation Drawer */}
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#1a1a2e',
              color: '#fff',
            },
          }}
        >
          <Dashpane />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#1a1a2e',
              color: '#fff',
            },
          }}
          open
        >
          <Dashpane />
        </Drawer>
      </Box>
      <Toolbar />
      {/* Settings Page Content */}
      <Box sx={{ flexGrow: 1, py: 10, px: 3 }}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          <TextField
            label="Change Password"
            type="password"
            variant="outlined"
            sx={{
              mb: 2,
              backgroundColor: '#2e2e2e',
              color: '#fff',
              input: { color: '#fff' },
            }}
            InputLabelProps={{ style: { color: '#aaa' } }} // Lighter label color
            fullWidth
          />
          <TextField
            label="Change Email"
            type="email"
            variant="outlined"
            sx={{
              mb: 2,
              backgroundColor: '#2e2e2e',
              color: '#fff',
              input: { color: '#fff' },
            }}
            InputLabelProps={{ style: { color: '#aaa' } }} // Lighter label color
            fullWidth
          />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Save Changes
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ mt: 2, borderColor: '#ff1744', color: '#ff1744' }}
            onClick={handleDeleteAccount}
          >
            Delete Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
