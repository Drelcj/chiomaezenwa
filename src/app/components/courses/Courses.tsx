import React from 'react'
import Link from 'next/link'

const Courses = () => {
  return (
    <div className="p-4 px-10">
      <div className='flex justify-between'>
      <div>
      <h2 className="text-2xl font-bold pt-4 hover:text-red-500">Trending Courses</h2>
      </div>
      <div className="text-center p-3">
        <Link href="/school">
          <button className="btn bg-red-500 text-white">View all courses</button>
        </Link>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible">
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl hover:shadow-sm">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709548336/R_aixpub.png" alt="Course 1" /></figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">Journalism Basics for Beginners</h2>
            <p>A comprehensive course covering the fundamentals of journalism, including writing, reporting, ethics, and investigative techniques.</p>
            <div className="card-actions justify-end">
              <Link href="/school">
              <button className="btn text-white bg-red-500">Register</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709548510/R_2_q4tbuj.jpg" alt="Course 2" /></figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">Broadcasting and On-Camera Skills</h2>
            <p>An interactive course to improve your on-camera presence, voice modulation, and delivery skills.</p>
            <div className="card-actions justify-end">
            <Link href="/school">
              <button className="btn text-white bg-red-500">Register</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709548803/8632457194_45d1f6a009_b_lnlcfu.jpg" alt="Course 3" /></figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">Social Media Journalism</h2>
            <p>Learn how to leverage social media platforms effectively for news reporting, audience engagement, and brand building.</p>
            <div className="card-actions justify-end">
            <Link href="/school">
              <button className="btn text-white bg-red-500">Register</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709548696/R_4_qhle32.jpg" alt="Course 4" /></figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">Media Entrepreneurship</h2>
            <p>Learn how to turn your media skills into a profitable business. Explore branding, marketing, and revenue strategies.</p>
            <div className="card-actions justify-end">
            <Link href="/school">
              <button className="btn text-white bg-red-500">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Courses
