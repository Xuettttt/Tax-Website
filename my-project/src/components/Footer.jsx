import React from 'react';
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Link from "next/link";
import NavLink from "@/components/NavLink";

const Footer = () => {
  return (
    <div className="pt-8 py-8">
      <Container>
        <nav className="flex justify-center relative z-50">
          <Link href="/" aria-label="Home">
            <Logo className="w-auto h-22" />
          </Link>
        </nav>
        <nav className="flex justify-center relative z-50 mt-5">
          <div className="flex items-center md:gap-x-12 ">
            <NavLink href="/features" >Features</NavLink>
            <NavLink href="/testimonials">Testimonials</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
          </div>
        </nav>
        <div className="relative mt-6 flex items-center justify-between border-t border-slate-200 pt-6">
          <div className="text-sm text-slate-500">
            Copyright &copy; {new Date().getFullYear()} Tailwind. All rights reserved.
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Footer