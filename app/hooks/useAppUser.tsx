import { AppUser } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";


const useAppUser = (clerkId: string) => {
  return useQuery<AppUser, Error>({
    queryKey: ["appUser"],
    queryFn: async () => {
      // const response = await axios.get("/api/appUser");
      const response = await axios.get("http://localhost/hec/apiv3/getByIdAppUser/" + clerkId);
      // console.log(response.data.response.data[0])
      return response.data.response.data[0];
    },
    staleTime: 10 * 1000
  });
};

export default useAppUser;
