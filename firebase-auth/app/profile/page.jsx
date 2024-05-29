'use client';
import React, { useEffect, useState } from 'react';
import { UserAuth, googleSignIn, logOut } from '../context/AuthContext';
import Spinner from '../components/Spinner';

const page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-4">
      {loading ? (
        <Spinner />
      ) : user ? (
        <p>Welcome, {user.displayName}!</p>
      ) : (
        <p>You must be logged in to view this page.</p>
      )}
    </div>
  );
};

export default page;
