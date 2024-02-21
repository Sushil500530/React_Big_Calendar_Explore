import axios from "axios";
import { useQuery } from "react-query";

const useAxiosPublic = () => {
   const {data:allEvent,refetch} = useQuery({
    queryKey: ['event'],
    queryFn: async ()=> {
        const res = await axios.get('http://localhost:5000/rutines')
        return res.data
    }
   });
   return [allEvent,refetch]
};

export default useAxiosPublic;