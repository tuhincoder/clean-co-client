import { useState } from "react";
import Authors from "../Authors/Authors";
import Banner from "../Shared/Banner";

import avatarImg from '../../assets/images/banner/banner.jpg'
import { Link } from "react-router-dom";

const Home = () => {
    // const [isOpen, setIsOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(false)
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
                        <h1>hi, mahmud</h1>
                        <h1>hi, mahmud</h1>
                        <h1>hello , how are you</h1>
                        <a href="">go</a>
                        <Link to={'/'} >home</Link>
                    </div>
                )}
            </div>
            {/* --------------*/}
            <div className="w-36 my-[100px] mx-auto">
                <div onClick={() => setOpenDropdown(!openDropdown)} className="border-[1px] border-red-400 p-4 md:py-2 md:px-2 rounded-md hover:shadow-2xl cursor-pointer duration-700 transition transform hover:-translate-y-2">
                    <h1> this is dropdown</h1>
                </div>
                {openDropdown && <div className="bg-black bg-opacity-30 rounded ml-9 px-2 mt-2">
                    <h1>this is open </h1>
                    <h1>dropdown</h1>
                </div>}
            </div>



            {/* ======= */}
            <div className="my-[100px] overflow-hidden w-96 rounded hover:shadow-2xl  relative transition duration-200 transform hover:-translate-y-2 shadow-sm mx-auto">
                <img
                    src={avatarImg} alt=" "
                    className="w-full h-54 md:h-64 xl:h-80 object-cover rounded "
                />
            </div>

            <div className="my-20">
                <div className="w-96 border mx-auto hover:shadow-xl  relative border-red-500 hover:-translate-y-2  transition duration-1000">
                    <img className="w-full md:h-64 xl:h-72 object-cover rounded-xl " src={avatarImg} alt="" />
                </div>
            </div>
            {/* ------- */}

            {/* ----------------- */}
            <div className="w-1/2 mx-auto shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-200">
                <img className="w-full rounded md:h-64 xl:h-72 object-cover" src={avatarImg} alt="" />
            </div>
            {/* ------------------ */}

            {/* <div>

                <div className="px-6 py-4 border border-red-600 bg-black text-gray-300 bg-opacity-75  inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col relative">

                    <div className="absolute">
                        <p>thrina</p>
                        <p>beautiful is so nice girl and the point is he is most beautiful girl in the world i like him</p>
                        <p>australia</p>
                        <p className="text-center  mx-auto text-2xl hover:text-blue-600  ">bookmark</p>
                        <p className="mt-auto">bangladesh</p>
                    </div>
                </div>
            </div> */}
            {/* ------------- */}
            <div className="w-11/12 mx-auto border-gray-400 p-5 border-s-4 ps-3">
                <div className="my-20  relative  ">
                    <h2 className="text-5xl capitalize font-bold mx-auto flex text-center justify-center">This extra atentione for you.</h2>
                    <p className="absolute bottom-0 left-32 capitalize  opacity-10 text-8xl ">this service for  for you</p>
                </div>
            </div>
            {/* --------------- */}
            <div className="my-20 bg-blue-500 bg-opacity-25">
                <div className="flex max-w-screen-xl mx-auto h-[500px] border border-red-400 overflow-hidden">
                    <div className="flex-1 p-5">
                        <img src={avatarImg} alt="" />
                    </div>
                    <div className=" flex-1 ">
                        <div className="p-10">

                            <div className="border">
                                <div className="bg-white  relative opacity-50">
                                    <img className=" absolute top-0 left-0 w-12 h-12 rounded-full" src={avatarImg} alt="" />
                                    <div className="">
                                        <h2 className="text-3xl capitalize">this is a card component</h2>
                                        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, id minima commodi quas doloribus impedit earum officia porro dicta exercitationem deleniti sint. Suscipit consequatur dolorum adipisci est fuga dolorem asperiores praesentium ut cum distinctio, officia quas molestias mollitia saepe tempore amet voluptatem. Laboriosam asperiores at, voluptatum unde provident fugiat totam.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded z-10 ">
                                <div className="bg-white  relative p-5 drop-shadow-2xl rounded-xl">
                                    <img className=" absolute top-0 left-0 w-12 h-12 rounded-full" src={avatarImg} alt="" />
                                    <div className="pt-10">
                                        <h2 className="text-3xl capitalize">this is a card component</h2>
                                        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, id minima commodi quas doloribus impedit earum officia porro dicta exercitationem deleniti sint. Suscipit consequatur dolorum adipisci est fuga dolorem asperiores praesentium ut cum distinctio, officia quas molestias mollitia saepe tempore amet voluptatem. Laboriosam asperiores at, voluptatum unde provident fugiat totam.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border opacity-50">
                                <div className="bg-white  relative">
                                    <img className=" absolute top-0 left-0 w-12 h-12 rounded-full" src={avatarImg} alt="" />
                                    <div className="pt-10">
                                        <h2 className="text-3xl capitalize">this is a card component</h2>
                                        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, id minima commodi quas doloribus impedit earum officia porro dicta exercitationem deleniti sint. Suscipit consequatur dolorum adipisci est fuga dolorem asperiores praesentium ut cum distinctio, officia quas molestias mollitia saepe tempore amet voluptatem. Laboriosam asperiores at, voluptatum unde provident fugiat totam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;