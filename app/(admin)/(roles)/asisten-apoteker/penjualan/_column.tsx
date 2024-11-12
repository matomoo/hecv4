"use client"
import { Button } from "antd";
import dayjs from "dayjs";

export const columns: any = [
  {
    title: "Tanggal Penjualan",
    dataIndex: "tgl_jual",
    render: (tgl_registrasi: Date) => dayjs(tgl_registrasi).format('DD MMM YYYY'),
    responsive: ['md'],
  },
  {
    title: "Nota Jual",
    dataIndex: "nota_jual",
    key: "nota_jual",
    responsive: ['md'],
  },
  {
    title: "Nama Pasien",
    dataIndex: "nm_pasien",
  },
  {
    title: "Nomor Rekam Medis",
    dataIndex: "no_rkm_medis",
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
              window.open('/asisten-apoteker/penjualan/' + record.nota_jual)
            }
          >
            <i className="ri-kanban-view"></i>
          </Button>

        </div>
      );
    },
  },
];