import { AppUser } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Space } from 'antd';
import axios from 'axios';
import ConnectAkunForm from './_form';
import { CloseCircleOutlined } from '@ant-design/icons';


const BtnConnectAkun = ({ user }: { user: AppUser }) => {
  const queryClient = useQueryClient();

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

            <Space>
              {user?.nip === null ?
                <ConnectAkunForm
                  user={user}
                  handlerSubmit={(values) => {
                    mutationAdd.mutate({ ...user, nip: values.nip })
                  }} />
                : user?.nip === undefined ? 'Need reconnect' : `NIP : ${user?.nip}`
              }

              {(user?.nip !== null || user?.nip !== undefined) &&
                <Button danger
                  type='text'
                  size='small'
                  shape="circle" icon={<CloseCircleOutlined />}
                  onClick={() => {
                    mutationAdd.mutate({ ...user, nip: null })
                  }} />
              }
            </Space>
          </Space>
        </>
      )}




    </div>
  )
}

export default BtnConnectAkun