import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <body class="bg-gray-700 ">
    <div class="flex min-h-screen items-center justify-center">


        <div class="min-h-1/2 bg-gray-900  border border-gray-900 rounded-2xl">

            <div class="mx-4 sm:mx-24 md:mx-34 lg:mx-56 mx-auto  flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
                <svg viewBox="0 0 24 24" class=" h-12 w-12 text-white" fill="currentColor">
                    <g>
                        <path
                            d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                        </path>
                    </g>
                </svg>

                <h1 class="text-white text-2xl">Register chwitter</h1>
                <input class="w-full p-2 bg-gray-900 rounded-md  border border-gray-700 focus:border-blue-700" placeholder="Username" type="text" id=""/>
                <input class="w-full p-2 bg-gray-900 rounded-md  border border-gray-700 focus:border-blue-700" placeholder="Email" type="email"  id=""/>
                <input class="w-full p-2 bg-gray-900 rounded-md border border-gray-700 " placeholder="Phone Number" type="text"  id=""/>
                <input class="w-full p-2 bg-gray-900 rounded-md border border-gray-700 " placeholder="Password" type="password"  id=""/>
                <input class="w-full p-2 bg-gray-900 rounded-md border border-gray-700 " placeholder="Confirm Password" type="password"  id=""/>
                <input class="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border border-gray-700 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-0.4" type="submit" id=""/>
                

                <p>Already have an account?<a class="font-semibold text-sky-700" ><Link to="/login">Login</Link></a> </p>
            </div>


        </div>

    </div>


</body>
  )
}

export default Register