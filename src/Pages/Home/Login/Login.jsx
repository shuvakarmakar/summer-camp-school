import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true })
            });
    };


    const handleGoogleLogin = () => {
        // Handle Google login logic here
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-10 w-1/2">
                    <img src="" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    {...register('email', {
                                        required: true
                                    })}
                                    name="email"
                                    placeholder="email"
                                    className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                                />
                                {errors.email && <span className="text-xs text-error">{errors.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register('password', {
                                        required: true,
                                    })}
                                    name="password"
                                    placeholder="password"
                                    className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
                                />
                                {errors.password && <span className="text-xs text-error">{errors.password.message}</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Summer School Camp? Please <Link className='text-amber-300' to='/signup'>Sign Up</Link></p>
                        <button onClick={handleGoogleLogin} className="btn btn-outline">
                            <FaGoogle /> SignIn With Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;