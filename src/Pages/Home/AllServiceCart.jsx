/* eslint-disable react/prop-types */
const AllServiceCart = ({ item }) => {

    return (
        <div>
            <div className="card w-96 glass">
                {/* <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure> */}
                <div className="card-body">
                    <h2 className="text-xl font-bold text-center">{item?.ServiceName}</h2>
                    <p className="text-xl text-orange-400 text-center">{item?.price}</p>
                    <p>{item?.description}</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServiceCart;