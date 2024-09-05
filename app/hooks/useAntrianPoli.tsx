import { queryOptions, useQuery } from '@tanstack/react-query';
import axios from "axios";
import { SchemaAntrianPoli } from '../schema/antrianPoliSchema';

// export const useAntrianPoli = queryOptions({
//   queryKey: ["antrianPoli"],
//   queryFn: async () => {
//     const response = await axios.get("/api/antrianPoli");
//     return response.data.data;
//   },
//   staleTime: 10 * 1000,
// });

const useAntrianPoli = () => {
  return useQuery<SchemaAntrianPoli[], Error>({
    queryKey: ["antrianPoli"],
    queryFn: async () => {
      const response = await axios.get("/api/antrianPoli");
      return response.data.data;
    },
    staleTime: 10 * 1000 //10s
  });
};

export default useAntrianPoli;
