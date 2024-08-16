import React from 'react'
import Image from 'next/image'
import {Box , Typography, AppBar, Button} from '@mui/material'

function navbar() {
  return (
    <AppBar className='sticky w-screen flex flex-row justify-between items-center gap-4 bg-black bg-opacity-90 py-1'>
        <Box className='w-full flex flex-row justify-center items-center'>
            <a href='#'><Image src='/BetaHub (1).png' width={120} height={120} /></a>
        </Box>
        <Box className='w-full flex flex-row justify-center items-center gap-10'>
            <a href='../'><Typography className='text-slate-300 hover:font-bold hover:text-white'>HOME</Typography></a>
            <a href='#'><Typography className='text-slate-300 hover:font-bold hover:text-white'>ABOUT</Typography></a>
            <a href='#'><Typography className='text-slate-300 hover:font-bold hover:text-white'>DOCS</Typography></a>
        </Box>
        <Box className= 'w-screen flex flex-row justify-center items-center gap-3'>
            <Button href='/login' variant='contained' className=' font-bold bg-transparent rounded overflow-hidden hover:bg-gradient-to-tr hover:bg-transparent hover:glass'>
                
                SIGN IN

                <span aria-hidden className='absolute inset-0 -z-10 scale-x-[2] scale-y-[2] blur before:absolute before:animate-disco before:inset-0 before:aspect-auto before:bg-gradient-conic before:from-rose-400 before:via-purple-500 before:to-teal-400' />
                
            </Button>
        </Box>
    </AppBar>
  )
}

export default navbar