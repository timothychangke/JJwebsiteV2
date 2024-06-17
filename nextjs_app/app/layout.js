'use client';
import { Inter } from 'next/font/google';
import './globals.css';
// import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <Toaster position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
