'use server'
import { currentUser } from '@clerk/nextjs/server';
import AppUserWelcomeCard from './_card';
import Link from 'next/link';

const ClerkUser = async ({ userId }: { userId: string }) => {
  // let cUser;
  // try {
  //   cUser = await currentUser();
  // } catch (error) {
  //   return <Link href={'/sign-in'}>Login Here</Link>
  // }

  // if (cUser === null) { return <Link href={'/sign-in'}>Login Here</Link> }

  return <div>
    {/* {!!cUser && <AppUserWelcomeCard clerkId={cUser.id} />} */}
    {/* <AppUserWelcomeCard clerkId={userId} /> */}
  </div>
}

export default ClerkUser