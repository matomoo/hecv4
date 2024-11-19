import useAntrianPoli from '@/app/hooks/useAntrianPoli';
import { SchemaAntrianPoli } from '@/app/schema/antrianPoliSchema';
import { Flex, List, Typography } from 'antd';

const ListAntrianPoli = () => {
  const { data: dataAntrianPoli, isError, error, isLoading } = useAntrianPoli();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <Flex vertical className='' >
        <div className='text-2xl text-sky-600'>Antrian Poli</div>
        <div className='p-4 bg-slate-500 rounded-xl'>

          {dataAntrianPoli?.map((elm: SchemaAntrianPoli) => {
            return (
              <div key={elm.no_rawat}>{elm.nm_pasien} - {elm.kd_pj === 'BPJ' ? 'BPJS' : 'UMUM'} - {elm.kd_pj}</div>
            )
          })}
        </div>
      </Flex>
    </div>
  )
}

export default ListAntrianPoli