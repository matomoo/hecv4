"use server"

import axios from "axios";
import { decryptAndDecompressVclaim, prepareHeaderVclaim } from "../mjkn/handlerEncryptDecryptVclaim";

export async function Handler_Get_RujukanPeserta(
  { nomorrujukan }:
    { nomorrujukan: string }
) {

  let responseData = []
  // console.log('on server')
  // console.log(nomorrujukan)
  const headerContext = prepareHeaderVclaim();
  const apiUrlBpjs = 'https://apijkn.bpjs-kesehatan.go.id/vclaim-rest/Rujukan/Peserta/' + nomorrujukan
  const headerx = {
    "content-type": "application/json",
    "x-cons-id": headerContext["data1"],
    "x-timestamp": headerContext["data2"],
    "x-signature": headerContext["data3"],
    "user_key": headerContext["data4"],
  }

  const response: any = await axios.get(
    apiUrlBpjs,
    { headers: headerx }
  );
  // console.log(nomorrujukan)
  // console.log(response)
  // return response.data

  // receive data
  const key = headerContext["data1"] + headerContext["data5"] + headerContext["data2"]

  const dataDecrypt = decryptAndDecompressVclaim(
    response.data.response,
    key
  )

  if (dataDecrypt) {
    return responseData = [JSON.parse(dataDecrypt)]
  } else {
    return responseData = []
  }
}