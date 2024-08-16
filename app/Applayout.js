"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');
  const isLogin = pathname.startsWith('/login');
  const isSignup = pathname.startsWith('/signup');

  if (isDashboard || isLogin || isSignup) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ClerkProvider>
    );
  }
  else{
    return(
      <body className={inter.className}>{children}</body>
    )
  }
}
