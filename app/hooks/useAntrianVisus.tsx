import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { SchemaAntrianVisus } from '../schema/antrianPoliSchema';
import { apiUrl } from '@/constants';

const useAntrianVisus = () => {
  return useQuery<SchemaAntrianVisus[], Error>({
    queryKey: ["antrianVisus"],
    queryFn: async () => {
      const response = await axios.get(apiUrl + "getAllAntrianVisus");
      return response.data.response.data[0];
    },
    staleTime: 10 * 1000, //10s
    refetchInterval: 10 * 1000, //10s
    refetchIntervalInBackground: true
  });
};

export default useAntrianVisus;
