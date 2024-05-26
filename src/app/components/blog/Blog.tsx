import React from 'react'
import Link from 'next/link'

const Courses = () => {
  return (
    <div className="p-2 px-10">
      <div className='flex justify-between'>
      <div>
      <h2 className="text-2xl font-bold pt-4 hover:text-red-500">Trending Posts</h2>
      </div>
      <div className="text-center p-3">
        <Link href="/blog">
          <button className="btn bg-red-500 text-white">View blog page</button>
        </Link>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible">
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl hover:shadow-sm">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709546492/IMG_63614_i2sxfs.jpg" alt="Course 1" /></figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">Discover Your Niche in the Media Industry!</h2>
            <p>Are you passionate about storytelling, creativity, and making an impact? The media industry offers a vast landscape of opportunities waiting to be explored. Whether you&apos;re drawn to journalism, filmmaking, social media, or podcasting, there&apos;s a niche for you. Uncover your unique voice, connect with like-minded individuals, and shape narratives that resonate. Dive into the world of media, where every story matters, and your passion can ignite change. 🎙️📺📝
</p>
            <div className="card-actions justify-end">
              <button className="btn text-white bg-red-500"><Link href="https://take.quiz-maker.com/Q3KIDOHD9" target="_blank" rel="noopener noreferrer"> Read More </Link></button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709545976/IMG_63613_sbi3na.jpg" alt="Course 2" /></figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">Ink and Insights: The Book Signing Hybrid Event That Connects Authors and Readers</h2>
            <p>Chioma introduces her quarterly event, Ink and Insights, where she invites authors to share their books and insights with a live and online audience. She explains the concept and benefits of the hybrid event, and how it fosters a community of book lovers and writers.</p>
            <div className="card-actions justify-end">
              <button className="btn text-white bg-red-500"><Link href="https://forms.gle/FDfYzfo3ukDdM3n17" target="_blank" rel="noopener noreferrer"> Read More </Link></button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709558731/th_zg0vzt.jpg" alt="Course 3" /></figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">Top 5 Skills Every Aspiring Media Professional Should Develop in 2024</h2>
            <p>You&apos;ve probably heard many say that 2024 won&apos;t be for the faint hearted. Some are even speaking of a coming disruption (a gist for another post) Whatever happens, I think it would be great to be ready...</p>
            <div className="card-actions justify-end">
              <button className="btn text-white bg-red-500"><Link href="https://twitter.com/chiomaezenwafo/status/1730895187751084446" target="_blank" rel="noopener noreferrer"> Read More </Link></button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure><img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709635112/623ed3a22f21d_mg2fjf.jpg" alt="Course 4" /></figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">#StoptheSoot: Where are we with Modular Refineries?</h2>
            <p>The deadly air pollution in oil rich Rivers State, in Southern Nigeria can only end when illegal crude oil refining is stopped, studies have shown.

Overtime, modular refineries have been looked to as what could bring an end to the now multi-billion Naira illegal crude oil refining </p>
            <div className="card-actions justify-end">
              <button className="btn text-white bg-red-500"><Link href="https://www.nigeriainfo.fm/news/homepage/stopthesoot-where-are-we-with-modular-refineries/" target="_blank" rel="noopener noreferrer"> Read More </Link></button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Courses
