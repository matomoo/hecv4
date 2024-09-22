import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { Schema_GetAllRegistrasiPeriksaForTaskid } from '../schema/antrianPoliSchema';
import { apiUrl } from '@/constants';

const Use_GetAllRegistrasiPeriksaForTaskid = () => {
  return useQuery<Schema_GetAllRegistrasiPeriksaForTaskid[], Error>({
    queryKey: ["getAllRegistrasiPeriksaForTaskid"],
    queryFn: async () => {
      const response = await axios.get(apiUrl + "getAllRegistrasiPeriksaForTaskid");
      return response.data.response.data[0];
    },
    staleTime: 30 * 1000, //10s
    refetchInterval: 30 * 1000, //10s
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });
};

export default Use_GetAllRegistrasiPeriksaForTaskid;
