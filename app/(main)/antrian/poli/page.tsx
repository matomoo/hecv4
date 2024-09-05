'use client'
import useAntrianPoli from '@/app/hooks/useAntrianPoli';
import { Card, Flex, List, Space } from 'antd'
import React from 'react'
import { Typography } from 'antd';
import { useSuspenseQuery } from '@tanstack/react-query';
import { SchemaAntrianPoli } from '@/app/schema/antrianPoliSchema';
import BtnConnectAkun from '../../appUser/_btnConnectAkun';
import BtnSetPoli from './_btnSetPoli';
import CardPoli1 from './_cardPoli';
import CardPoli2 from './_cardPoli2';
import ListAntrianPoli from './_listAntrianPoli';
import CardPoli from './_cardPoli';

const { Title } = Typography;


const AdminAntrianPoli = () => {

  return (
    <Flex vertical >
      <Title>Menu Admin Antrian Poli </Title>
      <div className='flex w-full gap-4 bg-slate-500'>
        <div className='w-6/12' ><CardPoli namaPoli='POLI 1' /></div>
        <div className='w-6/12' ><CardPoli namaPoli='POLI 2' /></div>
      </div>
      <ListAntrianPoli />
    </Flex>
  )
}

export default AdminAntrianPoli