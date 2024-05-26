import React from "react";

const CareerPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-semibold text-gray-900 mb-6">Career Opportunities</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Work With a Media Titan</h2>
        <p className="text-gray-600 mb-4">
          Join the team led by Chioma Ezenwafor, a seasoned journalist and media consultant with over a decade of experience in the industry. As the News Manager of 92.3 Nigeria Info FM and other prominent stations, she has shaped the media landscape in Port Harcourt and beyond.
        </p>
        <p className="text-gray-600 mb-4">
          Chioma is an alumna of the prestigious Edward R. Murrow Program and has been recognized with numerous awards, including the News Editor of the Year at The Media Awards. Her work spans various media projects, and she is a respected educator, having created courses for the African Women in Media organization.
        </p>
        <p className="text-gray-600 mb-4">
          If you&apos;re passionate about media, journalism, and storytelling, and you&apos;re looking for a place to grow and make a significant impact, we would love to hear from you.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Openings</h2>
        {/* List current job openings here */}
        <ul className="list-disc pl-5">
          <li className="text-gray-700 mb-2">Broadcast Journalist - Full-Time</li>
          <li className="text-gray-700 mb-2">Content Writer - Part-Time</li>
          <li className="text-gray-700 mb-2">Radio Producer - Contract</li>
          {/* Add more listings as needed */}
        </ul>
      </div>

      <div className="text-center">
        <a href="#apply" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block">
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default CareerPage;
