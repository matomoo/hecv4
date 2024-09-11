"use client"
import { Button } from "antd";
import dayjs from "dayjs";

export const columns: any = [
  {
    title: "Tanggal Operasi",
    dataIndex: "tgl_operasi",
    render: (tgl_registrasi: Date) => dayjs(tgl_registrasi).format('DD MMM YYYY'),
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
    title: "Actions",
    dataIndex: "actions",
    render(value: any, record: any) {
      return (
        <div className="flex gap-5">
          <Button
            size="middle"
            onClick={() =>
              window.open('/laporan/operasi/' + record.no_rawat.replaceAll('/', '-'))
            }
          >
            <i className="ri-kanban-view"></i>
          </Button>

          <Button
            size="middle"
            onClick={() =>
              window.open('/laporan/uploadBaroceOperasi/' + record.no_rawat.replaceAll('/', '-'))
            }
          >
            <i className="ri-barcode-line"></i>
          </Button>

        </div>
      );
    },
  },
];