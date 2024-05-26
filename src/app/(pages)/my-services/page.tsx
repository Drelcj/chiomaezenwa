import React from "react";
import Link from "next/link";
import Image from "next/image";

const Myservices = () => {
  return (
    <div className="p-4 px-10">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold pt-4 hover:text-red-500">
            My Services
          </h2>
        </div>
        {/* <div className="text-center p-3">
        <Link href="/school">
          <button className="btn bg-red-500 text-white">View all courses</button>
        </Link>
      </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible">
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl hover:shadow-sm">
          <figure>
            <img
              src="https://res.cloudinary.com/dt3czltxx/image/upload/v1710521894/News%20Titan%20Gallery/_S4A8098_bekxhd.jpg"
              alt="Course 1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">Corporate MC/Compere</h2>
            <p>
              Engage your audience and elevate your event with a professional
              and experienced Corporate MC/Compere. I ensure a seamless flow,
              captivating introductions, and energetic interaction to make your
              event a success.
            </p>
            <div className="card-actions justify-end">
              <Link href="/contact">
                <button className="btn text-white bg-red-500">
                  Contact me
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://res.cloudinary.com/dt3czltxx/image/upload/v1710521913/News%20Titan%20Gallery/_S4A7906_yraj11.jpg"
              alt="Course 2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">
              Engage the Digital Crowd: Your Online Event Host & Anchor
            </h2>
            <p>
              Experience the difference with a skilled Online Event Host &
              Anchor. I excel at fostering audience participation, navigating
              online platforms with ease, and keeping your virtual event
              engaging and on track.
            </p>
            <div className="card-actions justify-end">
              <Link href="/contact">
                <button className="btn text-white bg-red-500">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://res.cloudinary.com/dt3czltxx/image/upload/v1711535544/www.chiomaezenwafor.com/Media_Training_grhth7.jpg"
              alt="Course 3"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">Media Training</h2>
            <p>
              Elevate your broadcast presence with my bespoke media training
              services. I offer insider insights to refine your messaging,
              enhance your vocal delivery, and captivate your audience. Whether
              you&apos;re preparing for an interview, podcast, or live
              broadcast, my tailored sessions will empower you with the
              confidence and skills to communicate effectively and leave a
              lasting impression.
            </p>
            <div className="card-actions justify-end">
              <Link href="/contact">
                <button className="btn text-white bg-red-500">Register</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709548696/R_4_qhle32.jpg"
              alt="Course 4"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">
              Media/Content Consulting
            </h2>
            <p>
              As a seasoned News Manager for leading radio brands, I offer
              first-rate media and content consulting services. Drawing from my
              extensive background, I provide strategic advice to amplify your
              content&apos;s reach and effectiveness. My approach is tailored to
              your unique needs, ensuring your message engages your audience and
              strengthens your media footprint.
            </p>
            <div className="card-actions justify-end">
              <Link href="/contact">
                <button className="btn text-white bg-red-500">
                  Book a session
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://res.cloudinary.com/dt3czltxx/image/upload/v1711537517/www.chiomaezenwafor.com/OIP_1_wonc2b.jpg"
              alt="Course 4"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">Course Creation</h2>
            <p>
              I specialize in crafting educational experiences that inspire and
              inform. With my expertise in course creation, I develop
              comprehensive online courses that cater to diverse learning
              styles. My approach integrates interactive content, practical
              exercises, and the latest e-learning technologies to ensure a
              dynamic and effective learning journey.
            </p>
            <div className="card-actions justify-end">
              <Link href="/contact">
                <button className="btn text-white bg-red-500">
                  Book a session
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://res.cloudinary.com/dt3czltxx/image/upload/v1711537994/www.chiomaezenwafor.com/How-Long-Does-It-Take-to-Shoot-a-Film-Exploring-the-World-of-Filmmaking_j2kabg.jpg"
              alt="Course 4"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-red-600">Documentary Production</h2>
            <p>
              My passion for storytelling is brought to life through documentary
              production. I create compelling narratives that explore intriguing
              subjects and present them with authenticity. My work in
              documentary filmmaking involves meticulous research, creative
              direction, and a keen eye for detail, resulting in productions
              that educate, engage, and evoke emotion.
            </p>
            <div className="card-actions justify-end">
              <Link href="/contact">
                <button className="btn text-white bg-red-500">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myservices;
