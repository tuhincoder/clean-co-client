import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div >
            <div className="relative border">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="btn btn-square btn-ghost absolute right-5">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" ></path></svg> */}
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                </label>
            </div>


            <div className="mt-20">
                <ul className="">
                    <li><NavLink className={({ isActive }) => isActive ? 'btn btn-primary gtn-sm' : 'btn  btn-sm'} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'btn btn-primary gtn-sm' : 'btn  btn-sm'} to="/contact">Contact</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'btn btn-primary gtn-sm' : 'btn  btn-sm'} to="/login">Login</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'btn btn-primary gtn-sm' : 'btn  btn-sm'} to="/admin/service">Dashboard</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;