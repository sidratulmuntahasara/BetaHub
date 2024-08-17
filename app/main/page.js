import React from 'react'
import {Box} from '@mui/material'
// import ScrollBtn from '@/components/scroll'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Section1 from '@/components/section1'
import About from '@/components/about'
import Section2 from '@/components/section2'
import Faq from '@/components/faq'
import Footer from '@/components/footer'

function main() {
  return (
    <Box>
      {/* <ScrollBtn /> */}
        <Navbar />
        <Hero />
        <Section1 />
        <About />
        <Section2 />
        <Faq />
        <Footer />
    </Box>
  )
}

export default main