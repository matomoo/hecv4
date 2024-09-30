'use client'
import CardPoli from './_cardPoli';
import ListAntrianPoli from './_listAntrianPoli';


const AdminAntrianPoli = ({ params }: { params: { id: string } }) => {

  setInterval(() => {
    window.location.reload();
  }, 60 * 1000);


  return (
    <div className='bg-slate-900 p-8 h-screen' >
      <CardPoli namaPoli={params.id} />
      <ListAntrianPoli />
    </div>
  )
}

export default AdminAntrianPoli