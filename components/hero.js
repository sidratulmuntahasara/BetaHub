import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'

function hero() {
  return (
    <Box className='flex flex-col justify-center items-center h-screen gap-6'>
        <Box className='flex flex-col justify-center items-center py-36'>
            <Typography className='text-8xl font-bold text-center text-wrap text-purple-200'>FROM IDEA TO SUCCESS</Typography>
        </Box>
        <a href='#' className='flex justify-center'><Image src={'/scroller.png'} height={'100'} width={'100'} className='animate-spin' /></a>
    </Box>
  )
}

export default hero