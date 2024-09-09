'use server'
import { currentUser } from '@clerk/nextjs/server';
import AppUserWelcomeCard from './_card';
import { AppUser } from '@prisma/client';

const ClerkUser = async () => {
  const cUser = await currentUser();

  return <div>
    {!!cUser && <AppUserWelcomeCard clerkId={cUser.id} />}
  </div>
}

export default ClerkUser