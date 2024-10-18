'use client';
import { Inter } from 'next/font/google';
import './globals.css';
// import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/general/Navbar';
import CTA from './components/general/CTA';
import Footer from './components/general/Footer';
import { Toaster } from 'react-hot-toast';
import { useRouter, usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster position="bottom-right" />
        {children}
        
        {/* Only display CTA and Footer on specific routes */}
        {pathname !== "/login" && pathname !== "/signup" && pathname !== "/forget-password" && pathname !== "/store" && pathname !== "/programmes" && pathname !== "/analytics" && pathname !== "/mypurchases" && pathname !== "/affiliatelink" && (
          <>
            <CTA />
            <footer className='text-md text-center py-12 bg-light-green'>
              <div className='sm:flex w-full max-w-4xl mx-auto justify-between'>
                <div className='w-96 sm:w-auto mx-auto sm:mx-0'>
                  <div className='flex justify-center sm:justify-normal'>
                    <div className='rounded-full ml-4 h-12 w-12 bg-gray-500'></div>
                    <div className='rounded-full ml-4 h-12 w-12 bg-gray-500'></div>
                    <div className='rounded-full ml-4 h-12 w-12 bg-gray-500'></div>
                    <div className='rounded-full ml-4 h-12 w-12 bg-gray-500'></div>
                  </div>
                  <div className='flex justify-center sm:justify-normal items-center mt-8 mx-auto'>
                    <div className='rounded-full ml-4 h-12 w-20 bg-gray-500'></div>
                    <p className='text-xl ml-4'>Jalan Journey</p>
                  </div>
                </div>
                <div className='w-full sm:w-auto mt-10 text-center sm:text-left sm:flex sm:mr-8 sm:mt-0'>
                  <div className='sm:mr-10 md:mr-20'>
                    <p><a href="#">Sign in</a></p>
                    <p><a href="#">Affiliate Program</a></p>
                    <p><a href="#">Jobs</a></p>
                  </div>
                  <div>
                    <p><a href="#">Help</a></p>
                    <p><a href="#">Privacy Policy</a></p>
                    <p><a href="#">Terms & Service</a></p>
                  </div>
                </div>
              </div>
              <p className='text-center mt-12 text-dark-green font-bold'>&copy; 2024 Jalan Journey. All rights reserved.</p>
            </footer>
          </>
        )}
      </body>
    </html>
  );
}
