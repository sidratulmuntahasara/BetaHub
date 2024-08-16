'use client'
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';

const Analytics = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#121212', height: '100vh', color: '#fff' }}>
      <Typography variant="h4" gutterBottom>Analytics</Typography>
      <Line data={lineData} />
    </Box>
  );
};

export default Analytics;
