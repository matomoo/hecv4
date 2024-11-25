import { speakNamaPasien } from '@/app/components/panggil-pasien';
import useAntrianAdmisi from '@/app/hooks/useAntrianAdmisi';
import { SchemaAntrianAdmisi } from '@/app/schema/antrianPoliSchema';
import { Button, Flex } from 'antd';

const ListAntrianAdmisi = () => {
  const { data: dataAntrianAdmisi, isError, error, isLoading } = useAntrianAdmisi();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <Flex vertical className='' >
        <div className='text-2xl text-sky-600'>Antrian Admisi</div>
        <div className='p-4 bg-slate-500 rounded-xl'>

          {dataAntrianAdmisi?.map((elm: SchemaAntrianAdmisi) => {

            return (
              <div className='flex flex-row gap-4 items-center'>
                <div key={elm.no_rawat}>{elm.nm_pasien}</div>
                <Button
                  type="text"
                  size="middle"
                  onClick={() => speakNamaPasien(elm, 'admisi')
                  }
                >
                  <i className="ri-volume-up-line"></i>
                </Button>
              </div>
            )
          })}
        </div>
      </Flex>
    </div>
  )
}

export default ListAntrianAdmisi