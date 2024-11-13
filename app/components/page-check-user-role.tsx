import { currentUser } from '@clerk/nextjs/server'

const PageCheckUserRole = async () => {
  const user = await currentUser()
  const role: any = user?.publicMetadata.role;

  return (
    <div >
      <div className='text-xl font-semibold'>Halo, {user?.fullName}</div>
      <div>Jabatan : {role}</div>
      {role === 'roless' && <div className='rounded-lg mt-4 bg-amber-100 w-200 p-4'>Silahkan Konek Akun dulu</div>}
    </div>
  );
}

export default PageCheckUserRole;
