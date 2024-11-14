import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { Schema_GetTblWaktuOperasi } from '../schema/antrianPoliSchema';
import { apiUrl } from '@/constants';


const Use_getTblWaktuOperasi = (tanggal1: string) => {
  return useQuery<Schema_GetTblWaktuOperasi[], Error>({
    queryKey: ["daftarWaktuOperasi", tanggal1],
    queryFn: async () => {
      const response = await axios.get(apiUrl + `getByTanggal__tbl_waktu_operasi/${tanggal1}`);
      return response.data.response.data[0];
    },
    staleTime: 10 * 1000, //10s
    refetchInterval: 10 * 1000, //10s
    refetchOnMount: true,
    refetchOnWindowFocus: 'always',
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });
};

export default Use_getTblWaktuOperasi;
