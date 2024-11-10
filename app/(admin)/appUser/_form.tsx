"use client"
import usePetugas from "@/app/hooks/usePetugas";
import { Schema_GetAllPetugas, Schema_GetAppUser } from "@/app/schema/antrianPoliSchema";
import { AppUser, jabatan, petugas } from "@prisma/client";
import { Button, Flex, Form, Input, Select } from "antd";

const { Option } = Select;

type petugasList = petugas & { jabatan: jabatan }

const ConnectAkunForm = (
  {
    user, handlerSubmit
  }: {
    user: Schema_GetAppUser, handlerSubmit: (values: any) => void
  }
) => {

  const [form] = Form.useForm();
  const { data: dataPetugas, isError, isLoading } = usePetugas();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>error</p>;

  let formData: any = {}
  let mode = 'new'
  if (user.nip === null) {
    formData.clerkId = user.clerkUserId
    formData.nip = user.nip
  } else {
    mode = 'update'
    formData = user
  }

  const handleChange = (value: string) => {
    const filter1 = dataPetugas?.filter((elm1) => elm1.nip === value)
    // console.log(filter1![0].nm_jbtn)
    form.setFieldValue('nm_jbtn', filter1![0].nm_jbtn)
    // console.log(`selected ${value}`);
  };

  return (
    <>
      <Form variant="filled"
        form={form}
        layout="horizontal"
        initialValues={formData}
        labelAlign="left"
        labelCol={{ style: { marginTop: 2 }, span: 3 }}
        onFinish={handlerSubmit}
      >
        <Flex vertical gap={8}>
          <div>Pilih user</div>
          <Form.Item label="Id" name="clerkId" className="hidden">
            <Input disabled />
          </Form.Item>
          <Form.Item name="nip">
            <Select onChange={handleChange}
              style={{ width: 400 }}
            >
              {dataPetugas?.map((elm1: Schema_GetAllPetugas) => {
                return <Option key={elm1.nip} value={elm1.nip}>{elm1.nama}</Option>
              })}
            </Select>
          </Form.Item>

          <Form.Item name="nm_jbtn" className="">
            <Input disabled />
          </Form.Item>
          {/* <div>Password</div>
          <Form.Item name="password" >
            <Input />
          </Form.Item> */}

          {/* TODO : add loading indicator icon */}
          <Button type="primary" htmlType="submit">
            Konek Akun
          </Button>
        </Flex>
      </Form>


    </>
  )
}

export default ConnectAkunForm;