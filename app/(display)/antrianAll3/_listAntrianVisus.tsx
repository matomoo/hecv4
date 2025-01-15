import { GooSpeech } from '@/app/components/gooSpeech';
import { speakNamaPasien } from '@/app/components/panggil-pasien';
import useAntrianVisus from '@/app/hooks/useAntrianVisus';
import { SchemaAntrianVisus } from '@/app/schema/antrianPoliSchema';
import { Button, Flex } from 'antd';

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
              <div className='flex flex-row gap-4 items-center' key={elm.no_rawat}>
                <div >{elm.nm_pasien}</div>
                <Button
                  type="text"
                  size="middle"
                  onClick={() => speakNamaPasien(elm, 'pemeriksaan')
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

export default ListAntrianVisus