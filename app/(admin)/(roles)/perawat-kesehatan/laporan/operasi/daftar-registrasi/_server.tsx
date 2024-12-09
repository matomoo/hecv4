'use client'

import useDaftarOperasi from "@/app/hooks/useDaftarOperasi";
import { Table } from "antd";
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { columns } from "./_column";
import Use_getByDate__reg_periksa from "@/app/hooks/use_getByDate__reg_periksa";
import { Schema_getByDate__reg_periksa } from "@/app/schema/antrianPoliSchema";


//#region - dayjs setting
dayjs.locale("id");
dayjs.extend(utc)
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Makassar");
//#endregion


function FetchDataServer({ searchParams }: { searchParams: any }) {

  const { data: daftarOperasi, isError, error, isLoading } = Use_getByDate__reg_periksa(
    dayjs(searchParams.tgl_registrasi).format("YYYY-MM-DD"),
    dayjs(searchParams.tgl_registrasi).add(1, 'day').format("YYYY-MM-DD")
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  console.log(daftarOperasi)

  return (
    <div>
      <Table
        size="small"
        dataSource={daftarOperasi}
        columns={columns}
        rowKey="no_rawat"
        loading={isLoading}
      />
    </div>
  );
}

export default FetchDataServer;
