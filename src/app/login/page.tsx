'use client'
import React from 'react'

export default function login() {
  return (
    <div className='bg-gray-100 flex items-center justify-center min-h-screen dark:bg-black'>
       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md dark:bg-slate-700  ">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center dark:text-white">Login</h2>
        <form action="/login" method="POST">
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-400">Email</label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required /><h1 className="text-red-500 text-sm">wrong email</h1>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-400">Password</label>
                <input type="password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required /><h1 className="text-red-500 text-sm">wrong pawwsord</h1>
            </div>
            <div className="flex items-center gap-2">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button><span className=" underline text-blue-500 cursor-pointer">If you dont have Account</span>
            </div>
        </form>
    </div>
    </div>
  )
}
