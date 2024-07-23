import React from 'react';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
function Register() {
  const { register, handleSubmit } = useForm();
  
  const submit = (data) => {
    alert("Don't try to log in right now; the website is not complete yet. It is just the frontend, and the backend isn't completed yet")
   
  };

  return (
    <section className='w-fit m-auto flex items-center h-screen'>
      <div className='p-5 w-full collection bg mt-28'>
        <h1 className='w-fit text-4xl font-semibold m-auto text-black'>Register</h1>
        <form className='flex flex-col sm:w-72 lg:w-96' onSubmit={handleSubmit(submit)}>
          <Input
            type="text"
            placeholder="Enter name"
            className="w-full outline-none mb-4 p-2 border border-gray-300 rounded-3xl"
            {...register("name", {
              required: true,
            })}
          />
          <Input
            type="email"
            placeholder="Enter Email"
            className="w-full outline-none mb-4 p-2 border border-gray-300 rounded-3xl"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
              },
            })}
          />
          <Input
            type="password"
            placeholder="Enter password"
            className="w-full outline-none mb-4 p-2 border border-gray-300 rounded-3xl"
            {...register("password", {
              required: true,
            })}
          />
          <Input
            type="password"
            placeholder="Confirm password"
            className="w-full outline-none mb-4 p-2 border border-gray-300 rounded-3xl"
            {...register("confirmPassword", {
              required: true,
            })}
          />
          <Input
            type="submit"
            className="p-2 bg-blue-600 outline-none hover:bg-blue-800 duration-500 text-white cursor-pointer w-full text-center rounded-3xl"
          />
        </form>
        <h1 className='m-auto w-fit text-lg'>Have an account already? <Link to='/login' className='font-semibold hover:text-blue-50'>Login</Link></h1>
      </div>
    </section>
  );
}

export default Register;
