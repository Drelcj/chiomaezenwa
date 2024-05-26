import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <Navbar />
    </div>
  )
}

export default page