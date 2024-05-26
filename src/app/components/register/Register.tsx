"use client"
import React from 'react'

const register = () => {
  return (
    <div className="px-10bg-base-100">
        <div className="hero min-h-screen bg-red-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Whether you want to become a journalist, a broadcaster, a podcaster, a media entrepreneur, or a data journalist, this blog page has a course for you. Learn from the experts and develop your skills in writing, reporting, on-camera communication, social media, podcasting, media business, and data visualization. Sign up now and get access to valuable content, interactive exercises, and feedback from your peers and instructors. Don&apos;t miss this opportunity to advance your media career! 🚀</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-500 text-white">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default register