"use client"
import { SchemaDataLaporanOperasi, SchemaFormUpdateLaporanOperasi } from '@/app/schema/antrianPoliSchema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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

  const mulaiOperasi = resultLaporanOperasi?.[0].tanggal
  const selesaiOperasi = resultLaporanOperasi?.[0].selesaioperasi

  let formData: any = {}
  let mode = 'new'
  if (resultLaporanOperasi === null) {
    mode = 'new'
  } else {
    mode = 'update'
    formData.mulai = dayjs.utc(mulaiOperasi).format("YYYY-MM-DD HH:mm:ss")
    formData.mulai2 = dayjs.utc(mulaiOperasi).format("YYYY-MM-DD HH:mm:ss")
    formData.selesai = dayjs.utc(selesaiOperasi).format("YYYY-MM-DD HH:mm:ss")
  }

  const queryClient = useQueryClient();

  const mutationUpdate = useMutation({
    mutationFn: (newData: SchemaFormUpdateLaporanOperasi) => {
      const dataForm = {
        tanggalidx: newData.tanggalidx,
        tanggal: newData.tanggal,
        selesaioperasi: newData.selesaioperasi,
        no_rawat: newData.no_rawat
      }
      return axios.put('https://hec1.hijr.de/hecapiv3/updateWaktuLaporanOperasi', dataForm)
    },

    onSuccess: (savedData, newData) => {
      queryClient.setQueryData<SchemaFormUpdateLaporanOperasi>(['updateWaktuLaporanOperasi'], newData);
      messageApi.success("Jam operasi berhasil disimpan")
    },
  })


  const handleSubmit = async (values: any) => {
    try {

      mutationUpdate.mutate({
        ...resultLaporanOperasi[0],
        tanggal: values.mulai2,
        selesaioperasi: values.selesai,
        tanggalidx: values.mulai,
      })

    } catch (error) {
      console.log(error)
      messageApi.error("Jam operasi gagal disimpan")
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