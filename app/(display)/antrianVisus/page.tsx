'use client'
import ListAntrianVisus from './_listAntrianVisus';


const AdminAntrianVisus = ({ params }: { params: { id: string } }) => {

  // setInterval(() => {
  //   window.location.reload();
  // }, 10 * 60 * 1000);


  return (
    <div className='grid grid-cols-3 gap-4 bg-slate-900 p-8 h-screen' >
      <ListAntrianVisus />
    </div>
  )
}

export default AdminAntrianVisus