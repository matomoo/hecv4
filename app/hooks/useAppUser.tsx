import { AppUser } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";


const useAppUser = (clerkId: string) => {
  return useQuery<AppUser, Error>({
    queryKey: ["appUser"],
    queryFn: async () => {
      const response = await axios.get("https://hec1.hijr.de/hecapiv3/getById_AppUser/" + clerkId);
      return response.data.response.data[0];
    },
    staleTime: 10 * 1000
  });
};

export default useAppUser;
