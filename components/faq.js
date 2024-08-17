'use client'
import React, { useState } from 'react'
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    { question: 'What is BetaHub?', answer: 'BetaHub is a platform designed for entrepreneurs and startups to turn their ideas into reality with powerful tools and community support.' },
    { question: 'How can I join BetaHub?', answer: 'You can join BetaHub by clicking on the "Join Now" button and signing up through our registration page.' },
    { question: 'What features does BetaHub offer?', answer: 'BetaHub offers AI-powered analytics, team collaboration tools, customizable dashboards, and much more.' },
    { question: 'Is there a free trial available?', answer: 'Yes, BetaHub offers a 14-day free trial for all new users.' },
    { question: 'How do I contact support?', answer: 'You can contact our support team via the Contact Us page or by sending an email to support@betahub.com.' },
  ];

  return (
    <Box className="w-full flex flex-col items-center justify-center py-20 bg-black text-white">
      <Typography variant="h3" className="text-purple-300 mb-8">Frequently Asked Questions</Typography>
      
      <Box className="w-11/12 max-w-3xl">
        {faqs.map((faq, index) => (
          <Accordion 
            key={index} 
            expanded={expanded === `panel${index}`} 
            onChange={handleChange(`panel${index}`)}
            className="bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-800 mb-4"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-teal-300" />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography className="text-white font-semibold">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-slate-300">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default FAQ;
