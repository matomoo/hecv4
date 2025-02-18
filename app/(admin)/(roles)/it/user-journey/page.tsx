"use client"
import Use_GetAllRegistrasiPeriksaForTaskid from '@/app/hooks/useGetAllRegistrasiPeriksaForTaskid';
import { Schema_GetAllRegistrasiPeriksaForTaskid } from '@/app/schema/antrianPoliSchema';
import { Space, Tag } from 'antd';
import React from 'react'
import Card_Tid3_MJKN from './_card_tid3_mjkn';
import Card_Tid4_MJKN from './_card_tid4_mjkn';
import Card_Tid5_MJKN from './_card_tid5_mjkn';
import Card_Tid6_MJKN from './_card_tid6_mjkn';
import Card_Tid7_MJKN from './_card_tid7_mjkn';

const page = () => {
  const { data: dataTaskid, isError, error, isLoading } = Use_GetAllRegistrasiPeriksaForTaskid();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;


  return (
    <div>
      <div className='text-xl font-semibold'>User Journey</div>
      <div>{dataTaskid!.map((elm: Schema_GetAllRegistrasiPeriksaForTaskid, idx: number) => {
        return (
          <div key={idx} className='my-4'>
            <Space>
              {elm.nm_pasien}
              <Tag>{elm.no_rawat}</Tag>
              <Tag>{elm.no_sep}</Tag>
              <Tag>{elm.nobooking}</Tag>
            </Space>
            <Card_Tid3_MJKN no_rawat={elm.no_rawat} />
            <Card_Tid4_MJKN no_rawat={elm.no_rawat} />
            <Card_Tid5_MJKN no_rawat={elm.no_rawat} />
            <Card_Tid6_MJKN no_rawat={elm.no_rawat} />
            <Card_Tid7_MJKN no_rawat={elm.no_rawat} />
          </div>
        )
      })}</div>
    </div>
  )
}

export default page