"use client";
import Loader from '@/app/components/loader';
import { useUser } from '@clerk/nextjs';

const page = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <Loader />;
  }

  const role: any = user?.publicMetadata.role;

  return (
    <div >
      <div className='text-xl font-semibold'>Halo, {user?.fullName}</div>
      <div>Jabatan : {role}</div>
    </div>
  )
}

export default page