import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AllServiceCart from "./AllServiceCart";
// import AllServiceCart from "./AllServiceCart";

const AllServices = () => {
    const axiosSecure = useAxiosSecure()

    // const getServices = async () => {
    //     const res = await axiosSecure.get('/services')
    //     return res
    // }

    // const { data: services, isError, isLoading, error } = useQuery({
    //     queryKey: ['services'],
    //     queryFn: getServices

    // })
    const { data: services, isError, isLoading, error } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosSecure.get('/services')
            return res.data
        }
    })
    // console.log(service);


    if (isLoading) {
        return <p>loading..</p>
    }


    if (isError) {
        return <p>something is wrong went {error}</p>
    }
    return (
        <div className="grid grid-cols-3 gap-10 mt-10">
            {
                services.map(item => <AllServiceCart
                    key={item._id}
                    item={item}
                ></AllServiceCart>)
            }
        </div>
    );
};

export default AllServices;