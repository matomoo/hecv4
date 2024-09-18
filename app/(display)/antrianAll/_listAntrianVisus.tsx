import useAntrianVisus from '@/app/hooks/useAntrianVisus';
import { SchemaAntrianVisus } from '@/app/schema/antrianPoliSchema';
import { Flex } from 'antd';

const ListAntrianVisus = () => {
  const { data: dataAntrianVisus, isError, error, isLoading } = useAntrianVisus();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <Flex vertical className='' >
        <div className='text-2xl text-sky-600'>Antrian Visus</div>
        <div className='p-4 bg-slate-500 rounded-xl'>

          {dataAntrianVisus?.map((elm: SchemaAntrianVisus) => {
            return (
              <div key={elm.no_rawat}>{elm.nm_pasien}</div>
            )
          })}
        </div>
      </Flex>
    </div>
  )
}

export default ListAntrianVisus