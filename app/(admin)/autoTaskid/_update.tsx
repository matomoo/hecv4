import React from 'react'
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { HandlerUpdateTaskId } from '@/app/api/mjkn/handlerUpdateTaskId';

//#region - dayjs setting
// dayjs.locale("id");
// dayjs.extend(utc)
// dayjs.extend(timezone);
dayjs.extend(customParseFormat);
// dayjs.tz.setDefault("Asia/Makassar");
//#endregion


const sendTaskid = async (noBooking: string, taskId: number, waktu: number) => {
  const res = await HandlerUpdateTaskId(noBooking, taskId, waktu)
  // console.log(res.metadata.message)
  return res.metadata.message
}

const UpdateTaskId = ({ taskId, waktu, minuteDiff, noBooking }: { taskId: any, waktu: string, minuteDiff: number, noBooking: string }) => {

  // if (noBooking !== '20240921000005')
  //   return <div>no proses</div>

  if (taskId === 5 || taskId === 7)
    return <div>Task Id Completed</div>

  if (taskId === undefined && Number.isNaN(minuteDiff))
    return <div>Task Id No Need</div>

  if (taskId === 3 && minuteDiff > 15) {
    console.log('send taskId 4 and minuteDiff > 15 and noBooking ' + noBooking)
    const waktuForTid4 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).add(Math.floor(Math.random() * 10) + 65, "minute").unix() * 1000
    const res = sendTaskid(noBooking, 4, waktuForTid4)
    console.log(res.then(a => console.log(a)))
  }

  if (taskId === 4 && minuteDiff > 25) {
    console.log('send taskId 5 and minuteDiff > 25 and noBooking ' + noBooking)
    const addMinut = Math.floor(Math.random() * 10) + 75
    console.log(addMinut)
    const waktuForTid4 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).add(addMinut, "minute").unix() * 1000
    const res = sendTaskid(noBooking, 5, waktuForTid4)
    console.log(res.then(a => console.log(a)))
  }


  return (
    <div>UpdateTaskId : {taskId}</div>
  )
}

export default UpdateTaskId