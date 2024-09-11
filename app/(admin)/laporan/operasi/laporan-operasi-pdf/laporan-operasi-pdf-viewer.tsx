"use client"
import useDataLaporanOperasi from "@/app/hooks/useDataLaporanOperasi";
import { SchemaDataLaporanOperasi } from "@/app/schema/antrianPoliSchema";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import { useState } from "react";
// import FormUpdateLaporanOperasi from "../laporan-operasi-form/formUpdateLaporanOperasi";
import { LaporanOperasiPdf } from "./laporan-operasi-pdf";
import LaporanOperasiUploadBarcodeForm from "../../uploadBarcodeOperasi/formUploadBarcode";
import FormUpdateLaporanOperasi from "../../uploadBarcodeOperasi/formUpdateLaporanOperasi";



const PDFView = ({ params }: { params: { no_rawat: string } }) => {

  const { data: resultDataLaporanOperasi, isError, error, isLoading } = useDataLaporanOperasi(
    params.no_rawat
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  // const [counter, setCounter] = useState<number>(1)
  // const [resultRegistrasiPeriksa, setResultRegistrasiPeriksa] = useState<RegistrasiPeriksaModel[]>([]);
  // const [resultDataLaporanOperasi, setResultDataLaporanOperasi] = useState<SchemaDataLaporanOperasi[]>(dataLaporanOperasi);
  // const [resultDokter, setResultDokter] = useState<DokterModel[]>([]);
  // const [loading, setLoading] = useState(true)
  // const [initialValueResumePasienExtended, setInitialValueResumePasienExtended] = useState<any>()
  // const [imageUrl, setImageUrl] = useState<string>('');


  // const onFinishUpload = (values: any) => {
  //   // console.log('adakah onFinishUpload' + counter)
  //   setCounter(counter + 1)
  //   return true
  // }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Download PDF Laporan Operasi',
      children: <div>
        <div>
          {resultDataLaporanOperasi?.length === 0 ? 'No Data. Silahkan Input Data Operasi.' :
            <PDFDownloadLink document={<LaporanOperasiPdf resultLaporanOperasi={resultDataLaporanOperasi!} />} fileName={resultDataLaporanOperasi![0].no_rkm_medis + ".pdf"}>
              {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Download PDF'
              }
            </PDFDownloadLink>
          }
        </div>
      </div>,
    },
    {
      key: '2',
      label: 'View PDF Laporan Operasi',
      children: <div>
        {resultDataLaporanOperasi!.length === 0 ? 'No Data. Silahkan Input Data Operasi.' :
          <div className="h-[600px]">
            <PDFViewer className="h-[80%] w-[100%]">
              <LaporanOperasiPdf resultLaporanOperasi={resultDataLaporanOperasi!} />
            </PDFViewer>
          </div>
        }
      </div>,
    },
    {
      key: '3',
      label: 'Form Upload Barcode',
      children:
        <div>
          <LaporanOperasiUploadBarcodeForm
            registrasiPasienValues={resultDataLaporanOperasi}
          // onFinishUpload={onFinishUpload}
          />
        </div>

    },
    // {
    //   key: '4',
    //   label: 'Form Update Laporan Operasi',
    //   children:
    //     <div>
    //       <FormUpdateLaporanOperasi
    //         resultLaporanOperasi={resultDataLaporanOperasi!}
    //       // onFinishUpload={onFinishUpload}
    //       />
    //     </div>

    // },

  ];

  // const onChange = (key: string) => {
  //   // console.log(key);
  // };



  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true)
  //       // get data registrasi periksa
  //       const response = await fetch(`/api/regPeriksaByNoRawat?no_rawat=${no_rawat.toString().replaceAll('-', '/')}`);
  //       const jsonData = await response.json();
  //       setResultRegistrasiPeriksa(jsonData.data);

  //       // get data laporan operasi
  //       const response2 = await fetch(`/api/laporanOperasi?no_rawat=${no_rawat.toString().replaceAll('/', '-')}`);
  //       const jsonData2 = await response2.json();
  //       // console.log(jsonData2)
  //       setResultLaporanOperasi(jsonData2.data);

  //       // setImageUrl(`https://bougenvillepangkep.hijr.de/bgville/be/bgville-be-api/assets_api/upload/${resultRegistrasiPeriksa[0].pasien.nm_pasien} ${resultRegistrasiPeriksa[0].no_rawat}.jpg`)
  //       setLoading(false)
  //       // console.log(jsonData.data)
  //     } catch (error) {
  //       setLoading(false)
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, [no_rawat, counter]);

  return (
    <div className="">
      {isLoading ? 'Loading...' :
        <div>
          <div className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 mb-8">
              <div>
                Nama Pasien : {resultDataLaporanOperasi![0].nm_pasien}
              </div>
              <div>
                Nomor Rekam Medis : {resultDataLaporanOperasi![0].no_rkm_medis}
              </div>
              <div>
                Nomor Rawat : {resultDataLaporanOperasi![0].no_rawat}
              </div>
            </div>
            <Tabs defaultActiveKey="1" items={items} />
          </div>
        </div>
      }
    </div>
  )
}
export default PDFView

