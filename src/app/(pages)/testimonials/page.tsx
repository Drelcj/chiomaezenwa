import React from "react";

const TestimonialsPage = () => {
  // Example testimonials - replace with your actual data
  const testimonials = [
    { 
      quote: "Chioma&apos;s dedication to journalism has inspired our entire team. Her leadership in media projects is unparalleled.", 
      name: "Drel Chijioke", 
      position: "Colleague",
      image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1709564009/drel_mid_pov.jpg_export_syl5rv.jpg" // Replace with your Cloudinary image link
    },
    // ... other testimonials
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-semibold text-gray-900 mb-6">What People Say</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded shadow p-4 flex flex-col items-center text-center">
            <img className="rounded-full mb-4" src={testimonial.image} alt={testimonial.name} />
            <blockquote className="text-gray-600 italic mb-2">&quot;{testimonial.quote}&quot;</blockquote>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
