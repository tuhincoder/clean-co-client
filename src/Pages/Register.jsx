import { Link, useNavigate } from 'react-router-dom';
import login from '../assets/images/login/login.jpg'
import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import toast from 'react-hot-toast';
const Register = () => {
    const { createUser } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleRegister = async (e) => {
        e.preventDefault()

        const toastId = toast.loading('REGISTER...')

        try {
            await createUser(email, password)
            toast.success('register in', { id: toastId })
            navigate('/')

        }
        catch (err) {
            console.log(err);
            toast.error(err.massage, { id: toastId })
        }

    }

    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200 lg:pl-40">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        <img className='w-1/2 ml-5' src={login} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={(e) => setEmail(e.target.value)} name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Register" />
                            </div>
                        </form>
                        <div className='divider'>Others Login</div>
                        <button className='btn btn-primary'>Google</button>
                        <p className='text-center text-2xl my-4'>already have an account<Link to='/login' className='text-orange-500'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;