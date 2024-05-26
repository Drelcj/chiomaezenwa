import Image from 'next/image'
import React from 'react'

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {" "}
      Welcome to your Dashboard, work in progress!{" "}
    <Image src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709706463/R_1_t8jsrx.png" alt='Construction' width={800}
    height={800} />
    </div>
  )
}
