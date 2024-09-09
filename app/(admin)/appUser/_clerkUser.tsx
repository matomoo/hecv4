'use server'
import { currentUser } from '@clerk/nextjs/server';

const ClerkUser = async () => {
  const cUser = await currentUser();
  console.log(cUser)
  return cUser
}

export default ClerkUser