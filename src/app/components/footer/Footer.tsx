import Link from "next/link";
import React from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title ">Chioma Ezenwafor</header>
          <Link href="/my-services" className="link link-hover text-red-500">
            My Services
          </Link>
          <Link href="/my-books" className="link link-hover text-red-500">
            My Books
          </Link>
          <Link
            href="/my-online-courses"
            className="link link-hover text-red-500"
          >
            My Online Courses
          </Link>
          <Link href="/my-works" className="link link-hover text-red-500">
            My Works
          </Link>
          <Link href="/projects" className="link link-hover text-red-500">
            Projects
          </Link>
          <Link href="/testimonials" className="link link-hover text-red-500">
            Testimonials
          </Link>
          <Link href="/blog" className="link link-hover text-red-500">
            Blog
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Bio</header>
          <Link href="/about" className="link link-hover text-red-500">
            About
          </Link>
          <Link href="/contact" className="link link-hover text-red-500">
            Contact
          </Link>
          <Link href="/career" className="link link-hover text-red-500">
            Career
          </Link>
          <Link href="/media" className="link link-hover text-red-500">
            Media
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link href="terms" className="link link-hover text-red-500">
            Terms of Service
          </Link>
          <Link href="/privacy" className="link link-hover text-red-500">
            Privacy and Cookies
          </Link>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-red-500">
                Enter your email address
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-red-600 text-white join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <Link
            href="https://linktr.ee/techmandrel?"
            target="_blank"
            rel="noopener noreferrer"
            className=" link link-hover text-red-600"
          >
            {" "}
            Techman Drel
          </Link>{" "}
          <p> Providing reliable tech since 2019</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link
              href="https://www.instagram.com/chiomaezenwafor"
              target="_blank"
              rel="noopener noreferrer"
              className=" link link-hover text-red-600"
            >
              {" "}
              <FaInstagram />
            </Link>
            <Link
              href="https://x.com/chiomaezenwafo?t=FRWKssWYzwedLGwCGqKEJA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className=" link link-hover text-red-600"
            >
              {" "}
              <FaXTwitter />
            </Link>
            <Link
              href="https://ng.linkedin.com/in/chiomaezenwafor"
              target="_blank"
              rel="noopener noreferrer"
              className=" link link-hover text-red-600"
            >
              {" "}
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://www.facebook.com/chiomahopeezenwafor?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className=" link link-hover text-red-600"
            >
              {" "}
              <FaFacebookF />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
