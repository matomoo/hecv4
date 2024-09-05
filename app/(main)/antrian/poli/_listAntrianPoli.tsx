import useAntrianPoli from '@/app/hooks/useAntrianPoli';
import { Flex, List, Typography } from 'antd';
import BtnSetPoli from './_btnSetPoli';

const ListAntrianPoli = () => {
  const { data: dataAntrianPoli, isError, error, isLoading } = useAntrianPoli();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  // console.log(dataAntrianPoli)
  return (
    <div>
      <Flex vertical >
        <Typography.Title level={5}>Data Antrian Poli</Typography.Title>
        <List
          bordered
          dataSource={dataAntrianPoli}
          renderItem={(item) => (
            <List.Item
              actions={[
                <BtnSetPoli user={item} namaPoli={'POLI 1'} />,
                <BtnSetPoli user={item} namaPoli={'POLI 2'} />
              ]}
            >
              {item.nm_pasien} / {item.numPeriksaPoli > 0 ? 'Sementara periksa' : 'Menunggu'}
            </List.Item>
          )}
        />
      </Flex>
    </div>
  )
}

export default ListAntrianPoli