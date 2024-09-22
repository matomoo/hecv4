"use client"
import useMjknGetTaskid from '@/app/hooks/useMjknGetTaskid';
import { Schema_GetAllRegistrasiPeriksaForTaskid } from '@/app/schema/antrianPoliSchema'
import React from 'react'
import CardDetail from './_card';

const CardsTaskId = ({ data }: { data: Schema_GetAllRegistrasiPeriksaForTaskid[] }) => {

  return (
    <div>{data.map((elm: Schema_GetAllRegistrasiPeriksaForTaskid) => {
      return (
        <div key={elm.no_rawat} className='my-4'>
          <div>{elm.nm_pasien} / {elm.no_rawat} / {elm.no_sep} / {elm.nobooking}  </div>
          <CardDetail kodeBooking={elm.nobooking ?? elm.no_rawat} />
        </div>
      )
    })}</div>
  )
}

export default CardsTaskId