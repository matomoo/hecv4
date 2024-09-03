import { queryOptions } from "@tanstack/react-query";
import axios from "axios";

export const useAppUserOptions = queryOptions({
  queryKey: ["appUser"],
  queryFn: async () => {
    const response = await axios.get("/api/appUser");
    return response.data.data;
  },
  staleTime: 10 * 1000,
});
