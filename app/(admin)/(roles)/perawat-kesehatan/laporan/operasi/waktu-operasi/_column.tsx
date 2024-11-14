"use client"
import { Button } from "antd";
import dayjs from "dayjs";

export const columns: any = [
  {
    title: "Tanggal Operasi",
    dataIndex: "tgl_operasi_masuk",
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
    title: "Jam Masuk",
    dataIndex: "jam_operasi_masuk",
  },
];