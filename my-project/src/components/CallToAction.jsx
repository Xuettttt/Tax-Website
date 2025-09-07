import React from 'react';
import Image from 'next/image';
import Button from "@/components/Button";
import Container from "@/components/Container";
import backgroundImage from "@/images/background-auth.jpg"


const CallToAction = () => {
  return (
    <section id="get-started-today"
      className="relative bg-blue-600 overflow-hidden py-32">
      <Image className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt="Call to Action"
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get Started Today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Radio groups give you the same functionality as native HTML radio inputs, without any of the styling. They're perfect for building out custom UIs for selectors.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Get 6 months free
          </Button>
        </div>

      </Container>
    </section>
  )
}

export default CallToAction