import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { Schema_GetDetailPenjualanObat } from '../schema/antrianPoliSchema';
import { apiUrl } from '@/constants';


const use_getDetailPenjualanObat = (nota_jual: string) => {
  return useQuery<Schema_GetDetailPenjualanObat[], Error>({
    queryKey: ["detailPenjualan", nota_jual],
    queryFn: async () => {
      const response = await axios.get(apiUrl + `getByNotaJual_Penjualan/${nota_jual}`);
      return response.data.response.data[0];
    },
    staleTime: 10 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });
};

export default use_getDetailPenjualanObat;
