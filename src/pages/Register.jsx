import React from 'react';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import authService from '../appwriteConfig/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../store/authslice';
import { toast,ToastContainer } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar'
function Register() {

  const [progress, setProgress] = useState(0)
  const { register, handleSubmit } = useForm();
  const dispatch=useDispatch()
  const Navigate=useNavigate()
  const [errr,setError]=useState("")
  
  const create =async (data) => {
      try {
        setError("")
        setProgress(progress+10)
          const session=await authService.createAccount(data);
          if(session)
          {
          setProgress(progress+60)
            const userData=await authService.getCurrentUser()
            if(userData) {
              dispatch(login({cartData:null,userData:userData,orderItems:null}))
               setProgress(100)
            }
            Navigate('/', {name:data.name})
          }
      } catch (error){
         toast.error("something went wrong")   
         setProgress(progress+90)
        setError(error.message)
      }
  
  };

  return (
    <>
    <LoadingBar color='#f11946' progress={progress}  />
    <section className='w-fit m-auto flex items-center h-screen'>
      <div className='p-5 w-full collection bg mt-28'>
        <h1 className='w-fit text-4xl font-semibold m-auto text-black'>Register</h1>
        <form className='flex flex-col sm:w-72 lg:w-96' onSubmit={handleSubmit(create)}>
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
          <p className='w-full m-auto text-red-700'>{errr}</p>
          <Input
            type="submit"
            className="p-2 bg-blue-600 outline-none hover:bg-blue-800 duration-500 text-white cursor-pointer w-full text-center rounded-3xl"
            value="register"
          />
        </form>
        <ToastContainer />
        <h1 className='m-auto w-fit text-lg'>Have an account already? <Link to='/login' className='font-semibold hover:text-blue-50'>Login</Link></h1>
      </div>
    </section>
    </>
  );
}

export default Register;
