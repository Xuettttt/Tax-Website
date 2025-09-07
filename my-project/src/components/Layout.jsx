import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Image from "next/image";
import backgroundImageDefault from "@/images/background-auth.jpg";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export function LoginRegisterLayout({ children, backgroundImage = backgroundImageDefault }) {
  return (
    <div className="relative flex min-h-full justify-center md:px-2 lg:px-0">
      <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
        <main className="mx-auto w-full max-w-md sm:px-4  md:w-96 md:max-w-sm md:px-0">
          {children}
        </main>
      </div>
      <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
        <Image className="absolute inset-0 h-full w-full object-cover"
          src={backgroundImage} alt="background" unoptimized="true" priority />
      </div>
    </div>
  )
}

export default Layout;