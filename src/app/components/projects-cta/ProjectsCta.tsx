import Link from "next/link";
import React from "react";

const LandingPageCTA = () => {
  return (
    <div className="bg-red-600 text-white text-center p-8">
      <h2 className="text-2xl font-semibold mb-4">Have a Project in Mind?</h2>
      <p className="mb-6">I am always looking for new challenges and opportunities to make a difference. If you have an idea for a project that aligns with my mission, I&apos;d love to hear about it.</p>
      <Link href="/contact" className="bg-white text-red-600 font-bold py-2 px-4 rounded">
        Reach Out to Me
      </Link>
    </div>
  );
};

export default LandingPageCTA;
