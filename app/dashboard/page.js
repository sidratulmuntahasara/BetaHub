import React from 'react'
import { Box } from '@mui/material'

function dashboard() {
  return (
    <Box width={'100%'} height={'100%'} className='bg-black'>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{textAlign: 'center', my: 4}}
      >
        <h1 className='text-white'>Dashboard</h1>
      </Box>
    </Box>
  )
}

export default dashboard