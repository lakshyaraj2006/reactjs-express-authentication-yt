import React from 'react'

const Login = () => {
    return (
        <div className='h-screen bg-base-300 flex items-center justify-center'>
            <div className='p-4 bg-white rounded w-2/5'>
                <h1 className='text-primary text-2xl text-center underline font-semibold'>Login Using Credentials</h1>

                <form>
                    <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="username" className='label-text'>Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            className="input input-bordered input-primary w-full" />
                    </div>
                    <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="password" className='label-text'>Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="input input-bordered input-primary w-full" />
                    </div>
                    <button className='btn btn-primary btn-block'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login