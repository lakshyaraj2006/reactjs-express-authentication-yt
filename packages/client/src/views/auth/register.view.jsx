import React from 'react'
import { useForm } from 'react-hook-form'

const Register = () => {
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors }
    } = useForm({ mode: 'all' });

    const password = watch('password');

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='h-screen bg-base-300 flex items-center justify-center'>
            <div className='p-4 bg-white rounded w-2/5'>
                <h1 className='text-primary text-2xl text-center underline font-semibold'>Register For New Account</h1>

                <form method='post' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="username" className='label-text'>Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Choose unique username"
                            className="input input-bordered input-primary w-full"
                            {...register('username',
                                { 
                                    required: { value: true, message: 'Username is required!' },
                                    minLength: {value: 6, message: 'Username must contain atleast 6 characters!'},
                                    maxLength: {value: 12, message: 'Username must contain atmost 12 characters!'}
                                }
                            )} />
                        {errors?.username && <p className='text-error'>{errors?.username?.message}</p>}
                    </div>
                    <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="email" className='label-text'>Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email address"
                            className="input input-bordered input-primary w-full"
                            {...register('email',
                                {
                                    required: { value: true, message: 'Email is required!' },
                                    pattern: { value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message: 'Invalid email address!' }
                                }
                            )} />
                        {errors?.email && <p className='text-error'>{errors?.email?.message}</p>}
                    </div>
                    <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="password" className='label-text'>Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Choose a strong password"
                            className="input input-bordered input-primary w-full"
                            {...register('password',
                                { 
                                    required: { value: true, message: 'Password is required!' },
                                    minLength: {value: 8, message: 'Password must contain atleast 8 characters!'}
                                }
                            )} />
                        {errors?.password && <p className='text-error'>{errors?.password?.message}</p>}
                    </div>
                    <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="cpassword" className='label-text'>Confirm Password</label>
                        <input
                            type="password"
                            id="cpassword"
                            placeholder="Confirm your password"
                            className="input input-bordered input-primary w-full"
                            {...register('cpassword',
                                { 
                                    required: { value: true, message: 'Confirm Password is required!' },
                                    validate: (value) => password === value || 'Passwords do not match!'
                                }
                            )} />
                        {errors?.cpassword && <p className='text-error'>{errors?.cpassword?.message}</p>}
                    </div>
                    <button className='btn btn-primary btn-block'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register