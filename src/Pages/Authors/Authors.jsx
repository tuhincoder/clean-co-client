import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Authors = () => {
    const { data } = useQuery({
        queryKey: ['authors'],
        queryFn: async () => {
            const res = await axios('authors.json')
            return res.data;
        }
    })
    console.log(data)
    return (
        <div>

        </div>
    );
};

export default Authors;