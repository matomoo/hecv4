import useAntrianPoli from '@/app/hooks/useAntrianPoli';
import { Flex, List, Typography } from 'antd';
import BtnSetPoli from './_btnSetPoli';

const ListAntrianPoli = () => {
  const { data: dataAntrianPoli, isError, error, isLoading } = useAntrianPoli();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <Flex vertical className='mt-8' >
        <Typography.Title level={5}>Data Antrian Poli</Typography.Title>
        <List
          bordered
          dataSource={dataAntrianPoli}
          renderItem={(item) => {
            return (
              <List.Item
                actions={[
                  <BtnSetPoli key={'1'} user={item} namaPoli={'POLI_1'} />,
                  <BtnSetPoli key={'2'} user={item} namaPoli={'POLI_2'} />
                ]}
              >
                <Typography.Text strong>{item.nm_pasien}</Typography.Text>
                <Typography.Text code type={item.numPeriksaPoli > 0 ? `success` : 'secondary'}>{item.numPeriksaPoli > 0 ? 'Sementara periksa' : 'Menunggu'}</Typography.Text>
                <Typography.Text type="secondary">{item.nm_dokter}</Typography.Text>
              </List.Item>
            );
          }}
        />
      </Flex>
    </div>
  )
}

export default ListAntrianPoli