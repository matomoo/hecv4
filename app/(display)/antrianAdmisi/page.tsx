'use client'
import ListAntrianAdmisi from './_listAntrianAdmisi';


const AdminAntrianAdmisi = ({ params }: { params: { id: string } }) => {

  return (
    <div className='grid grid-cols-3 gap-4 bg-slate-900 p-8 h-screen' >
      <ListAntrianAdmisi />
    </div>
  )
}

export default AdminAntrianAdmisi