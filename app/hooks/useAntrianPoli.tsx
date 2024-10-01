import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { SchemaAntrianPoli } from '../schema/antrianPoliSchema';
import { apiUrl } from '@/constants';

const useAntrianPoli = () => {
  return useQuery<SchemaAntrianPoli[], Error>({
    queryKey: ["antrianPoli"],
    queryFn: async () => {
      const response = await axios.get(apiUrl + "getAllAntrianPoli");
      return response.data.response.data[0];
    },
    staleTime: 10 * 1000, //10s
    refetchInterval: 10 * 1000, //10s
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });
};

export default useAntrianPoli;
