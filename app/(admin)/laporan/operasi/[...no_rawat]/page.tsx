'use client'
import dynamic from "next/dynamic";
import { useEffect, useState } from "react"


const LaporanOperasiPdf = dynamic(() => import("../laporan-operasi-pdf/laporan-operasi-pdf-viewer"), {
  ssr: false,
});


const View = ({ params }: { params: { no_rawat: string } }) => {

  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return (

    <div>
      <LaporanOperasiPdf params={params} />
    </div>

  )
}


export default View