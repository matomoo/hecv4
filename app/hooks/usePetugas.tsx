import { apiUrl } from '@/constants';
import { petugas } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";


const usePetugas = () => {
  return useQuery<petugas[], Error>({
    queryKey: ["petugas"],
    queryFn: async () => {
      const response = await axios.get(apiUrl + "getAll_Petugas");
      return response.data.response.data[0];
    },
    staleTime: 10 * 1000
  });
};

export default usePetugas;
