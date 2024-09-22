"use server"

import axios from "axios";
import { prepareHeader } from "./handlerEncryptDecrypt";

export async function HandlerUpdateTaskId(
  kodeBooking: string,
  taskId: number,
  waktuRegistrasi: number
) {
  // console.log('on server')
  // console.log(kodeBooking)
  // console.log(taskId)
  // console.log(waktuRegistrasi)
  const headerContext = prepareHeader();
  const apiUrl = 'https://apijkn.bpjs-kesehatan.go.id/antreanrs/antrean/updatewaktu'
  const payload = {
    "kodebooking": kodeBooking,
    "taskid": taskId,
    "waktu": waktuRegistrasi,
  }
  const headerx = {
    "content-type": "application/json",
    "x-cons-id": headerContext["data1"],
    "x-timestamp": headerContext["data2"],
    "x-signature": headerContext["data3"],
    "user_key": headerContext["data4"],
  }

  const response: any = await axios.post(
    apiUrl,
    payload,
    { headers: headerx }
  );
  // console.log(waktuRegistrasi)
  // console.log(response)
  return response.data
}