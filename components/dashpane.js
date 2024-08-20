'use client'
import React, { useState } from 'react';
import { Box, CssBaseline, Drawer, AppBar, Toolbar, Button, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Avatar, Switch, Badge } from '@mui/material';
import { Menu as MenuIcon, Dashboard as DashboardIcon, Analytics as AnalyticsIcon, Settings as SettingsIcon, Groups2, AccountCircle, Assignment as KanbanIcon, ViewCarousel, PeopleAlt, CoPresent, AutoStories, AddBusiness, ViewList, Lock } from '@mui/icons-material';
import { useClerk } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function dashpane() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const { user } = useClerk();
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
      };
    
      const handleToggleDarkMode = () => {
        setDarkMode(!darkMode);
      };

    //if page in focus, then the dashboard tag of that page will be highlighted
    // const handleFocus = (path) => {
    //     if (router.prefetch === path) {
    //       return <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100' />;
    //     }
    //   }

    const drawer = (
        <div>
          <Box className='h-screen flex flex-col justify-start'>
            <Badge badgeContent={'Beta'} color={' bg-gradient-to-tr from-purple-400 to-rose-900 '}  className='flex justify-center self-center rounded-full mt-7'>
          <Image src={'/BetaHub_Logo.avif'} height={'80'} width={'80'} className='flex justify-center self-center rounded-full'></Image> 
          </Badge>
          <Divider />
          <List className='flex flex-col justify-between items-start max-h-full'>
            <ListItem className='flex flex-col'>
            <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('/dashboard')}>
              <ListItemIcon>
                <DashboardIcon sx={{ color: '#fafafa' }} />
              </ListItemIcon>
              <ListItemText className='text-white' primary="Dashboard" />
            </ListItem>
            <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <AnalyticsIcon sx={{ color: '#efd4df' }} />
              </ListItemIcon>
              <ListItemText className='text-white' primary="Analytics" />
              <Lock className='text-purple-600 text-lg' />
            </ListItem>
            <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <KanbanIcon sx={{ color: '#41e5f4' }} />
              </ListItemIcon>
              <ListItemText className='text-white' primary="Kanban" />
              <Lock className='text-purple-600 text-lg' />
            </ListItem>
            <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <ViewCarousel sx={{ color: '#42a5f5' }} />
              </ListItemIcon>
              <ListItemText className='text-white' primary="FlashCard" />
            </ListItem>
            <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <Groups2 sx={{ color: '#9ff3c6' }} />
              </ListItemIcon>
              <ListItemText className='text-white' primary="Network" />
              <Lock className='text-purple-600 text-lg' />
            </ListItem>
            <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <PeopleAlt sx={{ color: '#f3ad9f' }} />
              </ListItemIcon>
              <ListItemText className='text-white' primary="My Team" />
              <Lock className='text-purple-600 text-lg' />
            </ListItem>
            <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <CoPresent sx={{ color: '#9fdff3' }} />
              </ListItemIcon>
              <ListItemText className='text-white' primary="Mock Pitch" />
              <Lock className='text-purple-600 text-lg' />
            </ListItem>
            <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <AutoStories sx={{ color: '#00ffd5' }} />
              </ListItemIcon>
              <ListItemText className='text-white' primary="Resources" />
              <Lock className='text-purple-600 text-lg' />
            </ListItem>
            <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <AddBusiness sx={{ color: '#e3e2e3' }} />
              </ListItemIcon>
              <ListItemText className='text-white' primary="Marketing" />
              <Lock className='text-purple-600 text-lg' />
            </ListItem>
            <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('')}>
              <ListItemIcon>
                <ViewList sx={{ color: '#ffa5da' }} />
              </ListItemIcon>
              <ListItemText className='text-white' primary="VC Listings" />
              <Lock className='text-purple-600 text-lg' />
            </ListItem>
            <ListItem className='focus:bg-black focus:bg-opacity-70 focus:opacity-100 hover:opacity-80 rounded-lg opacity-50' button onClick={() => handleNavigation('/dashboard/settings')}>
              <ListItemIcon>
                <SettingsIcon sx={{ color: '#d9ceff' }} />
              </ListItemIcon>
              <ListItemText className='text-white' primary="Settings" />
            </ListItem>
          </ListItem>
          <Divider/>
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
    drawer
  )
}

export default dashpane