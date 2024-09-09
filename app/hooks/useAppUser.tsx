import { AppUser } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";


const useAppUser = (clerkId: string) => {
  return useQuery<AppUser, Error>({
    queryKey: ["appUser"],
    queryFn: async () => {
      // const response = await axios.get("/api/appUser");
      const response = await axios.get("http://localhost/hec/apiv3/getByIdAppUser/" + clerkId);
      return response.data.data;
    },
    staleTime: 10 * 1000
  });
};

export default useAppUser;
