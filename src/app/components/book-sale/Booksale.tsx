import Link from "next/link";
import React from "react";
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";

const Booksale = () => {
  return (
    <div className="bg-red-600 text-white p-8 md:flex md:items-center md:justify-center md:text-left">
      <div className="md:flex-shrink-0 md:w-1/4 lg:w-1/6">
        <Image
          src="https://files.selar.co/product-images/2023/products/Chiomahope/improving-your-writing-sk-selar.co-651a37393698c.jpeg"
          alt="Improving Your Writing Skill: Tips & Techniques for Media Professionals"
          layout="responsive"
          width={320}
          height={320}
          className="w-full h-auto shadow-2xl"
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 md:w-3/4 lg:w-5/6">
        <h2 className="text-2xl font-semibold mb-4">Improving Your Writing Skill: Tips & Techniques for Media Professionals</h2>
        <p className="mb-6">Are you ready to unlock the secrets of powerful and persuasive writing?

Do you dream of captivating your audience with compelling words that leave a lasting impression?

Look no further, because this book is your ultimate guide to becoming a wordsmith extraordinaire!</p>
        <Link href="https://selar.co/62y46a" target="_blank" rel="noopener noreferrer">
          <p className="bg-white text-red-600 font-bold py-2 px-4 rounded inline-flex items-center">
            Buy Now <TbExternalLink />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Booksale;
