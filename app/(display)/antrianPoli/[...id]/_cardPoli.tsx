import useAntrianPeriksaPoli from '@/app/hooks/useAntrianPeriksaPoli';

const CardPoli = ({ namaPoli }: { namaPoli: string }) => {

  const namaPolix = "POLI " + namaPoli

  const { data: dataAntrianPeriksaPoli, isError, error, isLoading } = useAntrianPeriksaPoli(namaPolix);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div >
      <div className='text-xl text-sky-400 mb-6'>{'KLINIK MATA HASANUDDIN'}</div>
      <div className='text-2xl text-slate-400 mb-2'>{'Sementara diperiksa oleh :'}</div>
      <div className='text-5xl text-slate-300 ml-2 mb-6'>{dataAntrianPeriksaPoli?.nm_dokter}</div>
      <div className='text-4xl text-slate-400'>{'Pasien atas nama :'} {dataAntrianPeriksaPoli?.nm_pasien} ( {dataAntrianPeriksaPoli?.no_rkm_medis} )</div>
    </div>
  )
}

export default CardPoli;