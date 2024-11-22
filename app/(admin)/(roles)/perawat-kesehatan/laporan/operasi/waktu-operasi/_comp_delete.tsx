"use client"
import { db } from '@/lib/db'
import React from 'react'
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';
import { HandlerDelete_tbl_waktu_operasi } from './_handler_delete';


const CompDelete = (value: any) => {

  const confirm: PopconfirmProps['onConfirm'] = async (e) => {
    // console.log(value.value.no_rawat);
    const aa = await HandlerDelete_tbl_waktu_operasi(value)
    console.log(aa)
    if (!aa) {
      message.success('Hapus data gagal. Coba lagi.');
    }
    message.success('Delete success');

  };

  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
    message.error('Batal hapus data');
  };

  return (
    <Popconfirm
      title="Hapus Data"
      description={`Yakin ingin menghapus data ini? ${value.value.no_rawat}`}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Button danger>Delete</Button>
    </Popconfirm>
    // <div className="flex gap-5">
    //   <Button
    //     // size="middle"
    //     onClick={async () =>
    //       await db.tbl_waktu_operasi.delete({
    //         where: {
    //           no_rawat: value.no_rawat
    //         }
    //       })
    //     }
    //   >
    //     <i className="ri-close-line"></i>
    //   </Button>
    // </div>
  )
}

export default CompDelete