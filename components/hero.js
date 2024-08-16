import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'

function hero() {
  return (
    <Box className='flex flex-col justify-center items-center h-screen gap-6'>
      <Box className='relative h-screen w-11/12 flex flex-col justify-center items-center rounded-t-3xl overflow-hidden border-opacity-80 border-slate-600 border-2 border-solid'>
      <span aria-hidden className='absolute inset-0 scale-x-[3] scale-y-[3] blur-xl before:absolute before:animate-disco before:inset-0 before:aspect-auto before:bg-gradient-conic before:from-pink-300 before:to-indigo-600 before:bg-opacity-50' />
        <Box className='flex flex-col justify-center items-center z-10 py-24'>
        <Typography className='text-8xl font-bold text-center text-wrap text-black'>FROM IDEA TO SUCCESS</Typography>
        </Box>
        <a href='#' className='flex justify-center'><Image src={'/scroller.png'} height={'100'} width={'100'} className='animate-spin' /></a>
     </Box>
    </Box>
  )
}

export default hero