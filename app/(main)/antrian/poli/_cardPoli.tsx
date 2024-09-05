import useAntrianPeriksaPoli from '@/app/hooks/useAntrianPeriksaPoli';
import { Card, Typography } from 'antd';
import React from 'react'
import BtnSetPoliOff from './_btnSetPoliOff';

const CardPoli = ({ namaPoli }: { namaPoli: string }) => {
  const { data: dataAntrianPeriksaPoli, isError, error, isLoading } = useAntrianPeriksaPoli(namaPoli);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  // action openPoli:
  // - setStatus Open
  // - display nama dokter
  // - display jadwal dokter
  return (
    <Card title={namaPoli}
      extra={<BtnSetPoliOff user={dataAntrianPeriksaPoli} namaPoli={namaPoli} />}
    >
      <Typography.Title level={4}>{dataAntrianPeriksaPoli?.nm_dokter}</Typography.Title>
      <Typography.Title level={5}>{dataAntrianPeriksaPoli?.nm_pasien}</Typography.Title>
    </Card>
  )
}

export default CardPoli;