import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { SchemaDataLaporanOperasi } from '../schema/antrianPoliSchema';
import { apiUrl } from '@/constants';


const useDataLaporanOperasi = (noRawat: string) => {
  return useQuery<SchemaDataLaporanOperasi[], Error>({
    queryKey: ["dataLaporanOperasi", noRawat],
    queryFn: async () => {
      const response = await axios.get(apiUrl + `getByNoRawat_Operasi/${noRawat}`);
      return response.data.response.data[0];
    },
    staleTime: 10 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });
};

export default useDataLaporanOperasi;
