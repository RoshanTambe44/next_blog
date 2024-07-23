'use client'
import React from 'react'

export default function EmailVerifiaction() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen dark:bg-black">
       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md dark:bg-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center dark:text-white">Email Verification</h2>
        <form action="/verify-email" method="POST">
            <div className="mb-4">
                <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2  dark:text-gray-400 ">Enter OTP</label>
                <input type="text" id="otp" name="otp" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                <p className='text-sm '>OTP send on your mail.</p>

            </div>
            <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Verify</button>
            </div>
        </form>
    </div>
    </div>
  )
}
