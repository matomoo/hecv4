"use client"
import useDataLaporanOperasi from "@/app/hooks/useDataLaporanOperasi";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import FormUpdateLaporanOperasi from "../../uploadBarcodeOperasi/formUpdateLaporanOperasi";
import LaporanOperasiUploadBarcodeForm from "../../uploadBarcodeOperasi/formUploadBarcode";
import { LaporanOperasiPdf } from "./laporan-operasi-pdf";


const PDFView = ({ params }: { params: { no_rawat: string } }) => {

  const { data: resultDataLaporanOperasi, isError, error, isLoading } = useDataLaporanOperasi(
    params.no_rawat
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

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
          />
        </div>
    },
    {
      key: '4',
      label: 'Form Update Laporan Operasi',
      children:
        <div>
          <FormUpdateLaporanOperasi
            resultLaporanOperasi={resultDataLaporanOperasi!}
          />
        </div>
    },
  ];

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

