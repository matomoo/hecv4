import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Space } from 'antd';
import axios from 'axios';
import ConnectAkunForm from './_form';
import { CloseCircleOutlined } from '@ant-design/icons';
import { apiUrl } from '@/constants';
import { Schema_GetAppUser } from '@/app/schema/antrianPoliSchema';
import { useRouter } from 'next/navigation';
import { useUserRole } from '@/app/context/UserRoleContext';

type userList = Schema_GetAppUser

const BtnConnectAkun = ({ user }: { user: userList }) => {

  const queryClient = useQueryClient();
  const router = useRouter();
  const { refreshRole } = useUserRole();

  const mutation = useMutation({

    mutationFn: async (newData: userList) => {
      const aa = await fetch("/api/update-metadata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          publicMetadata: {
            role: newData.nm_jbtn.replaceAll(" ", "-").toLowerCase(),
          },
        }),
      });

      if (aa.status === 200) {
        refreshRole();
        router.refresh();
      }

      return axios.put(apiUrl + "updateNip_AppUser", newData)
    },

    onSuccess: async (savedData, newData) => {
      queryClient.setQueryData<userList>(['appUser'], newData);
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
              {user?.nip === null || user?.nip === "-" ?
                <ConnectAkunForm
                  user={user}
                  handlerSubmit={(values) => {
                    mutation.mutate({ ...user, nip: values.nip, nm_jbtn: values.nm_jbtn });

                  }} />
                : user?.nip === undefined ? 'Need reconnect'
                  : <Space>
                    <Space direction='vertical'>
                      <div>Hello, {user?.username}</div>
                      <div>NIP : {user?.nip}</div>
                      <div>Jabatan : {user?.nm_jbtn}</div>
                    </Space>
                    <Button danger
                      type='text'
                      size='small'
                      shape="circle" icon={<CloseCircleOutlined />}
                      onClick={() => {
                        mutation.mutate({ ...user, nip: '-', nm_jbtn: 'roless' });
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