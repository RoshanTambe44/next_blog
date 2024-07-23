"use client";
import Link from "next/link";
import React from "react";


export default function YourProfile() {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-500">
            BlogApp
          </a>
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
            {/* <!-- Profile Section --> */}
            <section id="profile" className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Your Profile
              </h2>
              <p className="text-gray-700">Manage your profile information.</p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
