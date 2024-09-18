'use client'
import { Flex, Typography } from 'antd';
import CardPoli from './_cardPoli';
import ListAntrianPoli from './_listAntrianPoli';

const { Title } = Typography;


const AdminAntrianPoli = () => {

  return (
    <Flex vertical >
      <Title>Menu Admin Antrian Poli </Title>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-4 bg-primary rounded-lg'>
        <div className='' ><CardPoli namaPoli='POLI_1' /></div>
        <div className='' ><CardPoli namaPoli='POLI_2' /></div>
      </div>
      <ListAntrianPoli />
    </Flex>
  )
}

export default AdminAntrianPoli