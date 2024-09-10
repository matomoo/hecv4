import useAntrianPoli from '@/app/hooks/useAntrianPoli';
import { Flex, List, Typography } from 'antd';

const ListAntrianPoli = () => {
  const { data: dataAntrianPoli, isError, error, isLoading } = useAntrianPoli();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  console.log(dataAntrianPoli)
  return (
    <div>
      <Flex vertical className='mt-8' >
        <div className='text-2xl text-sky-600'>Antrian Poli</div>
        <div className='p-4 bg-slate-500 rounded-xl'>

          <List
            style={{ color: '#0284c7' }}
            dataSource={dataAntrianPoli}
            renderItem={(item) => (
              <List.Item
              >
                <Typography.Text strong >{item.nm_pasien}</Typography.Text>
                <Typography.Text code type={item.numPeriksaPoli > 0 ? `success` : 'secondary'}>{item.numPeriksaPoli > 0 ? 'Sementara periksa' : 'Menunggu'}</Typography.Text>
                <Typography.Text type="secondary">{item.nm_dokter}</Typography.Text>
              </List.Item>
            )}
          />
        </div>
      </Flex>
    </div>
  )
}

export default ListAntrianPoli