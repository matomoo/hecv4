"use client"
import React from 'react'
import { Typography } from 'antd';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import TablePenjualan from '../_component/_tablePenjualan';
import FiltersDateOnly from '@/app/components/filtersDateOnly';
import FetchDataServer from './_fetchDataServer';

const { Title } = Typography;


const page = ({ searchParams }: { searchParams: any }) => {

  return (
    <div>
      <Title level={3}>Penjualan Obat</Title>
      <FiltersDateOnly searchParams={searchParams} />
      {Object.keys(searchParams).length === 0 ? 'Pilih tanggal' :
        <FetchDataServer searchParams={searchParams} />
      }
    </div>
  )
}

export default page