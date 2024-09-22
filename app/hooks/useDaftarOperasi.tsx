import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { SchemaDaftarOperasi } from '../schema/antrianPoliSchema';
import { apiUrl } from '@/constants';


const useDaftarOperasi = (tanggal1: string, tanggal2: string) => {
  return useQuery<SchemaDaftarOperasi[], Error>({
    queryKey: ["daftarOperasi", tanggal1, tanggal2],
    queryFn: async () => {
      const response = await axios.get(apiUrl + `getByDate_Operasi/${tanggal1}/${tanggal2}`);
      return response.data.response.data[0];
    },
    staleTime: 10 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });
};

export default useDaftarOperasi;
