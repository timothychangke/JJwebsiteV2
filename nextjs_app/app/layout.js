'use client';
import { Inter } from 'next/font/google';
import './globals.css';
// import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/general/Navbar';
import CTA from './components/general/CTA';
import Footer from './components/general/Footer';
import { Toaster } from 'react-hot-toast';
import { useRouter, usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Toaster position="bottom-right" />
        {children}
        {pathname != "/login" && pathname != "/signup" && pathname != "/forget-password" && pathname != "/store" && pathname != "/mypurchases" && (
          <CTA/>
          <Footer/>
        )}
      </body>
    </html>
  );
}
