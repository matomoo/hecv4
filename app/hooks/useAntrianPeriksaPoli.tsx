import { tblx_antrian_poli } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const useAntrianPeriksaPoli = (namaPoli: string) => {
  return useQuery<tblx_antrian_poli, Error>({
    queryKey: ["antrianPeriksaPoli" + namaPoli],
    queryFn: async () => {
      const response = await axios.get("https://hec1.hijr.de/hecapiv3/getByPoliTblxAntrianPoli/" + namaPoli);
      return response.data.response.data[0][0];
    },
    staleTime: 10 * 1000, //10s
    // refetchInterval: 10 * 1000, //10s
    // refetchIntervalInBackground: true
  });
};

export default useAntrianPeriksaPoli;
