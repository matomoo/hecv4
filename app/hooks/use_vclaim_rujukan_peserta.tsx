"use client"
import { useQuery } from '@tanstack/react-query';
import { HandlerGetListTaskId } from '../api/mjkn/handlerGetListTaskId';
import { Schema_GetTaskId, Schema_Response_RujukanPeserta } from '../schema/antrianPoliSchema';
import { Handler_Get_RujukanPeserta } from '../api/vclaim/handler_Get_RujukanPeserta';

const UseVclaimRujukanPeserta = (nomorrujukan: string) => {
  return useQuery<Schema_Response_RujukanPeserta[], Error>({
    queryKey: ["taskid", nomorrujukan],
    queryFn: async () => {
      const resQ = await Handler_Get_RujukanPeserta({ nomorrujukan });

      return resQ

    },
    // staleTime: 60 * 1000, //10s
    // refetchInterval: 60 * 1000, //10s
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });
};

export default UseVclaimRujukanPeserta;
