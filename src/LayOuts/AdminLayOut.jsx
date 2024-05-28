import { Outlet } from "react-router-dom";

const AdminLayOut = () => {
    return (
        <div className="flex h-screen">
            <div className="bg-green-500  flex-[1]">
                <h2> sidebar</h2>
            </div>

            <div className="bg-red-400  flex-[3]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminLayOut;