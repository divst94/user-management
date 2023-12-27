import React from "react";
import Link from "next/link";
// import { useRouter } from 'next/router'
const Navbar = () => {
    return (
    // <nav >
    //     <Link href={"/"}>@usermanagement</Link>
    //     <Link href={"/login"}>Login</Link>
    // </nav>
    <header>
	<nav
		className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500 dark:bg-[#0c1015] transition duration-700 ease-out"
	>
		<div className="flex justify-between pt-2">
			{/* <div className="text-[2rem] leading-[3rem] tracking-tight font-bold text-black dark:text-white"> */}
            <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            User management
            </Link>
          {/* </div> */}
			<div className="flex items-center space-x-4 text-sm font-semibold tracking-tight">
				<span
					className="px-1 py-1 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black"
                    >
                         <Link href="/login/">Sign in</Link></span>
				<span
					className="px-1 py-1 text-white transition duration-500 ease-out bg-blue-700 rounded-lg hover:bg-blue-800 hover:ease-in hover:underline"
					>
                        <Link href="/signup/">Sign up</Link>
                    </span>
			</div>
		</div>
	</nav>
	
</header>
    );
};
export default Navbar;