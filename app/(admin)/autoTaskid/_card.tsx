"use client"
import useMjknGetTaskid from '@/app/hooks/useMjknGetTaskid';
import { Schema_GetTaskId } from '@/app/schema/antrianPoliSchema';
import { Space, Tag } from 'antd';
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import UpdateTaskId from './_update';
// var customParseFormat = require("dayjs/plugin/customParseFormat");

//#region - dayjs setting
dayjs.locale("id");
dayjs.extend(utc)
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.tz.setDefault("Asia/Makassar");
//#endregion

const CardDetail = ({ kodeBooking, noSep, jamReg }: { kodeBooking: string, noSep: string, jamReg: string }) => {
  const { data: dataTaskid, isError, error, isLoading } = useMjknGetTaskid(kodeBooking);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  const timeNow = dayjs().format("DD-MM-YYYY HH:mm:ss")
  // const timeTid = dayjs(dataTaskid?.at(dataTaskid.length - 1)?.wakturs.slice(0, -4), "DD-MM-YYYY HH:mm:ss", true).format("DD-MM-YYYY HH:mm:ss")
  const timeTid = dayjs(dataTaskid?.at(dataTaskid.length - 1)?.wakturs.slice(0, -4), "DD-MM-YYYY HH:mm:ss", true).add(1, 'hour').format("DD-MM-YYYY HH:mm:ss")
  const minuteDiff = dayjs().diff(dayjs(dataTaskid?.at(dataTaskid.length - 1)?.wakturs.slice(0, -4), "DD-MM-YYYY HH:mm:ss", true).add(1, 'hour'), "minute")
  const lastTid = dataTaskid?.at(dataTaskid.length - 1)?.taskid
  return (
    <div>
      <Space direction='vertical'>
        {/* <div>waktu sekarang : {timeNow} WITA</div>
        <div>waktu terakhir : {timeTid} WITA</div>
        <div>Minute diff : {minuteDiff}</div>
        <div>Last Task Id : {lastTid}</div>
        <div>No Sep: {noSep}</div> */}
        <UpdateTaskId taskId={lastTid!} waktu={timeTid} minuteDiff={minuteDiff} noBooking={kodeBooking} noSep={noSep} jamReg={jamReg} />

        {dataTaskid?.map((elm: Schema_GetTaskId, idx: number) => {
          return (
            <div key={idx} className='pl-4'>
              <Tag>{elm.taskid} - {elm.wakturs}</Tag>
            </div>
          )
        })}
      </Space>
    </div>
  )
}

export default CardDetail