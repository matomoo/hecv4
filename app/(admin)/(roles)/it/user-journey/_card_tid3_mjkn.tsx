"use client"
import { Space, Tag } from 'antd';
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import Use_getByNoRawat_TaskId3_MJKN from '@/app/hooks/use_getByNoRawat_TaskId3_MJKN';
import { Schema_getByNoRawat_TaskId3_MJKN } from '@/app/schema/antrianPoliSchema';
// var customParseFormat = require("dayjs/plugin/customParseFormat");

//#region - dayjs setting
dayjs.locale("id");
dayjs.extend(utc)
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.tz.setDefault("Asia/Makassar");
//#endregion

const Card_Tid3_MJKN = ({ no_rawat }: { no_rawat: string }) => {
  const { data: dataTaskid, isError, error, isLoading } = Use_getByNoRawat_TaskId3_MJKN(no_rawat);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <Space direction='vertical'>

        {dataTaskid?.map((elm: Schema_getByNoRawat_TaskId3_MJKN, idx: number) => {
          return (
            <div key={idx} className='pl-4 pt-2'>
              <div>Task ID 3 <Tag>{elm.validasi}</Tag></div>
            </div>
          )
        })}
      </Space>
    </div>
  )
}

export default Card_Tid3_MJKN