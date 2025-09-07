import React from 'react';
import Image from "next/image";
import Container from '@/components/Container';

import avatar1 from "@/images/avatar-1.png";
import avatar2 from "@/images/avatar-2.png";
import avatar3 from "@/images/avatar-3.png";
import avatar4 from "@/images/avatar-4.png";
import avatar5 from "@/images/avatar-5.png";
import avatar6 from "@/images/avatar-6.png";

const testimonials = [
  [
    {
      content: "You understood why we do what we do, that's probably what has made the relationship with TaxWeb so easy and so exciting.",
      author: "Jorge",
      role: "CEO, TaxWeb",
      image: avatar1
    },
    {
      content: "Working with your team has been seamless — you truly listened to our needs and delivered beyond expectations.",
      author: "Sophia",
      role: "Head of Marketing, BrightEdge",
      image: avatar2
    }
  ],
  [
    {
      content: "Your professionalism and creativity have transformed the way we operate. It's been a game-changer for us.",
      author: "Daniel",
      role: "Founder, NovaTech",
      image: avatar3
    },
    {
      content: "I’ve never experienced such dedication and clarity in communication. You made the entire process stress-free.The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
      author: "Ava",
      role: "COO, GreenPath",
      image: avatar4
    },
  ],
  [
    {
      content: "From the very beginning, you understood our vision and turned it into reality — simply outstanding work.",
      author: "Liam",
      role: "Managing Director, Horizon Group",
      image: avatar5
    },
    {
      content: "The collaboration has been effortless, and the results speak for themselves — innovative, reliable, and inspiring.",
      author: "Mia",
      role: "Product Manager, CloudSync",
      image: avatar6
    }
  ]
]

type QuoteIconProps = {
  fill?: string
  width?: number
  height?: number
  className?: string
}

function QuoteIcon({
  fill = "#8fcbe5",
  width = 70,
  height = 70,
  className = ""
}: QuoteIconProps) {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M72.326,147.33c4.284-26.928,37.944-55.692,64.26-56.304c1.836,0,3.672-0.612,4.896-1.836
        c1.224-0.612,2.448-1.224,3.06-3.06c9.18-17.136,4.284-30.6-11.016-41.616c-17.748-12.852-45.9,0-59.976,11.628
        C38.054,85.518,1.946,136.313,3.782,184.662c-6.12,32.437-4.896,67.32,4.284,96.084c6.12,18.36,23.868,27.54,42.228,28.764
        c18.36,1.225,56.304,6.732,72.828-4.283c16.524-11.017,17.748-32.437,19.584-50.796c1.836-20.196,7.344-58.141-9.792-74.053
        C115.778,165.078,66.818,181.602,72.326,147.33z"
      />
      <path d="M274.286,147.33c4.284-26.928,37.943-55.692,64.26-56.304c1.836,0,3.672-0.612,4.896-1.836
        c1.225-0.612,2.448-1.224,3.061-3.06c9.18-17.136,4.284-30.6-11.016-41.616c-17.748-12.852-45.9,0-59.977,11.628
        c-35.496,29.376-71.604,80.172-69.768,128.52c-6.12,32.437-4.896,67.32,4.283,96.084c6.12,18.36,23.868,27.54,42.229,28.764
        c18.36,1.225,56.304,6.732,72.828-4.283c16.523-11.017,17.748-32.437,19.584-50.796c1.836-20.196,7.344-58.141-9.792-74.053
        C317.738,165.078,268.166,181.602,274.286,147.33z"
      />
    </svg>
  )
}

const Testimonials = () => {
  return (
    <section id="testimonials"
      aria-label="What our customer say"
      className="bg-slate-50 py-20 sm:py-32">
      <Container>
        {/**Header*/}
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Ready for some award-winning advice?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our Better Business Guide is our gift to you. We’ve wrangled 14 thought leaders, including some of the members of our team of stars, compiled their expert advice and tips and put it all under one cover. Grab your free Better Business Guide today.
          </p>
        </div>
        {/**Body*/}
        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {
            testimonials.map((testimonialGroup, testimonialGroupIndex) => (
              <li key={testimonialGroupIndex}>
                <ul role="list" className="flex flex-col gap-6 sm:gap-y-8">
                  {
                    testimonialGroup.map((testimonial, testimonialIndex) => (
                      <li key={testimonialIndex}>
                        <figure className="relative rounded-2xl bg-white p-6 shadow-lg shadow-slate-900/10 overflow-hidden">
                          <QuoteIcon className="absolute top-6 left-6 fill-slate-200" />
                          <blockquote className="relative text-lg text-slate-900 tracking-tight">
                            {testimonial.content}
                          </blockquote>
                          <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-200 pt-6">
                            <div>
                              <div className="font-display text-base text-slate-900">
                                {testimonial.author}
                              </div>
                              <div className="mt-1 text-sm text-slate-500">
                                {testimonial.role}
                              </div>
                            </div>
                            <Image src={testimonial.image} alt={testimonial.author} className="h-14 w-14 object-cover overflow-hidden rounded-full"
                              width={56} height={56} />
                          </figcaption>
                        </figure>
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>
      </Container >
    </section >
  )
}

export default Testimonials