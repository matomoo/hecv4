import { AppUser } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Space } from 'antd';
import axios from 'axios';
import ConnectAkunForm from './_form';
import { CloseCircleOutlined } from '@ant-design/icons';
import { apiUrl } from '@/constants';


const BtnConnectAkun = ({ user }: { user: AppUser }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({

    mutationFn: (newData: AppUser) => {
      return axios.put(apiUrl + "updateNip_AppUser", newData)
    },

    onSuccess: (savedData, newData) => {
      queryClient.setQueryData<AppUser>(['appUser'], newData);
    },
  })

  return (
    <div>
      {mutation.isPending ? (
        'Connecting Akun...'
      ) : (
        <>
          <Space direction='vertical'>
            {mutation.isError ? (
              <div>An error occurred: {mutation.error.message}</div>
            ) : null}

            <Space>
              {user?.nip === null ?
                <ConnectAkunForm
                  user={user}
                  handlerSubmit={(values) => {
                    mutation.mutate({ ...user, nip: values.nip })
                  }} />
                : user?.nip === undefined ? 'Need reconnect'
                  : <Space>
                    <Space direction='vertical'>
                      <div>Hello, {user?.username}</div>
                      <div>NIP : {user?.nip}</div>
                    </Space>
                    <Button danger
                      type='text'
                      size='small'
                      shape="circle" icon={<CloseCircleOutlined />}
                      onClick={() => {
                        mutation.mutate({ ...user, nip: null })
                      }} />
                  </Space>
              }
            </Space>
          </Space>
        </>
      )}




    </div>
  )
}

export default BtnConnectAkun