import { tblx_antrian_poli } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const useAntrianPeriksaPoli = (namaPoli: string) => {
  return useQuery<tblx_antrian_poli, Error>({
    queryKey: ["antrianPeriksaPoli" + namaPoli],
    queryFn: async () => {
      const response = await axios.get("/api/antrianPoli/" + namaPoli);
      return response.data.data;
    },
    staleTime: 10 * 1000 //10s
  });
};

export default useAntrianPeriksaPoli;
