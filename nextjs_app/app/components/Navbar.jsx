import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { UserAuth, googleSignIn, logOut } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor pointer">
          <Link href="/"> Home </Link>
        </li>
        <li className="p-2 cursor pointer">
          <Link href="/about"> About </Link>
        </li>
        {!user ? null : (
          <li className="p-2 cursor pointer">
            <Link href="/profile"> Profile </Link>
          </li>
        )}
      </ul>

      {loading ? null : !user ? (
        //display sign in options for unsigned in user
        <ul className="flex">
          <li className="p-2 cursor-pointer">
            <Link href="/auth/login">Log In</Link>
          </li>
          <li className="p-2 cursor-pointer">
            <Link href="/auth/signup">Sign Up</Link>
          </li>
        </ul>
      ) : (
        //display sign out option for signed in user
        <div>
          <p>Welcome, {user.displayName}</p>
          <p className="cursor-pointer" onClick={handleSignOut}>
            {' '}
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
