function DesktopNav() {
  return (
    <>
      <nav id="desktop" className="hidden md:flex md:justify-between ">
        <a href="/" className="text-lg font-bold flex items-center">
          Paybuddy
        </a>
        <ul className="flex gap-10 w-[80%] justify-end items-center h-10 font-medium">
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/testimonials">Testimonials</a>
          </li>
          <li className="h-full font-bold">
            <a href="/signup">
              <button className="bg-[#38E078] text-[#0D1A12] w-24 h-full rounded-full">
                Sign up
              </button>
            </a>
            <a href="/login">
              <button className="text-[#0D1A12] h-full rounded-full bg-[#E8F2ED] ml-2 w-24">
                Log In
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

import { useState } from "react";

type display = "hidden" | "flex";

function MobileNav() {
  const [display, setDisplay] = useState<display>("hidden");
  function showMobileNav() {
    setDisplay("flex");
    document.body.style.overflowY = "hidden";
  }
  function hideMobileNav() {
    document.body.style.overflowY = "auto";
    setDisplay("hidden");
  }
  return (
    <>
      <nav className="flex items-center justify-between md:hidden">
        <a href="/" className="text-lg font-bold flex items-center">
          Paybuddy
        </a>
        <ul
          id="mobile"
          className={`${display} absolute top-full h-[calc(100vh-46.5px)] right-0 text-2xl flex-col items-center gap-10 pt-5 bg-black text-white min-w-10/12`}
        >
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/testimonials">Testimonials</a>
          </li>
          <li className="flex flex-col gap-4">
            <a href="/signup" className="text-blue-400">SignUp</a>
            <a href="/login" className="text-gray-400">Log In</a>
          </li>
        </ul>
        <div
          id="toggle"
          onClick={() =>
            display == "hidden" ? showMobileNav() : hideMobileNav()
          }
        >
          <img src="/icon-hamburger.svg" alt="menu button" />
        </div>
      </nav>
    </>
  );
}

function Header() {
  return (
    <header className="px-[5vw] md:px-10 py-3 border-b-[#E5E8EB] border-b-1 sticky top-0 bg-white">
      <MobileNav />
      <DesktopNav />
    </header>
  );
}

export default Header;
  
