'use client'
import React from 'react'
import { Box, Typography, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // For tick mark icons
import FeatureIcon from '@mui/icons-material/Star'; // Placeholder icon for features
import { styled } from '@mui/material/styles';

const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
}));

function FeaturesAndPricing() {
  const features = [
    { title: 'Personalized AI Mentor', description: 'From ideation to take-off, your private AI Mentor is going to guide the way through', image: '/abstract.png' },
    { title: 'Real-time Collaboration', description: 'Work together with your team in real-time.', image: '/abstract.png'  },
    { title: 'Advanced Analytics', description: 'Gain insights from powerful analytics.', image: '/abstract.png'  },
  ];

  const pricing = [
    { 
      plan: 'Basic', 
      price: '$19/month', 
      features: [
        'Customizable Workflows',
        'Basic Analytics',
        'Email Support',
      ],
    },
    { 
      plan: 'Pro', 
      price: '$49/month', 
      features: [
        'All Basic Features',
        'Real-time Collaboration',
        'Advanced Analytics',
        'Priority Support',
      ],
    },
    { 
      plan: 'Teams', 
      price: '$99/month', 
      features: [
        'All Pro Features',
        'Unlimited Team Members',
        'Dedicated Account Manager',
        'AI-Powered Suggestions',
      ],
    },
  ];

  return (
    <Box className="w-full min-h-screen flex flex-col items-center justify-center py-20 bg-black text-white">
      
      {/* Features Section */}
      <Box className="w-11/12 text-center mb-52">
        <Typography variant="h3" className="text-purple-300 mb-6">Our Features</Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <GlassCard className="text-white h-full hover:bg-indigo-900">
              <span aria-hidden className='absolute inset-0 -z-10 scale-x-[2] scale-y-[2] blur before:absolute before:inset-0 before:aspect-auto before:bg-gradient-conic before:from-slate-800 before:via-transparent before:to-cyan-500 ' />
              <CardContent>
                  <Box className="flex flex-col items-center justify-center ">
                  <Typography variant="h5" className="text-teal-50 font-bold mb-2">{feature.title}</Typography>
                  <Typography variant="body1" className="text-white">{feature.description}</Typography>
                  <img className='w-fit' src={feature.image} width={200} height={200} />
                  </Box>
                </CardContent>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Pricing Section */}
      <Box className="w-11/12 text-center">
        <Typography variant="h3" className="text-purple-300 mb-6">Pricing</Typography>
        <Grid container spacing={4} justifyContent="center">
          {pricing.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <GlassCard className="text-white h-full">
                <CardContent>
                  <Typography variant="h5" className="text-teal-300 mb-4">{plan.plan}</Typography>
                  <Typography variant="h4" className="text-teal-200 mb-4">{plan.price}</Typography>
                  <List>
                    {plan.features.map((feature, idx) => (
                      <ListItem key={idx}>
                        <ListItemIcon>
                          <CheckCircleIcon className="text-teal-300" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature}
                          primaryTypographyProps={{ className: 'text-slate-300' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default FeaturesAndPricing;
