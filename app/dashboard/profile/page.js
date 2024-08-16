'use client';
import React, { useState } from 'react';
import { Box, CssBaseline, Drawer, Button, AppBar, Badge, Toolbar, TextField, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Avatar, Switch } from '@mui/material';
import { Menu as MenuIcon, Dashboard as DashboardIcon, Analytics as AnalyticsIcon, Edit, Settings as SettingsIcon, Groups2, AccountCircle, Assignment as KanbanIcon, ViewCarousel, PeopleAlt, CoPresent, AutoStories, AddBusiness, ViewList, Lock } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useClerk } from '@clerk/clerk-react';
import { Line } from 'react-chartjs-2';
import Image from 'next/image';
import 'daisyui';

const drawerWidth = 240;

const Profile = () => {
  const { user } = useClerk();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
  const [location, setLocation] = useState(user?.publicMetadata?.location || '');
  const [bio, setBio] = useState(user?.publicMetadata?.bio || '');
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleEditProfile = () => {
    window.location.href = 'https://your-clerk-domain.clerk.app/user'; // Update this with your Clerk account management URL
  };

  const saveProfileInfo = () => {
    // Save the profile information to Clerk (implement the save functionality)
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  const drawer = (
    <div>
      <Box className='h-screen flex flex-col justify-start'>
      <Badge badgeContent={'Beta'} color={' bg-gradient-to-tr from-purple-400 to-rose-900 '} className='flex justify-center self-center rounded-full mt-7'>
      <Image src={'/betahub_logo.avif'} height={'80'} width={'80'} className='flex justify-center self-center rounded-full'></Image> </Badge>
      <Divider />
        <List className='flex flex-col justify-between items-start max-h-full'>
          <ListItem className='flex flex-col'>
            <ListItem button onClick={() => handleNavigation('/dashboard')}>
              <ListItemIcon>
                <DashboardIcon sx={{ color: '#e94560' }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <AnalyticsIcon sx={{ color: '#efd4df' }} />
              </ListItemIcon>
              <ListItemText primary="Analytics" />
            <Lock className='text-purple-600 text-lg' />
          </ListItem>
            <ListItem button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <KanbanIcon sx={{ color: '#41e5f4' }} />
              </ListItemIcon>
              <ListItemText primary="Kanban" />
            <Lock className='text-purple-600 text-lg' />
          </ListItem>
            <ListItem button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <ViewCarousel sx={{ color: '#42a5f5' }} />
              </ListItemIcon>
              <ListItemText primary="FlashCard" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <Groups2 sx={{ color: '#9ff3c6' }} />
              </ListItemIcon>
              <ListItemText primary="Network" />
              <Lock className='text-purple-600 text-lg' />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <PeopleAlt sx={{ color: '#f3ad9f' }} />
              </ListItemIcon>
              <ListItemText primary="My Team" />
              <Lock className='text-purple-600 text-lg' />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <CoPresent sx={{ color: '#9fdff3' }} />
              </ListItemIcon>
              <ListItemText primary="Mock Pitch" />
              <Lock className='text-purple-600 text-lg' />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <AutoStories sx={{ color: '#00ffd5' }} />
              </ListItemIcon>
              <ListItemText primary="Resources" />
              <Lock className='text-purple-600 text-lg' />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <AddBusiness sx={{ color: '#e3e2e3' }} />
              </ListItemIcon>
              <ListItemText primary="Marketing" />
              <Lock className='text-purple-600 text-lg' />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <ViewList sx={{ color: '#ffa5da' }} />
              </ListItemIcon>
              <ListItemText primary="VC Listings" />
              <Lock className='text-purple-600 text-lg' />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('/dashboard/settings')}>
              <ListItemIcon>
                <SettingsIcon sx={{ color: '#9587c4' }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </ListItem>
          <Divider />
          <ListItem className='flex flex-col'>
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
              <label className="grid cursor-pointer place-items-center">
                <input type='checkbox' value={'synthwave'} onChange={handleToggleDarkMode} className='toggle theme-controller' />
              </label>
            </Box>
            <ListItem button onClick={() => handleNavigation('/dashboard/profile')}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar src={user?.imageUrl} alt={user?.firstName} />
                <Box>
                  <Typography variant="body2">{user?.fullName}</Typography>
                  <Typography variant="body2" className='italic font-bold text-purple-300'>Entrepreneur</Typography>
                </Box>
              </Box>
            </ListItem>
          </ListItem>
        </List>
      </Box>
    </div>
  );

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
            Dashboard / <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Profile</span>
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
          {drawer}
        </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#1a1a2e', color: '#fff' },
        }}
        open
      >
        {drawer}
      </Drawer>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          p:3,
          backgroundColor: '#121212',
          height: '100vh',
          color: '#fff',
          overflow: 'auto',
          marginLeft: { sm: `${drawerWidth}` }, // This ensures the content is not overlapped by the drawer
        }}
      >
        <Toolbar/>
      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#121212', height: '100vh', color: '#fff', overflow: 'auto' }}>

        {/* Profile Banner */}
        {/* <Box
          sx={{
            backgroundColor: '#27293d',
            borderRadius: 2,
            p: 3,
            mb: 3,
            backgroundImage: 'url(/banner-image.jpg)', // Replace with your banner image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Welcome, {user?.firstName}!</Typography>
        </Box> */}

        {/* Profile Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar src={user?.imageUrl} alt={user?.firstName} sx={{ width: 100, height: 100, mr: 3 }} />
          <Box>
            <Typography variant="h5">{user?.firstName} {user?.lastName}</Typography>
            <Typography variant="body1" className='italic font-bold text-purple-300'>{user?.primaryEmailAddress?.emailAddress}</Typography>
          </Box>
        </Box>

        {/* Edit Profile Button */}
        <Button
          variant="contained"
          startIcon={<Edit />}
          onClick={handleEditProfile}
          sx={{ mb: 3 }}
        >
          Edit Profile
        </Button>

        {/* Additional Profile Fields */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6">Additional Info</Typography>
          <TextField
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#1a1a2e', color: '#fff', input: { color: '#fff' } }}
            fullWidth
          />
          <TextField
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#1a1a2e', color: '#fff', input: { color: '#fff' } }}
            fullWidth
          />
          <TextField
            label="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#1a1a2e', color: '#fff', input: { color: '#fff' } }}
            fullWidth
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" onClick={saveProfileInfo}>
            Save Profile Info
          </Button>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default Profile;
