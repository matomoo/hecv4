'use client'

import { Table } from "antd";
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { columns } from "./_column";
import Use_getPenjualanObat from "@/app/hooks/use_getPenjualanObat";
import Loader from "@/app/components/loader";

//#region - dayjs setting
dayjs.locale("id");
dayjs.extend(utc)
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Makassar");
//#endregion


function FetchDataServer({ searchParams }: { searchParams: any }) {

  const { data: daftarPenjualanObat, isError, error, isLoading } = Use_getPenjualanObat(
    dayjs(searchParams.tgl_registrasi).format("YYYY-MM-DD"),
    dayjs(searchParams.tgl_registrasi).add(1, 'day').format("YYYY-MM-DD")
  );

  if (isLoading) return <Loader />;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <Table
        size="small"
        dataSource={daftarPenjualanObat}
        columns={columns}
        rowKey="nota_jual"
        loading={isLoading}
      />
    </div>
  );
}

export default FetchDataServer;
