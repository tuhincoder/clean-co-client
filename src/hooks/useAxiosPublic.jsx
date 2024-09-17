import axios from "axios";

const instance = axios.create({
    baseURL: 'https://clean-co-server-7ln9gcoxl-tuhins-projects-ebb2edde.vercel.app/api/v1',
    withCredentials: true
});

const useAxiosPublic = () => {

    return instance;
};

export default useAxiosPublic;