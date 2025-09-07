import React, { Fragment } from 'react';
import Image from "next/image";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import Container from "@/components/Container";
import Image1 from "@/images/second-1.jpg";
import Image2 from "@/images/second-2.jpg";
import Image3 from "@/images/second-3.jpg";
import clsx from "clsx";
// 修改导入方式，使用动态导入
import Icon1 from "@/components/svg/icon-1.svg";
import Icon2 from "@/components/svg/icon-2.svg";
import Icon3 from "@/components/svg/icon-3.svg";

const features = [
  {
    name: "Feature 1",
    image: Image1,
    summary: "Summary 1",
    description: "ghkdslj ghrilsdl vhlfgls glsre fgjlsp fsllse ghlsljf ghrilsdl vhlfgls glsre fgjlsp fsllse ghlsljf",
    icon: Icon1
  },
  {
    name: "Feature 2",
    image: Image2,
    summary: "Summary 2 ",
    description: "ghslkkr4llk ghskjl gjoip[uy u[[[[ hjkd tews hjklr gb  fnskl rhkskkd Free Biological Gene Duotone Icons SVG Vectors and Icons. Biological",
    icon: Icon2
  },
  {
    name: "Feature 3",
    image: Image3,
    summary: "Summary 3",
    description: "The free SVG converter tool from Adobe Express lets you upload any JPG or PNG image and convert it to a vector in seconds",
    icon: Icon3
  }
];

const FeatureHeader = ({ feature, isActive, className, ...props }) => {
  return (
    <section className={clsx(className, !isActive && "opacity-75 hover:opacity-100")} {...props}>
      {/**ICON*/}
      <div className={clsx("w-9 rounded-lg ", isActive ? "bg-blue-600" : "bg-slate-500")}>
        <Image
          src={feature.icon}
          alt={feature.name}
          width={36}
          height={36}
          className="h-9 w-9"
        />
      </div>
      {/**TITLE*/}
      <h3 className={clsx("mt-6 text-sm font-medium", isActive ? 'text-blue-600' : 'text-slate-500')}>
        {feature.name}
      </h3>
      {/**SUMMARY*/}
      <p className="mt-2 font-display text-xl text-slate-900">{feature.summary}</p>
      {/**SUMMARY*/}
      <p className="mt-2 mb-4 text-sm text-slate-500">{feature.description}</p>
      {/**DESCRIPTION*/}
    </section>
  )
}

function SecondaryFeatureHeader() {
  return (
    <div className="mx-auto max-w-2xl md:text-center">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Simplify everyday business tasks
      </h2>
      <p className="mt-4 text-lg text-slate-600">
        Explore our amazing secondary features that make our product stand out.
      </p>
    </div>
  )
}

const SecondaryFeaturesDesktop = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <div className="mt-16 hidden lg:block">
      <TabGroup onChange={setIndex} as="div" >
        <TabList className="grid grid-cols-3 gap-x-8">
          {features.map((feature, featureIndex) => (
            <Tab key={featureIndex} as={Fragment}>
              {({ selected }) => (
                <FeatureHeader
                  feature={feature}
                  isActive={selected}
                  className="relative outline-none cursor-pointer rounded-2xl bg-white p-6"
                />
              )}
            </Tab>
          ))}
        </TabList>
        <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-slate-200">
          <TabPanels className="flex h-full transition-transform duration-500 ease-in-out rounded-4xl bg-slate-200 px-14 py-16 xl:px-1"
            style={{ transform: `translateX(-${index * 70}%)` }}>
            {features.map((feature, featureIndex) => (
              <TabPanel
                static key={featureIndex}
                className={`w-[80%] h-full flex-shrink-0 focus:outline-none ${index === featureIndex ? 'opacity-100' : 'opacity-30'}`}
              >
                <div className="max-w-2xl mx-auto">
                  <Image
                    className="w-full max-h-[400px] object-contain rounded-xl"
                    src={feature.image}
                    alt={feature.name}
                  />
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </div>
      </TabGroup>
    </div >
  )
}

const SecondaryFeaturesMobile = () => {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {
        features.map((feature, featureIndex) => (
          <div key={featureIndex}>
            <FeatureHeader feature={feature} className="flex flex-col gap-y-4" isActive={true} />
            <div className="relative mt-10 pb-10">
              <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
              <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5">
                <Image className="w-full" src={feature.image} alt={feature.name} width={800} height={600} />
              </div>
            </div>
          </div>
        ))
      }
    </div >
  )
}

const SecondaryFeatures = () => {
  return (
    <section id="secondary-features" aria-label="Features for simplicity and ease of use"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <SecondaryFeatureHeader />
        <SecondaryFeaturesDesktop />
        <SecondaryFeaturesMobile />
      </Container>

    </section>
  )
}

export default SecondaryFeatures;