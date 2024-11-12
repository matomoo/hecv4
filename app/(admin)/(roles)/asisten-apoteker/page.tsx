import { currentUser } from '@clerk/nextjs/server'

const page = async () => {
  const user = await currentUser()
  const role: any = user?.publicMetadata.role;

  return (
    <div >
      <div className='text-xl font-semibold'>Halo, {user?.fullName}</div>
      <div>Jabatan : {role}</div>
    </div>
  )
}

export default page