import React from 'react'

const Register = () => {
    return (
        <div className='h-screen bg-base-300 flex items-center justify-center'>
            <div className='p-4 bg-white rounded w-2/5'>
                <h1 className='text-primary text-2xl text-center underline font-semibold'>Register For New Account</h1>

                <form>
                    <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="username" className='label-text'>Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Choose unique username"
                            className="input input-bordered input-primary w-full" />
                    </div>
                    <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="email" className='label-text'>Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email address"
                            className="input input-bordered input-primary w-full" />
                    </div>
                    <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="password" className='label-text'>Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Choose a strong password"
                            className="input input-bordered input-primary w-full" />
                    </div>
                    <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="cpassword" className='label-text'>Confirm Password</label>
                        <input
                            type="password"
                            id="cpassword"
                            placeholder="Confirm your password"
                            className="input input-bordered input-primary w-full" />
                    </div>
                    <button className='btn btn-primary btn-block'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register