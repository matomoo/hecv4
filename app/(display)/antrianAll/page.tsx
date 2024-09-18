'use client'
import ListAntrianAdmisi from './_listAntrianAdmisi';
import ListAntrianPoli from './_listAntrianPoli';
import ListAntrianVisus from './_listAntrianVisus';


const AdminAntrianPoli = ({ params }: { params: { id: string } }) => {

  return (
    <div className='grid grid-cols-3 gap-4 bg-slate-900 p-8 h-screen' >
      <ListAntrianAdmisi />
      <ListAntrianVisus />
      <ListAntrianPoli />
    </div>
  )
}

export default AdminAntrianPoli