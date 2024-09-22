import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { Schema_GetAllRegistrasiPeriksaForTaskid } from '../schema/antrianPoliSchema';

const useGetAllRegistrasiPeriksaForTaskid = () => {
  return useQuery<Schema_GetAllRegistrasiPeriksaForTaskid[], Error>({
    queryKey: ["getAllRegistrasiPeriksaForTaskid"],
    queryFn: async () => {
      const response = await axios.get("https://hec1.hijr.de/hecapiv3/getAllRegistrasiPeriksaForTaskid");
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

export default useGetAllRegistrasiPeriksaForTaskid;
