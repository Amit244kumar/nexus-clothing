import React, { useState } from 'react'
import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import authService from '../appwriteConfig/auth'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/authslice'
import { toast, ToastContainer } from 'react-toastify'
import LoadingBar from 'react-top-loading-bar'
function Login() {
  const {register,handleSubmit}=useForm()
  const [progress, setProgress] = useState(0)
  const [error,setError]=useState("")
  const [loading,setLoading]=useState(false)
  const dispatch=useDispatch()
  const status=useSelector(state=>state.auth.status)
  const Navigate=useNavigate()
  const submit=async (data)=>{
    if(status)
    {
      toast.error("you are already login")
      return
    }
    setError("")
    try{
        setProgress(progress+10)
        setLoading(true)
        const session=await authService.login(data)
        if(session){
          setProgress(progress+60)
          const userData=await authService.getCurrentUser() 
          if(userData){
            setProgress(100)
            setLoading(false)
            dispatch(login({cartData:null,userData:userData}))
          }  
          Navigate('/')
        }
    } catch (error) {
      setProgress(100)
      setLoading(false)
      setError(error.message)
    }
    
  }
  return (
    <section className='w-fit m-auto flex items-center h-screen '>
        <LoadingBar color='#f11946' progress={progress}  />
        <ToastContainer />
        <div className='p-5 w-full collection bg'>
          <h1 className='w-fit text-4xl font-semibold  m-auto text-black'>Login</h1>
          <form className='flex flex-col sm:w-72 lg:w-96' onSubmit={handleSubmit(submit)}>
              <Input
                  type="email"
                  placeHolder="Enter Email"
                  className="w-full outline-none mb-4 p-2 border border-gray-300 rounded-3xl"
                  {...register("email",{
                    required:true,
                    validate: {
                      matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "email address must be a valid address",
                  }
                  })}
              />
              <Input
                  type="password"
                  placeHolder="Enter password"
                  className="w-full outline-none mb-4 p-2 border border-gray-300 rounded-3xl"
                  {...register("password",{
                    required:true
                  })}
              />
              <p className=' text-red-600 w-fit m-auto'>{error}</p>
              {
                loading?(
                  <div class="flex flex-row gap-2 justify-center ml-3  p-3  w-11/12 bg-blue-900 cursor-wait text-center rounded-3xl">
                      <div class="w-3 h-3 rounded-full bg-blue-100 animate-bounce [animation-delay:.7s]"></div>
                      <div class="w-3 h-3 rounded-full bg-blue-100 animate-bounce [animation-delay:.3s]"></div>
                      <div class="w-3 h-3 rounded-full bg-blue-100 animate-bounce [animation-delay:.7s]"></div>
                  </div>):(
                    <Input
                      type="submit"
                      className="p-2 bg-blue-600 hover:bg-blue-800 duration-500 text-white cursor-pointer w-full text-center rounded-3xl"
                      value="login"
                    />)
              }
          </form>  
          <h1 className='m-auto w-fit text-lg'>Create new account! <Link to='/register' className='font-semibold hover:text-blue-50'>Register</Link></h1>
        </div> 
      
    </section>
  )
}

export default Login