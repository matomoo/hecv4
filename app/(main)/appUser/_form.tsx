"use client"
import usePetugas from "@/app/hooks/usePetugas";
import { AppUser, petugas } from "@prisma/client";
import { Button, Flex, Form, Input, Select } from "antd";

const { Option } = Select;

const ConnectAkunForm = (
  { user, handlerSubmit }: { user: AppUser, handlerSubmit: (values: any) => void }
) => {

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

  return (
    <>
      <Form variant="filled"
        layout="horizontal"
        initialValues={formData}
        labelAlign="left"
        labelCol={{ style: { marginTop: 2 }, span: 3 }}
        onFinish={handlerSubmit}
      >
        <Flex vertical gap={8}>
          <Form.Item label="Id" name="clerkId" className="hidden">
            <Input disabled />
          </Form.Item>
          <Form.Item name="nip">
            <Select
              style={{ width: 200 }}
            >
              {dataPetugas?.map((elm1: petugas) => {
                return <Option value={elm1.nip}>{elm1.nama}</Option>
              })}
            </Select>
          </Form.Item>


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