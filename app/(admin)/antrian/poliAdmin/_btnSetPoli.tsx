import { tblx_antrian_poli } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from 'antd';
import axios from 'axios';


const BtnSetPoli = ({ user, namaPoli }: { user?: any, namaPoli: string }) => {

  const queryClient = useQueryClient();

  const mutationUpdate = useMutation({
    mutationFn: (newData: tblx_antrian_poli) => {
      return axios.put('https://hec1.hijr.de/hecapiv3/updateAntrianPeriksaPoli/' + namaPoli, newData)
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
        }}
      >{namaPoli}</Button>
    </div>
  )
}

export default BtnSetPoli