import { useForm } from "react-hook-form";
import Link from "next/link";
// import { useRouter } from "next/router";

export default function Login() {
  // const router = useRouter();

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  //   const onSubmit = (data) => console.log(data)

  // console.log(watch("example"))
  return (
    <main className="flex flex-col items-center justify-between p-2">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            User management login
          </a>
          <form className="space-y-1 md:space-y-1" >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
              <input type="email" id="email" defaultValue="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
           
            <button type="submit" className="w-full text-white bg-blue hover:bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Log In
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account?
              <Link href="/signup/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                signup
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}
