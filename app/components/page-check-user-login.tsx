"use client"
import { currentUser } from '@clerk/nextjs/server'
import { AppUser } from '@prisma/client';
import React from 'react';
import { useEffect } from 'react';
import { GetCurrentUserFromMongoDB } from '../hooks/use_upsertNewUser';
import Loader from './loader';
import PageCheckUserRole from './page-check-user-role';
import { useRouter } from 'next/navigation';

const PageCheckUserLogin = () => {

  const [currentUserData = null, setCurrentUserData] =
    React.useState<AppUser | null>(null);
  const [loading = false, setLoading] = React.useState<boolean>(false);
  const [loginSuccess, setLoginSuccess] = React.useState<boolean>(false)
  const router = useRouter()

  const getCurrentUser = async () => {
    try {
      setLoading(true);
      const response: any = await GetCurrentUserFromMongoDB();
      if (response.error) throw new Error(response.error.message);
      setCurrentUserData(response.data);
      setLoginSuccess(true)
    } catch (error: any) {
      console.log(error)
      setLoginSuccess(false)
      // message.error(error.message);
    } finally {
      setLoading(false);
      router.refresh()
    }
  };

  useEffect(() => {
    getCurrentUser();

  }, []);

  return (
    <div >
      {
        loading ? <Loader /> :
          <div>✅</div>
      }

    </div>
  );
}

export default PageCheckUserLogin;
