"use client"
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { error } from "console";
import { useCallback, useEffect, useState, FormEvent } from "react";
import axios from "axios";

type Inputs = {
    name: string |null;
    email: string |null;
    phone: string |null;
    password: string |null;
    confirm_password: string |null;

}
let defaultInputs : Inputs= {
    name: " ",
    email: " ",
    phone: " ",
    password: " ",
    confirm_password: " ",
}

export default function Signup() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>({ defaultValues: { ...defaultInputs } })

    const [isLoading, setIsLoading] = useState<any>(false)

    async function onSubmit(event: any) {
        event.preventDefault()
        setIsLoading(true) // Set loading to true when the request starts
        try {
            const formData = new FormData(event.target.value)
            const response = await fetch('/api/signup/', {
                method: 'POST',
                body: formData,
            })
            console.log(response);
            

            // Handle response if necessary
            const data = await response
            return data
            // ...
        } catch (error) {
            // Handle error if necessary
            console.error(error)
        } finally {
            setIsLoading(false) // Set loading to false when the request completes
        }
    }
  
// useEffect(  async () => {
//     const res = await fetch("/api/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ dataObj: { hey: "ho" } }),
//       });
//       // For the first example (sending plain text):
//       const data = await res.text();
//       // For the second one (sending a JSON):
//       const apiData = await res.json();
// })

    // useEffect(async ()=>{
    //  let data = await fetch ('/api/signup/', {
    //     method: 'POST',
    //     body: formData,
    // });
    // const apiData = data.json;
    // console.log(apiData)

    // }, [])
    // const onSubmit = (data: any, e:any) => {
    //     e.preventDefault()

    //    const payload={
    //         first_name:data.first_name,
    //         last_name:data.last_name,
    //         phone:data.phone,
    //         email:data.email,
    //         password:data.password,
    //         confirm_password:data.confirm_password,
    //     }
    //     console.log(data)
    // data.then(() => {
    //     if (data) {
    //         router.push("/")
    //     }
    // }).catch((error) => { console.log(error) }
    // )

    // }

    // console.log(watch("firstName"))
    return (
        // <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <section className="bg-gray-50 dark:bg-gray-900 mt-4">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            User management
          </a> */}
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                            <div>
                                <label>Full Name</label>
                                <input type="text" placeholder="first name" {...register(`name`, { required: "This field is required", })}
                                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                                block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500"/>
                                {/* errors will return when field validation fails  */}
                                {errors.name && <span>This field is required</span>}
                            </div>
                           
                            {/* <div>
                                <label>Mobile No.</label>
                                <input type="number" placeholder="Mobile number" {...register(`phone`, { required: "This field is required", })}
                                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                                block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500"/>
                                {/* errors will return when field validation fails  */}
                                {/* {errors.phone && <span>This field is required</span>}
                            </div> */} 
                            <div>
                                <label>Email</label>
                                <input type="email" {...register(`email`, { required: "This field is required", })} placeholder="example@email.com"
                                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                                block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500"/>
                                {/* errors will return when field validation fails  */}
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" {...register(`password`, { required: "This field is required", })} placeholder="password"
                                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                                block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500"/>
                                {/* errors will return when field validation fails  */}
                                {errors.password && <span>This field is required</span>}
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <input type="password" {...register(`confirm_password`, { required: "This field is required", })} placeholder="confirm password"
                                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                                block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500"
                                />
                                {/* errors will return when field validation fails  */}
                                {errors.confirm_password && <span>This field is required</span>}
                            </div>

                            <button type="submit" disabled={isLoading} className="w-full text-white bg-blue hover:bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                {isLoading ? 'Loading...' : 'Create an account'}
                            </button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?
                                <Link href="/login/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        // </main>
    )
}
