import './App.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

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
        {isSubmitting && <div className="loading">Submitting...</div>}
        <div className="container">
          <form action="" onSubmit={handleSubmit(onSubmit)}>

            <input {...register("username", { required: { value: true, message: "username is required" }, minLength: { value: 4, message: "Min length is 4" }, maxLength: { value: 10, message: "Max length is 10" } })} type="text" id="" />
            <br />
            {/* for simple error message display
          errors.username && <div className="red">There some error</div> */}
            {/* for simple error message display
          errors.username && <div className="red">There some error</div> */}

            {errors.username && <div className="red">{errors.username.message}</div>}

            <input {...register("password", { required: { value: true, message: "password required" }, minLength: { value: 4, message: "Min length is 4" }, maxLength: { value: 10, message: "Max length is 10" } })} type="password" id="" />
            <br />
            {errors.password && <div className="red">{errors.password.message}</div>}

            <input disabled={isSubmitting} type="submit" value="Submit" />
            {errors.myform && <div className="red">{errors.myform.message}</div>}
          </form>
        </div>

      </>
    )
  }

  export default App
