'use client'
import React from 'react';
import { Box, Typography, TextField, Button, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import Image from 'next/image';

function Footer() {
  return (
    <Box className="w-full bg-slate-950 text-white py-16">
      <Grid container spacing={4} className="w-11/12 max-w-6xl mx-auto">
        {/* About Section */}
        <Grid item xs={12} md={4}>
            <Image src={'/BetaHub.avif'} width={80} height={80} className='rounded-lg' />
          <Typography variant="h6" className="text-purple-300 mb-4">About BetaHub</Typography>
          <Typography className="text-slate-300">
            BetaHub is a one-stop platform for turning your entrepreneurial dreams into reality. We provide AI-powered tools, mentorship, and a thriving community to help you every step of the way.
          </Typography>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" className="text-purple-300 mb-4">Follow Us</Typography>
          <Box className="flex space-x-4">
            <IconButton component={Link} href="https://facebook.com" target="_blank" className="text-teal-300">
              <Facebook />
            </IconButton>
            <IconButton component={Link} href="https://twitter.com" target="_blank" className="text-teal-300">
              <Twitter />
            </IconButton>
            <IconButton component={Link} href="https://linkedin.com" target="_blank" className="text-teal-300">
              <LinkedIn />
            </IconButton>
            <IconButton component={Link} href="https://instagram.com" target="_blank" className="text-teal-300">
              <Instagram />
            </IconButton>
          </Box>
        </Grid>

        {/* Join Waitlist Form */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" className="text-purple-300 mb-4">Join Our Waitlist</Typography>
          <form>
          <TextField 
              variant="outlined" 
              fullWidth 
              placeholder="Enter your name" 
              className="bg-gray-800 text-white mb-4" 
              InputProps={{ className: "text-white" }}
            /><TextField 
            variant="outlined" 
            fullWidth 
            placeholder="Enter your email" 
            className="bg-gray-800 text-white mb-4" 
            InputProps={{ className: "text-white" }}
          />
            <Button 
              variant="contained" 
              color="primary" 
              className="bg-purple-500 hover:bg-purple-700 text-white"
              fullWidth
            >
              Join Now
            </Button>
          </form>
        </Grid>
      </Grid>

      {/* Additional Links */}
      <Box className="w-full border-t border-gray-800 mt-8 pt-8">
        <Grid container spacing={4} className="w-11/12 max-w-6xl mx-auto">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="text-purple-300 mb-4">Resources</Typography>
            <Box>
              <Link href="#" className="text-slate-300 hover:text-white block mb-2">Blog</Link>
              <Link href="#" className="text-slate-300 hover:text-white block mb-2">FAQs</Link>
              <Link href="#" className="text-slate-300 hover:text-white block mb-2">Help Center</Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="text-purple-300 mb-4">Company</Typography>
            <Box>
              <Link href="#" className="text-slate-300 hover:text-white block mb-2">About Us</Link>
              <Link href="#" className="text-slate-300 hover:text-white block mb-2">Careers</Link>
              <Link href="#" className="text-slate-300 hover:text-white block mb-2">Contact Us</Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="text-purple-300 mb-4">Legal</Typography>
            <Box>
              <Link href="#" className="text-slate-300 hover:text-white block mb-2">Privacy Policy</Link>
              <Link href="#" className="text-slate-300 hover:text-white block mb-2">Terms of Service</Link>
              <Link href="#" className="text-slate-300 hover:text-white block mb-2">Cookie Policy</Link>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Copyright */}
      <Box className="text-center text-slate-500 mt-8">
        <Typography variant="body2">&copy; {new Date().getFullYear()} BetaHub. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
