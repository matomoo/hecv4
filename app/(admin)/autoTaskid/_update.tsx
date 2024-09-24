import React from 'react'
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { HandlerUpdateTaskId } from '@/app/api/mjkn/handlerUpdateTaskId';
import { Tag } from 'antd';

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

const UpdateTaskId = (
  { taskId, waktu, minuteDiff, noBooking, noSep }
    : { taskId: any, waktu: string, minuteDiff: number, noBooking: string, noSep: string }) => {

  // if (noBooking !== '20240923000019')
  //   return <div>no proses</div>

  if (noSep === undefined || noSep === null)
    return <Tag color="default">No SEP</Tag>

  if (taskId === 5 || taskId === 7)
    return <Tag color="success">Task Id Completed</Tag>

  if (taskId === undefined && Number.isNaN(minuteDiff) && (noSep === undefined || noSep === null))
    return <Tag color="default">Task Id No Need</Tag>

  // console.log(taskId)
  // console.log(waktu)

  if (taskId === undefined && (noSep !== undefined || noSep !== null)) {
    console.log('taskid undefined > send taskId 1 and noBooking ' + noBooking)

    const waktuForTid23 = dayjs().unix() * 1000
    const res23 = sendTaskid(noBooking, 1, waktuForTid23)
    res23.then(a => console.log(a))

  }


  if (taskId === 1 && minuteDiff > 1) {

    console.log('send taskId 123 and noBooking ' + noBooking)

    const addMinut23 = Math.floor(Math.random() * 5) + 5
    const waktuForTid23 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).subtract(addMinut23, "minute").unix() * 1000
    const res23 = sendTaskid(noBooking, 2, waktuForTid23)

    const addMinut34 = Math.floor(Math.random() * 3) + 3
    const waktuForTid4 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).add(addMinut34, "minute").unix() * 1000
    const res = sendTaskid(noBooking, 3, waktuForTid4)
    console.log(res.then(a => {
      if (a === 'Task=1 ada. TaskId=2 belum ada') {
        console.log('send taskId 2 and noBooking ' + noBooking)
        const addMinut23 = Math.floor(Math.random() * 5) + 15
        const waktuForTid23 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).add(addMinut23, "minute").unix() * 1000
        const res23 = sendTaskid(noBooking, 2, waktuForTid23)
        console.log(res23.then(a => console.log(a)))

        const addMinut34 = Math.floor(Math.random() * 5) + 3
        const waktuForTid4 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).add(addMinut34, "minute").unix() * 1000
        const res = sendTaskid(noBooking, 3, waktuForTid4)
      }
      return console.log(a);
    }))
  }

  if (taskId === 2 && minuteDiff > 1) {
    console.log('send taskId 23 and noBooking ' + noBooking)

    const addMinut23 = Math.floor(Math.random() * 5) + 5
    const waktuForTid23 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).subtract(addMinut23, "minute").unix() * 1000
    const res23 = sendTaskid(noBooking, 2, waktuForTid23)
    res23.then(a => console.log(a))

    const addMinut34 = Math.floor(Math.random() * 5) + 3
    const waktuForTid4 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).add(addMinut34, "minute").unix() * 1000
    const res = sendTaskid(noBooking, 3, waktuForTid4)
    res.then(a => console.log(a))
  }

  if (taskId === 3 && minuteDiff > 5) {
    console.log('send taskId 4 and minuteDiff > 15 and noBooking ' + noBooking)
    const addMinut34 = Math.floor(Math.random() * 5) + 10
    const waktuForTid4 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).add(addMinut34, "minute").unix() * 1000
    const res = sendTaskid(noBooking, 4, waktuForTid4)
    console.log(res.then(a => {
      if (a === 'TaskId=4 tidak valid / TaskId sebelumnya belum terkirim' || a === 'TaskId=3 belum ada' || a === 'Task=1 ada. TaskId=2 belum ada') {
        console.log('send taskId 123 and noBooking ' + noBooking)

        const addMinut12 = Math.floor(Math.random() * 5) + 10
        const waktuForTid12 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).subtract(addMinut12, "minute").unix() * 1000
        const res12 = sendTaskid(noBooking, 1, waktuForTid12)

        const addMinut23 = Math.floor(Math.random() * 5) + 5
        const waktuForTid23 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).subtract(addMinut23, "minute").unix() * 1000
        const res23 = sendTaskid(noBooking, 2, waktuForTid23)
        res23.then(a => {
          console.log('send taskId 2 and noBooking ' + noBooking)
          if (a === 'Task=1 ada. TaskId=2 belum ada') {
            const addMinut23 = Math.floor(Math.random() * 1) + 1
            console.log(addMinut23)
            const waktuForTid23 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).subtract(addMinut23, "minute").unix() * 1000
            const res23 = sendTaskid(noBooking, 2, waktuForTid23)
          }
        })

        const addMinut34 = Math.floor(Math.random() * 3) + 3
        const waktuForTid4 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).add(addMinut34, "minute").unix() * 1000
        const res = sendTaskid(noBooking, 3, waktuForTid4)
        console.log(res.then(a => console.log(a)))
      }
      return console.log(a);
    }))
  }

  if (taskId === 4 && minuteDiff > 5) {
    console.log('send taskId 5 and minuteDiff > 15 and noBooking ' + noBooking)
    const addMinut45 = Math.floor(Math.random() * 5) + 15
    const waktuForTid4 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).add(addMinut45, "minute").unix() * 1000
    const res = sendTaskid(noBooking, 5, waktuForTid4)
    console.log(res.then(a => {
      if (a === 'TaskId=3 belum ada') {
        console.log('send taskId 123 and noBooking ' + noBooking)

        const addMinut12 = Math.floor(Math.random() * 9) + 1
        const waktuForTid12 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).subtract(addMinut12, "minute").unix() * 1000
        const res12 = sendTaskid(noBooking, 1, waktuForTid12)

        const addMinut23 = Math.floor(Math.random() * 5) + 1
        const waktuForTid23 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).subtract(addMinut23, "minute").unix() * 1000
        const res23 = sendTaskid(noBooking, 2, waktuForTid23)

        const addMinut34 = Math.floor(Math.random() * 3) + 3
        const waktuForTid4 = dayjs(waktu, "DD-MM-YYYY HH:mm:ss", true).add(addMinut34, "minute").unix() * 1000
        const res = sendTaskid(noBooking, 3, waktuForTid4)
        console.log(res.then(a => console.log(a)))
      }
      return console.log(a);
    }))
  }

  if (taskId === null || taskId === undefined)
    taskId === 98

  return (
    <Tag color={taskId === 99 ? 'default' : 'processing'}>Last Task Id : {taskId}</Tag>
  )
}

export default UpdateTaskId