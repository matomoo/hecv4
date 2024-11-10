import { apiUrl } from '@/constants';
import { jabatan, petugas } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { Schema_GetAllPetugas } from '../schema/antrianPoliSchema';

type petugasList = petugas & { jabatan: jabatan }

const usePetugas = () => {
  return useQuery<Schema_GetAllPetugas[], Error>({
    queryKey: ["petugas"],
    queryFn: async () => {
      const response = await axios.get(apiUrl + "getAll_Petugas");
      return response.data.response.data[0];
    },
    staleTime: 10 * 1000
  });
};

export default usePetugas;
