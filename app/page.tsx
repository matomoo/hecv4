"use client";
import Loader from '@/app/components/loader';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter();

  const { isLoaded, isSignedIn, user } = useUser();

  const role: any = user?.publicMetadata.role;

  if (!user) {
    return router.push('/sign-in')
  } else {
    if (role === undefined || role === '-' || role === 'roless') {
      return router.push(`/${role}/konek-akun`)
    }
    return router.push(`/${role}`)
  }

  return (
    <Loader />
  );
}
