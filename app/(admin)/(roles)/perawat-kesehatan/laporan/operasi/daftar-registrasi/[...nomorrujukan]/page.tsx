"use client"
import UseVclaimRujukanPeserta from '@/app/hooks/use_vclaim_rujukan_peserta';
import { Schema_Response_RujukanPeserta } from '@/app/schema/antrianPoliSchema';
import { Button, Flex, Space } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = ({ params }: { params: { nomorrujukan: string } }) => {
  const router = useRouter()

  const { data: dataRujukanPeserta, isError, error, isLoading } = UseVclaimRujukanPeserta(params.nomorrujukan);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;


  return (
    <div>
      <div className="flex-col">
        <Space>
          <Button type="text" size='large' onClick={() => router.back()}>
            <i className="ri-arrow-left-line"></i>
          </Button>
          <div className="text-xl font-semibold">Informasi SEP - Nomor Peserta : {params.nomorrujukan}</div>
        </Space>
        {dataRujukanPeserta?.map((elm1: Schema_Response_RujukanPeserta) => (
          <Flex key={elm1.rujukan.peserta.noKartu} vertical gap={4} className='mt-8'>
            {/* <div>Asal Faskes : <span>{elm1.asalFaskes}</span></div> */}
            {/* <div>Rujukan :</div> */}
            <Flex vertical gap={"small"} >
              <div className=''>Diagnosa : <span>{elm1.rujukan.diagnosa.kode}</span> - <span>{elm1.rujukan.diagnosa.nama}</span></div>
              <div className=''>Keluhan : <span>{elm1.rujukan.keluhan}</span></div>
              <div className=''>Nomor Kunjungan : <span>{elm1.rujukan.noKunjungan}</span></div>
              <div className=''>Pelayanan : <span>{elm1.rujukan.pelayanan.kode}</span> - <span>{elm1.rujukan.pelayanan.nama}</span></div>
              <div className=''>Peserta :</div>
              <div className=' ml-4'>Cob:</div>
              <div className='ml-8'>Nama Asuransi: <span>{elm1.rujukan.peserta.cob.nmAsuransi}</span></div>
              <div className='ml-8'>Nomor Asuransi: <span>{elm1.rujukan.peserta.cob.noAsuransi}</span></div>
              <div className='ml-8'>Tanggal TAT: <span>{elm1.rujukan.peserta.cob.tglTAT}</span></div>
              <div className='ml-8'>Tanggal TMT: <span>{elm1.rujukan.peserta.cob.tglTMT}</span></div>
              <div className='ml-4'>Hak Kelas: <span>{elm1.rujukan.peserta.hakKelas.kode}</span> - <span>{elm1.rujukan.peserta.hakKelas.keterangan}</span></div>
              <div className='ml-4'>Informasi:</div>
              <div className='ml-8'>Dinsos: <span>{elm1.rujukan.peserta.informasi.dinsos}</span></div>
              {/* <div className='ml-8'>eSEP: <span>{elm1.rujukan.peserta.informasi.eSEP}</span></div> */}
              <div className='ml-8'>No. SKTM: <span>{elm1.rujukan.peserta.informasi.noSKTM}</span></div>
              <div className='ml-8'>Prolanis PRB: <span>{elm1.rujukan.peserta.informasi.prolanisPRB}</span></div>
              <div className='ml-4'>Jenis Peserta: <span>{elm1.rujukan.peserta.jenisPeserta.keterangan}</span> - <span>{elm1.rujukan.peserta.jenisPeserta.kode}</span></div>
              <div className='ml-4'>Medical Record: </div>
              <div className='ml-8'>Nomor RM: <span>{elm1.rujukan.peserta.mr.noMR}</span></div>
              <div className='ml-8'>Nomor Telp: <span>{elm1.rujukan.peserta.mr.noTelepon}</span></div>
              <div className='ml-4'>Nama Pasien: <span>{elm1.rujukan.peserta.nama}</span></div>
              <div className='ml-4'>NIK: <span>{elm1.rujukan.peserta.nik}</span></div>
              <div className='ml-4'>Nomor Kartu: <span>{elm1.rujukan.peserta.noKartu}</span></div>
              <div className='ml-4'>PISA: <span>{elm1.rujukan.peserta.pisa}</span></div>
              <div className='ml-4'>Provider: <span>{elm1.rujukan.peserta.provUmum.kdProvider}</span> - <span>{elm1.rujukan.peserta.provUmum.nmProvider}</span></div>
              <div className='ml-4'>Jenis Kelamin: <span>{elm1.rujukan.peserta.sex === 'P' ? 'Perempuan' : 'Laki-Laki'}</span></div>
              <div className='ml-4'>Status Peserta: <span>{elm1.rujukan.peserta.statusPeserta.kode}</span> - <span>{elm1.rujukan.peserta.statusPeserta.keterangan}</span></div>
              <div className='ml-4'>Tanggal Cetak Kartu: <span>{elm1.rujukan.peserta.tglCetakKartu}</span></div>
              <div className='ml-4'>Tanggal Lahir: <span>{elm1.rujukan.peserta.tglLahir}</span></div>
              <div className='ml-4'>Tanggal TAT: <span>{elm1.rujukan.peserta.tglTAT}</span></div>
              <div className='ml-4'>Tanggal TMT: <span>{elm1.rujukan.peserta.tglTMT}</span></div>
              <div className='ml-4'>Umur Saat Pelayanan: <span>{elm1.rujukan.peserta.umur.umurSaatPelayanan}</span></div>
              <div className='ml-4'>Umur Sekarang: <span>{elm1.rujukan.peserta.umur.umurSekarang}</span></div>
              <div className=''>Poli Rujukan: <span>{elm1.rujukan.poliRujukan.kode}</span> - <span>{elm1.rujukan.poliRujukan.nama}</span></div>
              <div className=''>Prov Rujukan: <span>{elm1.rujukan.provPerujuk.kode}</span> - <span>{elm1.rujukan.provPerujuk.nama}</span></div>
              <div className=''>Tanggal Kunjungan: <span>{elm1.rujukan.tglKunjungan}</span></div>
            </Flex>
          </Flex>
        ))}
      </div>
    </div>
  )
}

export default Page