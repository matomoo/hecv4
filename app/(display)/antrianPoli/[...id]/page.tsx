'use client'
import CardPoli from './_cardPoli';
import ListAntrianPoli from './_listAntrianPoli';


const AdminAntrianPoli = ({ params }: { params: { id: string } }) => {

  // reload every 10 minute
  setInterval(() => {
    console.log('reload')
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