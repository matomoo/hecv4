import { queryOptions } from "@tanstack/react-query";
import axios from "axios";

export const appUserOptions = queryOptions({
  queryKey: ["appUser"],
  queryFn: async () => {
    const response = await axios.get("/api/appUser");
    return response.data.data;
  },
});
