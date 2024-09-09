import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { SchemaAntrianPoli } from '../schema/antrianPoliSchema';

const useAntrianPoli = () => {
  return useQuery<SchemaAntrianPoli[], Error>({
    queryKey: ["antrianPoli"],
    queryFn: async () => {
      const response = await axios.get("https://hec1.hijr.de/hecapiv3/getAllAntrianPoli");
      return response.data.response.data[0];
    },
    staleTime: 10 * 1000, //10s
    refetchInterval: 10 * 1000, //10s
    refetchIntervalInBackground: true
  });
};

export default useAntrianPoli;
