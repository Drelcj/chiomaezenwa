import Hero from "./components/hero/Hero";
import Image from "next/image";
import Register from "./components/register/Register";
import Courses from "./components/courses/Courses";
import Clients from "./components/clients/Clients";
import Blog from "./components/blog/Blog";
import ProjectsCta from "./components/projects-cta/ProjectsCta";
// import Countdwown from "./components/countdown/Countdown";
import TestimonialSection from "./components/testimonial/Testimonial";
// import Count from "./components/count/Count";
import VideoPage from "./components/videopage/VideoPage";
import Booksale from "./components/book-sale/Booksale";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <Booksale/>
      <div className="p-10 bg-red-50 rounded-lg shadow-md">
        <VideoPage 
        videoId="VJ_akdh8vhA"
          text="Sometime in 2014 i had to get into a boat headed for a community to confirm a story, a breaking story at a time, the story said that there had been an explosion at the office of a political party and that there was a fire in the building as a result of this explosion, the normal thing any journalist would want to do is to call the spokes person, in this TedX Talk, I explained the importance of verification in journalism and how fake news spreads."
        />
      </div>
      <div>
        {/* <Countdwown /> */}
        {/* <Count /> */}
      </div>
      <div className="pt-4 pb-4">
      <Blog />
      </div>
         <div>
        <Register />
      </div>
      <Clients />
      <div>
        <ProjectsCta />
      </div>
      <div>
      <Courses />
      </div>
      <div>
        <TestimonialSection />
      </div>
    </main>
  );
}
