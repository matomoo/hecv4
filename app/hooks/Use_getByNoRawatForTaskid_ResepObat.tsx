import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { Schema_GetAllRegistrasiPeriksaForTaskid, Schema_getByNoRawatForTaskid_ResepObat } from '../schema/antrianPoliSchema';
import { apiUrl } from '@/constants';

const Use_getByNoRawatForTaskid_ResepObat = (noRawat: string) => {
  return useQuery<Schema_getByNoRawatForTaskid_ResepObat[], Error>({
    queryKey: ["getByNoRawatForTaskid_ResepObat", noRawat.replaceAll("/", "-")],
    queryFn: async () => {
      const response = await axios.get(apiUrl + "getByNoRawatForTaskid_ResepObat/" + noRawat.replaceAll("/", "-"));
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

export default Use_getByNoRawatForTaskid_ResepObat;
