import { Link, useNavigate } from 'react-router-dom';
import login from '../assets/images/login/login.jpg'
import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import toast from 'react-hot-toast';
const Login = () => {
    const { signInUser } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        const toastId = toast.loading('signIn..')
        try {
            await signInUser(email, password)
            console.log('create');
            toast.success('logged in successfully..', { id: toastId })
            navigate('/')
        }
        catch (error) {
            console.log(error);
            toast.error(error.message, { id: toastId })
        }


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <img className='md:w-1/2' src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="login" />
                        </div>
                    </form>
                    <div className='divider'>Others Login</div>
                    <button className='btn btn-primary'>Google</button>
                    <p className='text-center text-2xl my-4'>new this here <Link to='/register' className='text-orange-500'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;