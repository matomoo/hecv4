"use client"
import { Button } from "antd";
import dayjs from "dayjs";
import Link from "next/link";

export const columns: any = [
  {
    title: "Tanggal Operasi",
    dataIndex: "tgl_operasi_masuk",
    render: (tgl_operasi_masuk: Date) => dayjs(tgl_operasi_masuk).format('DD MMM YYYY'),
    responsive: ['md'],
  },
  {
    title: "Nomor Rawat",
    dataIndex: "no_rawat",
    key: "no_rawat",
    responsive: ['md'],
  },
  {
    title: "Nama Pasien",
    dataIndex: "nm_pasien",
  },
  {
    title: "Waktu Masuk Operasi",
    dataIndex: "jam_operasi_masuk",
    defaultSortOrder: 'ascend',
    sortDirections: ['ascend'],
    sorter: (a: any, b: any) => dayjs(a.tgl_operasi_masuk + " " + a.jam_operasi_masuk).unix() - dayjs(b.tgl_operasi_masuk + " " + b.jam_operasi_masuk).unix(),
  },

  {
    title: "Actions",
    dataIndex: "actions",
    render(value: any, record: any) {
      return (
        <div className="flex gap-5">
          <Link href={'/perawat-kesehatan/laporan/operasi/daftar-registrasi/' + record.no_peserta.replaceAll('/', '-')}><i className="ri-kanban-view"></i></Link>
          {/* <Button          
            size="middle"
            onClick={() =>
              window.open('/perawat-kesehatan/laporan/operasi/daftar-registrasi/' + record.no_rujukan.replaceAll('/', '-'))
            }
          >
            <i className="ri-kanban-view"></i>
          </Button> */}

          {/* <Button
            size="middle"
            onClick={() =>
              window.open('/perawat-kesehatan/laporan/uploadBaroceOperasi/' + record.no_rawat.replaceAll('/', '-'))
            }
          >
            <i className="ri-barcode-line"></i>
          </Button> */}

        </div>
      );
    },
  },
];