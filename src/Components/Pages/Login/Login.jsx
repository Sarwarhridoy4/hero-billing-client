import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from "../../Contexts/Auth/AuthContext"

const Register = () => {
  const [users, setUsers] = useState([]);
  const {register,handleSubmit,formState: { errors },} = useForm();
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate()
  
  
  const handelSignIn = (data) => {
    console.log(data);
    
    const email = data.email;
    const password = data.password
    fetch('http://localhost:5000/login')
      .then(res => res.json())
      .then(data => setUsers(data))
    const user = users.filter(user=> user.email === email && user.password === password)
    setUser(user);
    navigate('/')
  };
  
  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h4 className='text-2xl uppercase'>Hero Billing</h4>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Login in Your Account
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(handelSignIn)}
          className='mt-8 space-y-6'
          action='#'
          method='POST'
        >
          <div className='-space-y-px rounded-md shadow-sm'>

            <div>
              <label htmlFor='user-email' className='sr-only'>
                User Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                {...register("email", { required: "Provide Your Email" })}
                autoComplete='email'
                aria-invalid={errors.email ? "true" : "false"}
                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Your Email'
              />
              {errors.email && (
                <p className='text-red-500 block' role='alert'>
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Your Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                {...register("password", {
                  required: "Provide Your Password",
                })}
                autoComplete='password'
                aria-invalid={errors.password ? "true" : "false"}
                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Provide Your Password'
              />
              {errors.password && (
                <p className='text-red-500 block' role='alert'>
                  {errors.password?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative uppercase flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Login
            </button>
            <Link to='/registration'>New User?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
