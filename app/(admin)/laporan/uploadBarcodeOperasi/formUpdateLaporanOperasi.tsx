"use client"
import { SchemaDataLaporanOperasi } from '@/app/schema/antrianPoliSchema';
import { Button, Flex, Form, Input, message } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { useRouter } from 'next/navigation';
import React from 'react';


interface IPage {
  resultLaporanOperasi: SchemaDataLaporanOperasi[]
}

const FormUpdateLaporanOperasi = ({
  resultLaporanOperasi,
}: IPage) => {

  //#region - dayjs setting
  dayjs.locale("id");
  dayjs.extend(utc)
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Asia/Makassar");
  //#endregion

  const [messageApi, contextHolder] = message.useMessage();
  const [isSubmitting, setSubmitting] = React.useState(false);

  const format = 'HH:mm';

  // laporan operasi mulai
  // console.log(resultLaporanOperasi?.[0].tanggal)
  const mulaiOperasi = resultLaporanOperasi?.[0].tanggal
  // laporan operasi selesai
  const selesaiOperasi = resultLaporanOperasi?.[0].selesaioperasi
  const router = useRouter();


  let formData: any = {}
  let mode = 'new'
  if (resultLaporanOperasi === null) {
    mode = 'new'
    // formData.mulai = dayjs.utc(mulaiOperasi).format("YYYY-MM-DD HH:mm:ss")
    // formData.selesai = dayjs.utc(selesaiOperasi).format("YYYY-MM-DD HH:mm:ss")
  } else {
    mode = 'update'
    formData.mulai = dayjs.utc(mulaiOperasi).format("YYYY-MM-DD HH:mm:ss")
    formData.mulai2 = dayjs.utc(mulaiOperasi).format("YYYY-MM-DD HH:mm:ss")
    formData.selesai = dayjs.utc(selesaiOperasi).format("YYYY-MM-DD HH:mm:ss")
  }

  const handleSubmit = async (values: any) => {
    try {
      setSubmitting(true);
      const finalValues = { ...values }
      finalValues.no_rawat = resultLaporanOperasi[0].no_rawat
      finalValues.mulai = values.mulai.replace(" ", "T") + "Z"
      finalValues.mulai2 = values.mulai2.replace(" ", "T") + "Z"
      finalValues.selesai = values.selesai.replace(" ", "T") + "Z"
      // console.log(finalValues.mulai.replace(" ", "T") + "0Z")

      await axios.patch('/api/v2/laporan-operasi/' + finalValues.no_rawat.replaceAll("/", "-"), finalValues);
      router.push('/ralan/registrasi/laporan-operasi/' + finalValues.no_rawat.replaceAll("/", "-"));
      router.refresh();
      messageApi.success("Jam operasi berhasil disimpan")
    } catch (error) {
      // console.log(error)
      messageApi.error("Jam operasi gagal disimpan")
      setSubmitting(false);
    }
  }

  return (
    <>
      {contextHolder}
      <div>Form Update Jam Laporan Operasi</div>
      <Form variant="filled"
        layout="horizontal"
        initialValues={formData}
        labelAlign="left"
        labelCol={{ style: { marginTop: 2 }, span: 3 }}
        onFinish={handleSubmit}
      >
        <Flex vertical gap={8}>
          <Form.Item label="Tanggal Mulai Operasi" name="mulai" className='hidden'
            labelCol={{ style: { marginTop: 2 }, span: 6 }}
            rules={[{ required: true, message: 'Please input!' }]}>
            <Input disabled />
          </Form.Item>
          <Form.Item label="Tanggal Mulai Operasi" name="mulai2"
            labelCol={{ style: { marginTop: 2 }, span: 6 }}
            rules={[{ required: true, message: 'Please input!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Tanggal Selesai Operasi" name="selesai"
            labelCol={{ style: { marginTop: 2 }, span: 6 }}
            rules={[{ required: true, message: 'Please input!' }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Update Data
          </Button>
        </Flex>
      </Form>
    </>

  )
}

export default FormUpdateLaporanOperasi