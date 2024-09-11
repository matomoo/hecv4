import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { SchemaDataLaporanOperasi } from '../schema/antrianPoliSchema';


const useDataLaporanOperasi = (noRawat: string) => {
  return useQuery<SchemaDataLaporanOperasi[], Error>({
    queryKey: ["dataLaporanOperasi", noRawat],
    queryFn: async () => {
      const response = await axios.get(`http://localhost/hec/apiv3/getByNoRawat_Operasi/${noRawat}`);
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
