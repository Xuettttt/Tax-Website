import React, { useState, Fragment } from 'react';
import Image from "next/image";
import Container from "@/components/Container";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
} from "@headlessui/react";
import clsx from "clsx";

import backgroundImg from "@/images/background-auth.jpg";
import Feature1 from "@/images/features-1.jpg";
import Feature2 from "@/images/features-2.jpg";
import Feature3 from "@/images/features-3.jpg";
import Feature4 from "@/images/features-4.jpg";

const features = [
  {
    title: "Feature 1",
    description: "Description 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquet lacinia, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc. Nullam auctor, nunc id aliquet lacinia, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc.",
    image: Feature1
  },
  {
    title: "Feature 2",
    description: "Description 2, You’re great at what you do, but numbers scare the sh#t out of you! That’s OK, because our bookkeepers can help keep your books tidy. Ready to talk it out? We can hone your focus, unlock your purpose and set your goals, so that you’re looking towards long-term success.",
    image: Feature2
  },
  {
    title: "Feature 3",
    description: "Integrating technology into your systems can save you time and simplify many of your processes. We’ll help you work smarter, not harder.",
    image: Feature3
  },
  {
    title: "Feature 4",
    description: "Look forward to retirement when you let us help you set up the administration and management of your self-managed super fund. Need help working out the next steps for your business? Thinking of putting a succession plan in place? We can help with that, too.",
    image: Feature4
  }
]

const PrimaryFeatures = () => {
  const [tabOrientation, setTabOrientation] = useState('horizontal')

  React.useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange(e) {
      setTabOrientation(e.matches ? 'horizontal' : 'vertical')
    }

    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    /**
     * When unmount & re-run useEffect, remove the event listener
     */
    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section id="features"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32">
      <Image src={backgroundImg} alt="Background Image" objectFit="cover" layout="fill" unoptimized={true} />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-blue-600 sm:text-4xl md:text-5xl">Everything you need to run your books</h2>
          <p className="mt-6 text-lg tracking-tight text-white">
            We help you manage your books, so you can focus on what matters most.
          </p>
        </div>

        <TabGroup as="div" className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}>
          <>
            <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
              <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                {features.map((feature, featureIdx) => (
                  <Tab key={featureIdx} as={Fragment}>
                    {({ selected }) => (
                      <div className={
                        clsx("group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6",
                          selected ? "bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10" : "hover:bg-white/10 lg:hover:bg-white/5"
                        )
                      }>
                        <h3
                          className={clsx("font-display text-lg focus:outline-none",
                            selected ? "text-blue-600"
                              : "text-blue-100 hover:text-white"
                          )}>
                          {feature.title}
                        </h3>
                        <p className={clsx(
                          "mt-2  hidden text-sm lg:block",
                          selected ?
                            "text-blue-700" : "text-white group-hover:text-white"
                        )}>
                          {feature.description}
                        </p>
                      </div>)}
                  </Tab>
                ))}
              </TabList>
            </div>
          </>

          <TabPanels className="lg:col-span-7">
            {
              features.map((feature, featureIdx) => (
                <TabPanel key={featureIdx} unmount={false}>
                  <div className="relative sm:px-6 lg:hidden">
                    <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10
                    ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl">
                    </div>
                    <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-10 ml-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem">
                    <Image className="w-full"
                      sizes="(min-width: 1024px) 67.8125rem, (min-width: 768px) 45rem, 100vw"
                      src={feature.image} alt={feature.title} />
                  </div>
                </TabPanel>
              ))
            }
          </TabPanels>
        </TabGroup>
      </Container>
    </section >
  )
}

export default PrimaryFeatures