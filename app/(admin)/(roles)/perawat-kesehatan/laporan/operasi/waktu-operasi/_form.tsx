"use client"
import { Schema_GetTblWaktuOperasi } from '@/app/schema/antrianPoliSchema';
import { apiUrl } from '@/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Flex, Form, Input, message } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { usePathname, useRouter } from 'next/navigation';
import React, { useRef } from 'react';

interface IPage {
  resultWaktuOperasi: Schema_GetTblWaktuOperasi[]
  mode: string
}

const FormUpsertWaktuMasukOperasi = ({
  resultWaktuOperasi,
  mode
}: IPage) => {

  //#region - dayjs setting
  dayjs.locale("id");
  dayjs.extend(utc)
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Asia/Makassar");
  //#endregion

  const router = useRouter()
  const [messageApi, contextHolder] = message.useMessage();
  const [isSubmitting, setSubmitting] = React.useState(false);

  const mulaiOperasi = null

  let formData: any = {}
  if (mode === 'new') {
    mode = 'new'
    formData.tgl_operasi_masuk = dayjs().format("YYYY-MM-DD")
    formData.jam_operasi_masuk = dayjs().format("HH:mm:ss")
  } else {
    mode = 'update'
    formData.tgl_operasi_masuk = dayjs(mulaiOperasi).format("YYYY-MM-DD")
    formData.jam_operasi_masuk = dayjs(mulaiOperasi).format("HH:mm:ss")
  }

  const queryClient = useQueryClient();

  const [form] = Form.useForm();

  function handleKeyUp(event: any) {
    if (event.keyCode === 13) {
      form.submit();
    }
  }

  const mutationUpdate = useMutation({
    mutationFn: (newData: Schema_GetTblWaktuOperasi) => {
      const dataForm = {
        no_rawat: newData.no_rawat,
        tgl_operasi_masuk: dayjs().format("YYYY-MM-DD"),
        jam_operasi_masuk: dayjs().format("HH:mm:ss"),
      }

      axios.put(apiUrl + "updateBerkasDiterima__reg_periksa", dataForm)
      axios.put(apiUrl + "updateBerkasDiterima__mutasi_berkas", dataForm)

      return axios.put(apiUrl + "insert__tbl_waktu_operasi", dataForm)

    },

    onSuccess: (savedData, newData) => {
      queryClient.setQueryData<Schema_GetTblWaktuOperasi>(['daftarWaktuOperasi'], newData);
      messageApi.success("Jam operasi berhasil disimpan");
      handleFormReset();
      router.refresh();
    },
  })

  const handleFormReset = () => {
    form.resetFields();
  };

  const handleSubmit = async (values: any) => {
    try {
      mutationUpdate.mutate({
        ...resultWaktuOperasi[0],
        no_rawat: values.no_rawat,
        tgl_operasi_masuk: values.tgl_operasi_masuk,
        jam_operasi_masuk: values.jam_operasi_masuk,
      })
    } catch (error) {
      console.log(error)
      messageApi.error("Jam operasi gagal disimpan")
    }
  }

  return (
    <>
      {contextHolder}
      <div className='text-lg font-semibold mt-4'>Update Jam Masuk Operasi</div>
      <Form variant="filled"
        layout="horizontal"
        form={form}
        onKeyUp={handleKeyUp}
        initialValues={formData}
        labelAlign="left"
        labelCol={{ style: { marginTop: 2 }, span: 3 }}
        onFinish={handleSubmit}
        className='mt-4'
      >
        <Flex vertical gap={8}>
          <Form.Item name="no_rawat"
            labelCol={{ style: { marginTop: 2 }, span: 6 }}
            rules={[{ required: true, message: 'Please input!' }]}>
            <Input placeholder="Scan Gelang Pasien Operasi atau Input Nomor Rawat" />
          </Form.Item>

          <Form.Item label="Tanggal Masuk Operasi" name="tgl_operasi_masuk" className='hidden'
            labelCol={{ style: { marginTop: 2 }, span: 6 }}
            rules={[{ required: true, message: 'Please input!' }]}>
            <Input disabled />
          </Form.Item>
          <Form.Item label="Jam Masuk Operasi" name="jam_operasi_masuk" className='hidden'
            labelCol={{ style: { marginTop: 2 }, span: 6 }}
            rules={[{ required: true, message: 'Please input!' }]}>
            <Input disabled />
          </Form.Item>
          {/* <Button type="primary" htmlType="submit">
            Simpan
          </Button> */}
        </Flex>
      </Form>
    </>

  )
}

export default FormUpsertWaktuMasukOperasi;