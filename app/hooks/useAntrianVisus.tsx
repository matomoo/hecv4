import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { SchemaAntrianVisus } from '../schema/antrianPoliSchema';

const useAntrianVisus = () => {
  return useQuery<SchemaAntrianVisus[], Error>({
    queryKey: ["antrianVisus"],
    queryFn: async () => {
      const response = await axios.get("https://hec1.hijr.de/hecapiv3/getAllAntrianVisus");
      return response.data.response.data[0];
    },
    staleTime: 10 * 1000, //10s
    refetchInterval: 10 * 1000, //10s
    refetchIntervalInBackground: true
  });
};

export default useAntrianVisus;
