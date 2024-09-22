"use server"

import axios from "axios";
import { decryptAndDecompress, prepareHeader } from "./handlerEncryptDecrypt";

export async function HandlerGetListTaskId(
  { kodeBooking }
    :
    { kodeBooking: string }
) {
  let dataTaskId = []
  // sending data
  const headerContext = prepareHeader();
  const apiUrl = 'https://apijkn.bpjs-kesehatan.go.id/antreanrs/antrean/getlisttask'
  const formData = { "kodebooking": kodeBooking }
  const headerx = {
    "content-type": "application/json",
    "x-cons-id": headerContext["data1"],
    "x-timestamp": headerContext["data2"],
    "x-signature": headerContext["data3"],
    "user_key": headerContext["data4"],
  }

  const response = await axios.post(
    apiUrl,
    formData,
    { headers: headerx }
  );

  // receive data
  const key = headerContext["data1"] + headerContext["data5"] + headerContext["data2"]

  const dataDecrypt = decryptAndDecompress(
    response.data.response,
    key
  )

  if (dataDecrypt) {
    return dataTaskId = JSON.parse(dataDecrypt)
  } else {
    return dataTaskId = []
  }
}