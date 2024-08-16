import React from 'react'
import { SignUp } from '@clerk/nextjs'
import { Box } from '@mui/material'
import Navbar from '@/components/navbar2'

function signup() {
  return (
    <Box className='bg-black w-screen h-screen'>
      <Navbar />
        <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{textAlign: 'center', my: 4}}
    >
      <SignUp fallbackRedirectUrl='/login' publishableKey='pk_test_YWN0dWFsLXRlcnJpZXItMTIuY2xlcmsuYWNjb3VudHMuZGV2JA' />
    </Box>
    </Box>
  )
}

export default signup