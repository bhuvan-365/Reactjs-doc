import './App.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Loader from './loder.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {

    return new Promise((resolve, rejcet) => {
      setTimeout(() => {
        resolve("done")
      }, d * 1000);

    })
  }

  const onSubmit = async (data) => {
    await delay(2); // Simulating network delay
    console.log(data);
    if (data.username == "raaj" || data.username == "deev") {

      setError("myform", { message: "This username is banned from the server" })
    }
  }



  return (
    <>
      <div className="container">
        <h1 className='underline'>React-hook-form</h1>
      {isSubmitting && <div className="loading"><Loader /> submitting...</div>}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="name">Username :</div>
          <input {...register("username", { required: { value: true, message: "username is required" }, minLength: { value: 4, message: "Min length is 4" }, maxLength: { value: 10, message: "Max length is 10" } })} type="text" id="box" />
          <br />
          {/* for simple error message display
          errors.username && <div className="red">There some error</div> */}
          {/* for simple error message display
          errors.username && <div className="red">There some error</div> */}

          {errors.username && <div className="red">{errors.username.message}</div>}
          <div className="pass">Password :</div>
          <input className='px-2.5' {...register("password", { required: { value: true, message: "password required" }, minLength: { value: 4, message: "Min length is 4" }, maxLength: { value: 10, message: "Max length is 10" } })} type="password" id="box" />
          <br />
          {errors.password && <div className="red">{errors.password.message}</div>}

          <input disabled={isSubmitting} type="submit" value="Submit" className='subBtn btn btn-primary p-1 px-2 rounded-4 text-center mb-2 ' />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
        </form>
      </div>

    </>
  )
}

export default App
