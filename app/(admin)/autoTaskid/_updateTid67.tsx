import React from 'react'
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { HandlerUpdateTaskId } from '@/app/api/mjkn/handlerUpdateTaskId';
import { Tag } from 'antd';
import Use_getByNoRawatForTaskid_ResepObat from '@/app/hooks/Use_getByNoRawatForTaskid_ResepObat';

dayjs.extend(customParseFormat);

const sendTaskid = async (noBooking: string, taskId: number, waktu: number) => {
  const res = await HandlerUpdateTaskId(noBooking, taskId, waktu)
  return res.metadata.message
}

const UpdateTid67 = ({ noRawat, waktu, taskId, minuteDiff, noBooking }: { noRawat: string, waktu: string, taskId: any, minuteDiff: number, noBooking: string }) => {

  const { data: data67Taskid, isError, error, isLoading } = Use_getByNoRawatForTaskid_ResepObat(noRawat);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  const noResep = data67Taskid?.at(data67Taskid.length - 1)?.no_resep
  if (noResep === null || noResep === undefined)
    return <Tag color='default'>No Resep</Tag>

  if (taskId === 5 && minuteDiff > 5) {

    console.log('send taskId 6 and noBooking ' + noBooking)

    const addMinut23 = Math.floor(Math.random() * 5) + 9
    const waktuForTid23 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).add(addMinut23, "minute").unix() * 1000
    const res23 = sendTaskid(noBooking, 6, waktuForTid23)
    res23.then(a => console.log(a))

    console.log('send taskId 7 and noBooking ' + noBooking)

    const addMinut67 = Math.floor(Math.random() * 5) + 10
    const waktuForTid67 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).add(addMinut67, "minute").unix() * 1000
    const res67 = sendTaskid(noBooking, 7, waktuForTid67)
    res67.then(a => console.log(a))
  }

  if (taskId === 6 && minuteDiff > 5) {

    console.log('send taskId 7 and noBooking ' + noBooking)

    const addMinut67 = Math.floor(Math.random() * 5) + 10
    const waktuForTid67 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).add(addMinut67, "minute").unix() * 1000
    const res67 = sendTaskid(noBooking, 7, waktuForTid67)
    res67.then(a => console.log(a))
  }

  return (
    <Tag color='lime'>Ada Resep</Tag>
  )
}

export default UpdateTid67