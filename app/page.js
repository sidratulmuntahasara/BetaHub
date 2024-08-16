import Image from "next/image";
import Main from "./main/page";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box height={'100vh'} width={'100vw'} className='bg-black overflow-x-hidden -z-50'>
        
      <Main/> 
    </Box>
  );
}
