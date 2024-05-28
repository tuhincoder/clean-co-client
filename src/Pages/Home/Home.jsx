import { useState } from "react";
import Authors from "../Authors/Authors";
import Banner from "../Shared/Banner";
import useAuth from "../../hooks/useAuth";
import avatarImg from '../../assets/images/banner/banner.jpg'
import { Link } from "react-router-dom";

const Home = () => {
    // const [isOpen, setIsOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <Banner></Banner>
            <Authors></Authors>
            {/* <div
                onClick={() => setIsOpen(!isOpen)}
                className=" w-1/4 mx-auto my-20 ">
                <div className="menu p-4 md:py-1 md:px-3 border-[1px] rounded-full border-neutral-200 flex flex-row items-center gap-3 cursor-pointer hover:shadow-md ">
                    <div className="hidden md:block">
                        <img src={abaterImg}
                            className="rounded-full"
                            alt="profile"
                            height='60'
                            width='60'
                        />
                    </div>
                </div>
                <div>
                    {isOpen && (
                        <div className=" rounded-xl shadow-md w-[40vw] md:w-[10vw] mt-3  bg-red-500   ">
                            <h2>mahmudul hasan tuhin</h2>
                        </div>
                    )

                    }
                </div>
            </div> */}
            {/* --------------------- */}
            <div className="w-2/12 mx-auto my-[100px]">
                <div onClick={() => setIsOpen(!isOpen)} className="  p-4 md:py-1 md:px-3  border-[1px] rounded-full border-neutral-500  cursor-pointer hover:shadow-2xl duration-500  ">
                    <div className="flex gap-2 flex-row items-center justify-center">
                        <h2>this is </h2>
                        <h2>Dropdown</h2>

                    </div>
                </div>
                {/* dropdown */}
                {isOpen && (
                    <div className="bg-slate-300 rounded-md mt-3 p-3 duration-700 ">
                        <h1>hi, mahmud</h1>
                        <h1>hello , how are you</h1>
                        <a href="">go</a>
                        <Link to={'/'} >home</Link>
                    </div>
                )}
            </div>


            {/* ======= */}
            <button className="mobile-menu-button p-4 ease-in-out focus:outline-none focus:bg-gray-300">hello world</button>
            <img className="my-20 mx-auto w-1/2 " src={avatarImg} alt="profile" />

        </div>
    );
};

export default Home;