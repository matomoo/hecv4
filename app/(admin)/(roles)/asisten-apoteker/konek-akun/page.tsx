"use client";
import { Space } from 'antd';
import { useUser } from '@clerk/nextjs';
import AppUserWelcomeCard from '@/app/(admin)/appUser/_card';
import Loader from '@/app/components/loader';


export default function Home() {

  const { user } = useUser();

  return (
    <Space direction='vertical'>
      {!user ? <Loader /> :
        <div>
          <div className='text-xl'>Konek Akun Page</div>
          <AppUserWelcomeCard clerkId={user?.id} />
        </div>
      }
    </Space>
  );
}
