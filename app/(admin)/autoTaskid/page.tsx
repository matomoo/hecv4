'use client'
import Use_GetAllRegistrasiPeriksaForTaskid from '@/app/hooks/useGetAllRegistrasiPeriksaForTaskid';
import React from 'react'
import CardTaskId from './_cards';

const autoTaskidPage = () => {
  // get all no_booking today
  const { data: dataTaskid, isError, error, isLoading } = Use_GetAllRegistrasiPeriksaForTaskid();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  // setInterval(() => {
  //   window.location.reload();
  // }, 10 * 60 * 1000);

  return (
    <div><CardTaskId data={dataTaskid!} /></div>
  )
}

export default autoTaskidPage