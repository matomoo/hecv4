"use client";
import { useUser } from '@clerk/nextjs';
import Loader from './components/loader';


export default function Home() {

  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <Loader />;
  }

  const role = user?.publicMetadata.role;



  return (
    <div className='text-2xl font-semibold'>
      Halo, {user?.fullName}
    </div>
  );
}
