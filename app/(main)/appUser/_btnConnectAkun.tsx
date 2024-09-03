import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import ConnectAkunForm from './_form'
import { AppUser } from '@prisma/client';
import useAppUser from '@/app/hooks/useAppUser';
import { Button, Space } from 'antd';


const BtnConnectAkun = ({ user }: { user: AppUser }) => {
  const queryClient = useQueryClient();
  const { data: dataAppUser, isError, isLoading } = useAppUser();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>error</p>;

  const mutationAdd = useMutation({
    mutationFn: (newData: AppUser) => {
      return axios.patch('/api/appUser/' + newData.clerkUserId, newData)
    },

    onSuccess: (savedData, newData) => {
      queryClient.setQueryData<AppUser>(['appUser'], newData);
    },
  })

  return (
    <div>
      {mutationAdd.isPending ? (
        'Connecting Akun...'
      ) : (
        <>
          <Space direction='vertical'>
            {mutationAdd.isError ? (
              <div>An error occurred: {mutationAdd.error.message}</div>
            ) : null}

            {dataAppUser?.nip === null ?
              <ConnectAkunForm
                user={user}
                handlerSubmit={(values) => {
                  mutationAdd.mutate({ ...user, nip: values.nip })
                }} />
              : dataAppUser?.nip
            }

            {dataAppUser?.nip !== null && <Button danger iconPosition={'start'}
              onClick={() => {
                mutationAdd.mutate({ ...user, nip: null })
              }} className='w-fit'>
              Delete Link
            </Button >}
          </Space>
        </>
      )}




    </div>
  )
}

export default BtnConnectAkun