import React from 'react'
import { Container, Box, Typography, AppBar, Toolbar, Button } from '@mui/material'
import Navbar from '@/components/navbar3'
import { SignIn } from '@clerk/nextjs'

export default function SignUpPage() {
  return(
    <Box className='bg-black w-screen h-screen'>
      <Navbar />
        <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{textAlign: 'center', my: 4}}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Sign In
      </Typography>
      <SignIn fallbackRedirectUrl="/dashboard" publishableKey='pk_test_YWN0dWFsLXRlcnJpZXItMTIuY2xlcmsuYWNjb3VudHMuZGV2JA' />
    </Box>
    </Box>
  )
  

}