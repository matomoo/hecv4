'use client'
import useGetAllRegistrasiPeriksaForTaskid from '@/app/hooks/useGetAllRegistrasiPeriksaForTaskid';
import React from 'react'
import CardTaskId from './_cards';

const autoTaskidPage = () => {
  // get all no_booking today
  const { data: dataTaskid, isError, error, isLoading } = useGetAllRegistrasiPeriksaForTaskid();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  // console.log(dataTaskid)

  return (
    <div><CardTaskId data={dataTaskid!} /></div>
  )
}

export default autoTaskidPage