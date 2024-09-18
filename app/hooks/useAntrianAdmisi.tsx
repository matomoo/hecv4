import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { SchemaAntrianAdmisi } from '../schema/antrianPoliSchema';

const useAntrianAdmisi = () => {
  return useQuery<SchemaAntrianAdmisi[], Error>({
    queryKey: ["antrianAdmisi"],
    queryFn: async () => {
      const response = await axios.get("https://hec1.hijr.de/hecapiv3/getAllAntrianAdmisi");
      return response.data.response.data[0];
    },
    staleTime: 10 * 1000, //10s
    refetchInterval: 10 * 1000, //10s
    refetchIntervalInBackground: true
  });
};

export default useAntrianAdmisi;
