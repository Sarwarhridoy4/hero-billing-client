import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const handelRegisterUser = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    // console.log(url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          // console.log(imgData.data.url);
          const task = {
            user: data.username,
            img: imgData.data.url,
            email: data.email,
            password: data.password,
          };
          // console.log(task);
          //   save task to the database
          fetch(
            "https://hero-billing-server-0-sarwarhridoy4.vercel.app/registration",
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(task),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              // console.log(result);
              toast.success(`${data.username} is added successfully`);
              navigate(`/`);
            });
        }
      });
  };

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h4 className='text-2xl uppercase'>Hero Billing</h4>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Register Your Account
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(handelRegisterUser)}
          className='mt-8 space-y-6'
          action='#'
          method='POST'
        >
          <div className='-space-y-px rounded-md shadow-sm'>
            <div>
              <label htmlFor='product-name' className='sr-only'>
                User Name
              </label>
              <input
                id='user-name'
                name='username'
                type='text'
                {...register("username", { required: "Provide User Name" })}
                autoComplete='username'
                aria-invalid={errors.username ? "true" : "false"}
                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='User Name'
              />
              {errors.username && (
                <p className='text-red-500 block' role='alert'>
                  {errors.username?.message}
                </p>
              )}
            </div>
            <label
              htmlFor='dropzone-file'
              className='flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-300 dark:text-gray-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'
                />
              </svg>

              <h2 className='mx-3 text-gray-400'>Photo</h2>

              <input
                id='dropzone-file'
                type='file'
                {...register("image", {
                  required: "Image is Required",
                })}
                className='hidden'
              />
              {errors.img && (
                <p className='text-red-500'>{errors.img.message}</p>
              )}
            </label>

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
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Register
            </button>
            <Link to='/login'>Already a User</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
