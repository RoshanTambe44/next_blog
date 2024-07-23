import Link from 'next/link'
import React from 'react'

export default function mainDashboard() {
  return (
    <div className=''  ><nav className="bg-white shadow-md" >
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-500">BlogApp</a>
        <div className="space-x-4">
            
        </div>
    </div>
</nav>

{/* <!-- Main Content --> */}
<div className="container  mx-auto px-4 py-6 flex-grow">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {/* <!-- Sidebar --> */}
        <aside className="md:col-span-1 bg-white p-4 rounded-lg shadow-md ">
            <ul className="space-y-4">
                <li><Link href="/yourProfile" className="block text-gray-700 hover:text-blue-500">Your Profile</Link></li>
                <li><Link href="/addPost" className="block text-gray-700 hover:text-blue-500">Add Post</Link></li>
                <li><Link href="/notification" className="block text-gray-700 hover:text-blue-500">Notifications</Link></li>
                <li><Link href="/mainDashboard" className="block text-gray-700 hover:text-blue-500"> Posts</Link></li>
            </ul>
        </aside>

        {/* <!-- Main Section --> */}
        <main className="md:col-span-3 space-y-6 h-full">
            {/* <!-- Global Posts Section --> */}
            <section id="global-posts" className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-900"> Posts</h2>
                <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-4">
                        <h3 className="text-xl font-semibold text-gray-900">Post Title 1</h3>
                        <p className="text-gray-700 mt-2">This is a summary of the first global post.</p>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                        <h3 className="text-xl font-semibold text-gray-900">Post Title 2</h3>
                        <p className="text-gray-700 mt-2">This is a summary of the second global post.</p>
                    </div>
                    {/* <!-- Add more posts as needed --> */}
                </div>
            </section>
        </main>
    </div>
</div></div>
  )
}
