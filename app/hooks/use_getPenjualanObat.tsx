import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { Schema_GetPenjualanObat } from '../schema/antrianPoliSchema';
import { apiUrl } from '@/constants';


const use_getPenjualanObat = (tanggal1: string, tanggal2: string) => {
  return useQuery<Schema_GetPenjualanObat[], Error>({
    queryKey: ["daftarPenjualan", tanggal1, tanggal2],
    queryFn: async () => {
      const response = await axios.get(apiUrl + `getByTanggal_Penjualan/${tanggal1}/${tanggal2}`);
      return response.data.response.data[0];
    },
    staleTime: 10 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });
};

export default use_getPenjualanObat;
