'use client';
import React, { useState } from 'react';
import { Box, CssBaseline, Drawer, AppBar, Toolbar, Button, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Avatar, Switch, Badge } from '@mui/material';
import { Menu as MenuIcon, Dashboard as DashboardIcon, Analytics as AnalyticsIcon, Settings as SettingsIcon, Groups2, AccountCircle, Assignment as KanbanIcon, ViewCarousel, PeopleAlt, CoPresent, AutoStories, AddBusiness, ViewList, Lock } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useClerk } from '@clerk/clerk-react';
import { Line } from 'react-chartjs-2';
import Image from 'next/image';
import 'daisyui';
// import { lineData } from 'app/dashboard/analytics/data';
import Dashpane from '@/components/dashpane';

const drawerWidth = 240;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { user } = useClerk();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const drawer = (
  //   <div>
  //     <Box className='h-screen flex flex-col justify-start'>
  //       <Badge badgeContent={'Beta'} color={' bg-gradient-to-tr from-purple-400 to-rose-900 '}  className='flex justify-center self-center rounded-full mt-7'>
  //     <Image src={'/betahub_logo.avif'} height={'80'} width={'80'} className='flex justify-center self-center rounded-full'></Image> </Badge>
  //     <Divider />
  //     <List className='flex flex-col justify-between items-start max-h-full'>
  //       <ListItem className='flex flex-col'>
  //       <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('/dashboard')}>
  //         <ListItemIcon>
  //           <DashboardIcon sx={{ color: '#fafafa' }} />
  //         </ListItemIcon>
  //         <ListItemText className='text-white' primary="Dashboard" />
  //       </ListItem>
  //       <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
  //         <ListItemIcon>
  //           <AnalyticsIcon sx={{ color: '#efd4df' }} />
  //         </ListItemIcon>
  //         <ListItemText className='text-white' primary="Analytics" />
  //         <Lock className='text-purple-600 text-lg' />
  //       </ListItem>
  //       <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
  //         <ListItemIcon>
  //           <KanbanIcon sx={{ color: '#41e5f4' }} />
  //         </ListItemIcon>
  //         <ListItemText className='text-white' primary="Kanban" />
  //         <Lock className='text-purple-600 text-lg' />
  //       </ListItem>
  //       <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
  //         <ListItemIcon>
  //           <ViewCarousel sx={{ color: '#42a5f5' }} />
  //         </ListItemIcon>
  //         <ListItemText className='text-white' primary="FlashCard" />
  //       </ListItem>
  //       <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
  //         <ListItemIcon>
  //           <Groups2 sx={{ color: '#9ff3c6' }} />
  //         </ListItemIcon>
  //         <ListItemText className='text-white' primary="Network" />
  //         <Lock className='text-purple-600 text-lg' />
  //       </ListItem>
  //       <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
  //         <ListItemIcon>
  //           <PeopleAlt sx={{ color: '#f3ad9f' }} />
  //         </ListItemIcon>
  //         <ListItemText className='text-white' primary="My Team" />
  //         <Lock className='text-purple-600 text-lg' />
  //       </ListItem>
  //       <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
  //         <ListItemIcon>
  //           <CoPresent sx={{ color: '#9fdff3' }} />
  //         </ListItemIcon>
  //         <ListItemText className='text-white' primary="Mock Pitch" />
  //         <Lock className='text-purple-600 text-lg' />
  //       </ListItem>
  //       <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
  //         <ListItemIcon>
  //           <AutoStories sx={{ color: '#00ffd5' }} />
  //         </ListItemIcon>
  //         <ListItemText className='text-white' primary="Resources" />
  //         <Lock className='text-purple-600 text-lg' />
  //       </ListItem>
  //       <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
  //         <ListItemIcon>
  //           <AddBusiness sx={{ color: '#e3e2e3' }} />
  //         </ListItemIcon>
  //         <ListItemText className='text-white' primary="Marketing" />
  //         <Lock className='text-purple-600 text-lg' />
  //       </ListItem>
  //       <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
  //         <ListItemIcon>
  //           <ViewList sx={{ color: '#ffa5da' }} />
  //         </ListItemIcon>
  //         <ListItemText className='text-white' primary="VC Listings" />
  //         <Lock className='text-purple-600 text-lg' />
  //       </ListItem>
  //       <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('/dashboard/settings')}>
  //         <ListItemIcon>
  //           <SettingsIcon sx={{ color: '#d9ceff' }} />
  //         </ListItemIcon>
  //         <ListItemText className='text-white' primary="Settings" />
  //       </ListItem>
  //     </ListItem>
  //     <Divider/>
  //     <ListItem className='flex flex-col'>
  //     <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
  //     <label className="grid cursor-pointer place-items-center">
  //       <input type='checkbox' value={'synthwave'} onChange={handleToggleDarkMode} className='toggle theme-controller' />
  //     </label>
  //     </Box>
  //     <ListItem button onClick={() => handleNavigation('/dashboard/profile')}>
  //     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
  //       <Avatar src={user?.imageUrl} alt={user?.firstName} />
  //       <Box>
  //         <Typography variant="body2">{user?.fullName}</Typography>
  //         <Typography variant="body2" className='italic font-bold text-purple-300'>Entrepreneur</Typography>
  //       </Box>
  //     </Box>
  //     </ListItem>
  //     </ListItem>
  //     </List>
  //     </Box>
  //   </div>
  // );

  return (
    <Box sx={{ display: 'flex', backgroundColor: darkMode ? '#121212' : '#f5f5f5', height: '100vh', color: darkMode ? '#fff' : '#000' }}>
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
            Dashboard / <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Analytics</span>
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Navbar></Navbar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#1a1a2e', color: '#fff' },
          }}
        >
          <Dashpane />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#1a1a2e', color: '#fff' },
          }}
          open
        >
          <Dashpane />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: darkMode ? '#121212' : '#F6FCFE',
          color: darkMode ? '#fff' : '#000',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Typography variant="h5" gutterBottom className='font-bold'>
          Good Day, {user?.firstName}!
        </Typography>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {/* Card 1 */}
          <Box className={darkMode ? "bg-gray-800 p-6 rounded-lg shadow-lg" : 'bg-slate-50 p-6 rounded-lg shadow-lg'}>
            <Typography variant="h6" gutterBottom className={darkMode ? 'text-purple-300 font-bold' : 'text-blue-800 font-bold'}>
              PitchCards
            </Typography>
            <Typography variant="body3" className={darkMode ? 'text-rose-400' : 'text-purple-700'}>
              Prepare yourself for the Next Big Pitch! 🚀
            </Typography>
            <Typography variant="body2" className={darkMode ? 'text-rose-200' : 'text-purple-700'}>
              Enhance your learning with AI-powered flashcards designed to help you pitch your ideas confidently. Customize and train yourself using our PitchCards!
            </Typography>

            {/* Interactive button to navigate to Flashcards page */}
            <Button
              variant="contained"
              color={darkMode ? 'secondary' : 'primary'}
              sx={{ mt: 2 }}
              onClick={() => window.location.href = '/dashboard/flashcards'}
            >
              Explore PitchCards
            </Button>

            {/* Optionally, include an image */}
            {/* <Box sx={{ mt: 2 }}>
              <Image 
                src={darkMode ? '/pitchcards_dark.jpg' : '/pitchcards_light.jpg'} 
                alt="PitchCards Preview" 
                width={500} 
                height={300} 
                className="rounded-lg shadow-md"
              />
            </Box> */}
          </Box>

          {/* Card 2 */}
          <Box className={darkMode ? "bg-gray-800 p-6 rounded-lg shadow-lg" : 'bg-slate-50 p-6 rounded-lg shadow-lg'}>
            <Typography variant="h6" gutterBottom className={darkMode? 'text-purple-300 font-bold' : 'text-blue-800 font-bold'}>Intuitively Building the Next Big Thing 🤫</Typography>
            <Typography variant="body3" className={darkMode ? 'text-rose-200 italic font-light' : 'text-purple-700 italic font-light'}>
              Coming Soon...</Typography>
          </Box>
          {/* Card 3 */}
          {/* <Box className={darkMode ? "bg-gray-800 p-6 rounded-lg shadow-lg" : 'bg-slate-50 p-6 rounded-lg shadow-lg'}>
            <Typography variant="h6" gutterBottom className={darkMode? 'text-rose-500 font-bold' : 'text-blue-800 font-bold'}>Card Title 3</Typography>
            <Typography variant="body2" className={darkMode? 'text-rose-200' : 'text-purple-500'}>Description or Analytics</Typography>
          </Box> */}
          {/* Card 4 */}
          {/* <Box className={darkMode ? "bg-gray-800 p-6 rounded-lg shadow-lg" : 'bg-slate-50 p-6 rounded-lg shadow-lg'}>
            <Typography variant="h6" gutterBottom className={darkMode? 'text-rose-500 font-bold' : 'text-blue-800 font-bold'}>Sales Chart</Typography>
            {/* <Line data={lineData} /> 
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
