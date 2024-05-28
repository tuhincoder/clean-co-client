import Container from '../../LayOuts/Container';
import banner from '.././../assets/images/banner/banner.jpg'
const Banner = () => {
    return (
        <Container>
            <div className="hero min-h-[500px] bg-base-200 my-10">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className='flex-1 ml-10'>
                        <img src={banner} className="w-full h-3/4 rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex flex-col text-center items-center flex-1 '>
                        <h1 className="text-5xl font-bold">Cleaning is the  <br /> removing <span className='text-primary'>unwanted substances!</span></h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='divider'></div>
                        <div className=' flex'>
                            <button className="btn btn-primary">Cleaning service</button>
                            <button className="btn btn-secondary ml-2 focus:outline-offset-4 focus:bg-gray-200">Se more text....</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;