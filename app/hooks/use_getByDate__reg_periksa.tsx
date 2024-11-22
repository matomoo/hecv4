import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Schema_getByDate__reg_periksa } from "../schema/antrianPoliSchema";
import { apiUrl } from "@/constants";

const Use_getByDate__reg_periksa = (tanggal1: string, tanggal2: string) => {
  return useQuery<Schema_getByDate__reg_periksa[], Error>({
    queryKey: ["getByDate__reg_periksa", tanggal1, tanggal2],
    queryFn: async () => {
      const response = await axios.get(
        `${apiUrl}getByDate__reg_periksa/${tanggal1}/${tanggal2}`
      );
      return response.data.response.data[0];
    },
    staleTime: 30 * 1000, //10s
    refetchInterval: 30 * 1000, //10s
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });
};

export default Use_getByDate__reg_periksa;
