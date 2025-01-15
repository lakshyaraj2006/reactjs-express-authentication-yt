import React from 'react';
import { useForm } from "react-hook-form"
import axios from '../../api/api';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm({ mode: 'all' });

    const onSubmit = async (data) => {
        const response = await axios.post("/auth/login", JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
            .catch(error => {
                toast.error(error.response.data.message, {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            });
        const { success, message } = response.data;

        if (success) {
            toast.success(message, {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            
            reset({ username: "", password: "" });
            setAuth({ accessToken: response.data.accessToken });

            setTimeout(() => {
                navigate('/');
            }, 2600)
        } else {
            toast.error(message, {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className='h-screen bg-base-300 flex items-center justify-center'>
            <div className='p-4 bg-white rounded w-2/5'>
                <h1 className='text-primary text-2xl text-center underline font-semibold'>Login Using Credentials</h1>

                <form method='post' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="username" className='label-text'>Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            className="input input-bordered input-primary w-full"
                            {...register('username',
                                { required: { value: true, message: 'Username is required!' } }
                            )} />
                        {errors?.username && <p className='text-error'>{errors?.username?.message}</p>}
                    </div>
                    <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="password" className='label-text'>Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="input input-bordered input-primary w-full"
                            {...register('password',
                                { required: { value: true, message: 'Password is required!' } }
                            )}
                        />
                        {errors?.password && <p className='text-error'>{errors?.password?.message}</p>}
                    </div>
                    <button className='btn btn-primary btn-block'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login