"use client";
import { Card, Space, Divider, Button, Flex } from 'antd';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AppUserWelcomeCard from '../../appUser/_card';


export default function Home() {

  const { isLoaded, isSignedIn, user } = useUser();

  const router = useRouter();

  // if (!user) {
  //   router.push(`/sign-in`);
  // }

  // useEffect(() => {

  //   const role = user?.publicMetadata.role;
  //   console.log(user?.id);

  //   if (role) {
  //     // router.push(`/${role}`);
  //     // router.push(`/`);
  //   }
  // }, [user, router]);

  return (
    <Space direction='vertical'>
      {!user ? <div>Loading...</div> :
        <div>
          Konek Akun Page
          <AppUserWelcomeCard clerkId={user?.id} />
        </div>
      }
    </Space>
  );
}
