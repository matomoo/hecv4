'use client'
import { Flex, Typography } from 'antd';
import CardPoli from './_cardPoli';
import ListAntrianPoli from './_listAntrianPoli';

const { Title } = Typography;


const AdminAntrianPoli = () => {

  return (
    <Flex vertical >
      <Title>Menu Admin Antrian Poli </Title>
      <div className='flex w-full gap-4 p-4 bg-primary rounded-lg'>
        <div className='w-6/12' ><CardPoli namaPoli='POLI_1' /></div>
        <div className='w-6/12' ><CardPoli namaPoli='POLI_2' /></div>
      </div>
      <ListAntrianPoli />
    </Flex>
  )
}

export default AdminAntrianPoli