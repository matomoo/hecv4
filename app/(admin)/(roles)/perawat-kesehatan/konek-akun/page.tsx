import { Space } from 'antd';
import AppUserWelcomeCard from '@/app/(admin)/appUser/_card';
import { currentUser } from '@clerk/nextjs/server'
import Loader from '@/app/components/loader';


const PageKonekAkun = async () => {
  const user = await currentUser()

  return (
    <div className='flex-col'>
      {!user ? <Loader /> :
        <div>
          <div className='text-xl font-semibold'>Konek Akun</div>
          <AppUserWelcomeCard clerkId={user?.id} />
        </div>
      }
    </div>
  );
}

export default PageKonekAkun;