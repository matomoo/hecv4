"use client"
import { PDFViewer } from "@react-pdf/renderer";
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import { LaporanOperasiPdf } from "./_pdf";
import Use_getDetailPenjualanObat from "@/app/hooks/use_getDetailPenjualanObat";


const PDFView = ({ params }: { params: { nomor_nota_jual: string } }) => {

  const { data: detailPenjualan, isError, error, isLoading } = Use_getDetailPenjualanObat(
    params.nomor_nota_jual
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  const items: TabsProps['items'] = [
    // {
    //   key: '1',
    //   label: 'Download PDF Nota Penjualan Obat',
    //   children: <div>
    //     <div>
    //       {detailPenjualan?.length === 0 ? 'No Data. Silahkan Input Data Operasi.' :
    //         <PDFDownloadLink document={<LaporanOperasiPdf resultLaporanOperasi={detailPenjualan!} />} fileName={detailPenjualan![0].no_rkm_medis + ".pdf"}>
    //           {({ blob, url, loading, error }) =>
    //             loading ? 'Loading document...' : 'Download PDF'
    //           }
    //         </PDFDownloadLink>
    //       }
    //     </div>
    //   </div>,
    // },
    {
      key: '2',
      label: 'View PDF Nota Penjualan',
      children: <div>
        {detailPenjualan!.length === 0 ? 'No Data.' :
          <div className="h-[600px]">
            <PDFViewer className="h-[80%] w-[100%]">
              <LaporanOperasiPdf resultLaporanOperasi={detailPenjualan!} />
            </PDFViewer>
          </div>
        }
      </div>,
    },
  ];

  return (
    <div className="">
      {isLoading ? 'Loading...' :
        <div>
          <div className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 mb-8">
              <div>
                Nama Pasien : {detailPenjualan![0].nm_pasien}
              </div>
              <div>
                Nomor Rekam Medis : {detailPenjualan![0].no_rkm_medis}
              </div>
              <div>
                Nomor Nota Jual : {detailPenjualan![0].nota_jual}
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

