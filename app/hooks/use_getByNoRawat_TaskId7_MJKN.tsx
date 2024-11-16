import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { Schema_getByNoRawat_TaskId7_MJKN } from '../schema/antrianPoliSchema';
import { apiUrl } from '@/constants';

const Use_getByNoRawat_TaskId7_MJKN = (noRawat: string) => {
  return useQuery<Schema_getByNoRawat_TaskId7_MJKN[], Error>({
    queryKey: ["getByNoRawat_TaskId7_MJKN", noRawat.replaceAll("/", "-")],
    queryFn: async () => {
      const response = await axios.get(apiUrl + "getByNoRawat_TaskId7_MJKN/" + noRawat.replaceAll("/", "-"));
      return response.data.response.data[0];
    },
    staleTime: 30 * 1000, //10s
    refetchInterval: 30 * 1000, //10s
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });
};

export default Use_getByNoRawat_TaskId7_MJKN;
