import React from "react";

const TestimonialSection = () => {
  return (
    <div className="bg-black p-10 flex flex-col items-center justify-center gap-10 pt-40 pb-40">
      <div className="flex space-x-10 flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6"> {/* Use flex and space-x to create side-by-side layout */}
        <div className="card w-96 bg-base-100 shadow-xl md:w-1/2">  {/* Adjust width as needed */}
          <div className="avatar justify-center py-10">
            <div className="w-24 rounded-full ring ring-red-500 ring-offset-2">
              <img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1698814812/samples/look-up.jpg" alt="User Avatar" />
            </div>
          </div>
          <div className="card-body items-center justify-center">
            <h2 className="card-title text-red-500">John Ciroma</h2>
            <p className="text-align-center text-base">
              I rely on this news blog for accurate and timely information. The articles are well-researched and presented in an engaging way.
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl md:w-1/2">  {/* Adjust width as needed */}
          <div className="avatar justify-center py-10">
            <div className="w-24 rounded-full ring ring-red-500 ring-offset-2">
              <img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1698814813/samples/man-on-a-escalator.jpg" alt="User Avatar" />
            </div>
          </div>
          <div className="card-body items-center justify-center">
            <h2 className="card-title text-red-500">James</h2>
            <p className="text-align-center text-base">
              Writes with clarity, passion, and authority, and her articles are full of practical tips and examples. Great journalist, teacher and mentor.
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl md:w-1/2">  {/* Adjust width as needed */}
          <div className="avatar justify-center py-10">
            <div className="w-24 rounded-full ring ring-red-500 ring-offset-2">
              <img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709564009/drel_mid_pov.jpg_export_syl5rv.jpg" alt="User Avatar" />
            </div>
          </div>
          <div className="card-body items-center justify-center">
            <h2 className="card-title text-red-500">Drel Chijoke</h2>
            <p className="text-align-center text-base">
              As a daily visitor, I appreciate the diverse topics covered here. From politics to lifestyle, this blog keeps me informed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
