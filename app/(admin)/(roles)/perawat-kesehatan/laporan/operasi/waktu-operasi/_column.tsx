"use client"
import { Button } from "antd";
import dayjs from "dayjs";
import { db } from "@/lib/db";
import CompDelete from "./_comp_delete";

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
  {
    title: "Actions",
    dataIndex: "actions",
    render(value: any, record: any) {
      return (
        <CompDelete value={record} />
      );
    },
  },
];