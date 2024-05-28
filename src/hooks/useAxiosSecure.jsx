import { useEffect } from "react";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";
import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
})

const useAxiosSecure = () => {
    // const { logOut } = useAuth()
    // const navigate = useNavigate()

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, err => {
            console.log('error', err.response);
            if (err.response.status === 401 || err.response.status === 403) {
                // logOut()
                //     .then(() => {
                //         navigate('/login')
                //     })
            }
        })
    }, [])


    return axiosSecure;
};

export default useAxiosSecure;