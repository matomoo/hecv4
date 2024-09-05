import { tblx_antrian_poli } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from 'antd'
import axios from 'axios';
import React from 'react'
import { SchemaAntrianPoli } from '../../../schema/antrianPoliSchema';


const BtnSetPoli = ({ user, namaPoli }: { user?: any, namaPoli: string }) => {
  // + action setPeriksaPoli :
  // - cek tblx_antrian_poli, update baris POLI 1, dgn data baru
  // - menambah user ke table tblx_antrian_poli, set pasien ke poli 1/2
  // - menghapus user dari antrian poli, berarti menset stts ke step berikut
  // - mengubah dokter di tabel reg_periksa dll jadi dokter poli terpilih
  // - menambah item diagnosa default pemeriksaan untuk pasien tsb di tabel xxx
  // + action selesaiPeriksa :
  // - cek isi tblx_antrian_poli, jika ada, hapus isinya

  const queryClient = useQueryClient();

  const mutationUpdate = useMutation({
    mutationFn: (newData: tblx_antrian_poli) => {
      return axios.patch('/api/antrianPoli/' + namaPoli, newData)
    },

    onSuccess: (savedData, newData) => {
      queryClient.setQueryData<tblx_antrian_poli>(['antrianPeriksaPoli' + namaPoli], newData);

    },
  })
  return (
    <div>
      <Button
        type='text'
        size='small'
        onClick={() => {
          mutationUpdate.mutate({ ...user })
          console.log(user)
          user.status = 'Sementara Periksa'
        }}
      >{namaPoli}</Button>
    </div>
  )
}

export default BtnSetPoli