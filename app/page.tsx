"use client";
import Loader from '@/app/components/loader';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter();

  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <Loader />;
  }

  const role: any = user?.publicMetadata.role;

  return (
    <div >
      <div className='text-xl font-semibold'>Halo, {user?.fullName}</div>
      <div>Jabatan : {role}</div>
      {role === 'roless' && <div className='rounded-lg mt-4 bg-amber-100 w-200 p-4'>Silahkan Konek Akun dulu</div>}
    </div>
  );
}
