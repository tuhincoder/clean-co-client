import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
    const { user, logOut } = useAuth()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <ul className="flex gap-2">
                <li><NavLink className={({ isActive }) => isActive ? 'btn btn-primary gtn-sm' : 'btn  btn-sm'} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'btn btn-primary gtn-sm' : 'btn  btn-sm'} to="/contact">Contact</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'btn btn-primary gtn-sm' : 'btn  btn-sm'} to="services">Services</NavLink></li>
                {
                    user?.email ? <>
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-primary gtn-sm' : 'btn  btn-sm'} to="/admin/service">Dashboard</NavLink></li>
                        <button onClick={handleLogOut}>LogOut</button>
                    </>
                        :
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-primary gtn-sm' : 'btn  btn-sm'} to="/login">Login</NavLink></li>
                }

            </ul>
        </div>
    );
};

export default NavBar;