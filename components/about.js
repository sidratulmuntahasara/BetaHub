'use client'
import React from 'react'
import { Box, Typography, Button, Grid } from '@mui/material';

function about() {
  return (
    <Box className="w-full flex items-center justify-center py-28 bg-black text-white">
      <Grid container spacing={4} className="w-11/12 max-w-6xl">
        
        {/* Text Column */}
        <Grid item xs={12} md={6}>
          <Box className="flex flex-col justify-center h-full">
            <Typography variant="h3" className="text-teal-300 mb-4">
              About BetaHub
            </Typography>
            <Typography variant="body1" className="text-slate-300 mb-6">
              BetaHub is the ultimate platform for entrepreneurs, startups, and innovators who are looking to bring their ideas to life. Whether you need tools for collaboration, analytics, or growth, BetaHub provides everything you need to succeed. With a focus on innovation and support, we empower creators to turn their ideas into reality.
            </Typography>
            <Typography variant="body1" className="text-slate-300 mb-6">
              Join a community of like-minded individuals, access cutting-edge features, and start building the future today. With BetaHub, you’re never alone on your journey to success.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              className="bg-teal-300 text-black font-bold py-3 px-6 rounded-full mt-4 transition-all hover:bg-teal-400"
            >
              Join Now
            </Button>
          </Box>
        </Grid>

        {/* Image Column */}
        {/* <Grid item xs={12} md={6}>
          <Box className="flex items-center justify-center h-full">
            <img
              src="/aboutimg.png" // Replace with your product image path
              alt="About BetaHub"
              className="w-full h-auto rounded-lg shadow-lg border-2 border-slate-800"
            />
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default about;
