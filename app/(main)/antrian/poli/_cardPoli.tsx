import useAntrianPeriksaPoli from '@/app/hooks/useAntrianPeriksaPoli';
import { Card } from 'antd';
import React from 'react'

const CardPoli = ({ namaPoli }: { namaPoli: string }) => {
  const { data: dataAntrianPeriksaPoli, isError, error, isLoading } = useAntrianPeriksaPoli(namaPoli);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  // action openPoli:
  // - setStatus Open
  // - display nama dokter
  // - display jadwal dokter
  return (
    <Card title={namaPoli} bordered={false} className='w-full'>
      {dataAntrianPeriksaPoli?.nm_dokter} / {dataAntrianPeriksaPoli?.nm_pasien}
    </Card>
  )
}

export default CardPoli;