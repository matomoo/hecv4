"use client"
import React from 'react'
import { Typography } from 'antd';
import FiltersDateOnly from '@/app/components/filtersDateOnly';
import FetchDataServer from './_fetchDataServer';
import Loader from '@/app/components/loader';

const { Title } = Typography;


const page = ({ searchParams }: { searchParams: any }) => {

  return (
    <div>
      <Title level={3}>Penjualan Obat</Title>
      <FiltersDateOnly searchParams={searchParams} />
      {Object.keys(searchParams).length === 0 ? <Loader /> :
        <FetchDataServer searchParams={searchParams} />
      }
    </div>
  )
}

export default page