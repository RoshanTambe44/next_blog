import Link from 'next/link'
import React from 'react'

export default function AddPage() {
  return (
    <div><nav className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-500">BlogApp</a>
        <div className="space-x-4">
        </div>
    </div>
</nav>

{/* <!-- Main Content --> */}
<div className="container mx-auto px-4 py-6 flex-grow">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* <!-- Sidebar --> */}
        <aside className="md:col-span-1 bg-white p-4 rounded-lg shadow-md">
        <ul className="space-y-4">
                <li><Link href="/yourProfile" className="block text-gray-700 hover:text-blue-500">Your Profile</Link></li>
                <li><Link href="/addPost" className="block text-gray-700 hover:text-blue-500">Add Post</Link></li>
                <li><Link href="/notification" className="block text-gray-700 hover:text-blue-500">Notifications</Link></li>
                <li><Link href="/mainDashboard" className="block text-gray-700 hover:text-blue-500"> Posts</Link></li>
            </ul>
        </aside>

        {/* <!-- Main Section --> */}
        <main className="md:col-span-3 space-y-6">
           {/* <!-- Add Post Section --> */}
    <section id="add-post" className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Add Post</h2>
        <form action="/add-post" method="POST">
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input type="text" id="title" name="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
                <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Content</label>
                <textarea id="content" name="content" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Post</button>
        </form>
    </section>
        
        </main>
    </div>
</div></div>


  )
}
