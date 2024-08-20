'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import { InView } from 'react-intersection-observer';

function Section1() {
  return (
    <section id='#sec1'>
    
      <InView threshold={0.1} triggerOnce>
        {({ inView, ref }) => (
            <Box className='w-full flex flex-col items-center justify-center py-20'>
            <Box className='w-11/12 flex flex-col items-center justify-center p-10 text-center'>
              <Typography variant="h2" className={inView? 'text-white py-2 animate-slideUp' : 'opacity-0'}>
                Are you an <span className='bg-teal-300 text-black rounded-full'>&nbsp;Entrepreneur&nbsp;</span> with full of ideas?
              </Typography>
              <Typography variant="h3" className={inView? 'text-slate-300 py-6 animate-slideUp' :'opacity-0' }>
                Yet no one to <span className='bg-teal-300 text-black rounded-full'>&nbsp;support&nbsp;</span> you grow?
              </Typography>
            </Box>
          <Box
            ref={ref}
            className={`w-full flex items-center justify-center text-center transition-all duration-1000 transform-gpu ${
              inView ? 'opacity-100 animate__animated animate__fadeInUp rotate-3d' : 'opacity-0'
            }`}
          >
            <Box
              className="w-full rounded-lg relative"
              style={{
                perspective: '1000px',
              }}
            >
              <Box
                className={`relative flex justify-center w-full h-full transform transition-transform duration-1000 ${
                  inView ? 'opacity-100 animate-rotateIn' : 'opacity-0'
                }`}
                style={{
                  transformOrigin: 'center',
                }}
              >
                <img
                  src="/image1.png" // Replace with your image path
                  alt="BetaHub"
                  className="w-4/6 h-auto" // Ensures the image takes up the full width
                  style={{
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Box>
          </Box> 
          <Box className='w-11/12 flex flex-col items-center justify-center p-3 text-center'>
        <Typography variant="h4" className='text-slate-300 py-3 mt-5'>
          We <span className='bg-pink-300 text-black rounded-full'>&nbsp;support&nbsp;</span> founder's like you 🫵
        </Typography>
        <Typography variant="h3" className='text-slate-300 py-3'>
          <span className='bg-purple-300 text-purple-950 font-bold rounded-full'>&nbsp;World's First AI-based Startup Incubator&nbsp;</span>
        </Typography>
      </Box>
        </Box>
        
        )}
        
      </InView>

      
    </section>
  );
}

export default Section1;
