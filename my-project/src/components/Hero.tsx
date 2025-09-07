import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Image from 'next/image';
import logoExchange from "@/images/foreign-exchange.svg";
import logoFund from "@/images/fund.svg";
import logoInsurance from "@/images/insurance.svg";
import logoLaw from "@/images/law.svg";
import logoCategory from "@/images/my-category.svg";
import logoP2P from "@/images/p2p.svg";
import UnderlineWave from '@/components/svg/Underline';

const HeroCompanyLogoData = [
  [
    { name: "Exchange", logo: logoExchange },
    { name: "Fund", logo: logoFund },
    { name: "Insurance", logo: logoInsurance }
  ],
  [
    { name: "Law", logo: logoLaw },
    { name: "Category", logo: logoCategory },
    { name: "P2P", logo: logoP2P }
  ]
]

function HeroRegSvg() {
  return (
    <>
      <svg
        aria-hidden="true"
        className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
      >
        <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
      </svg>
    </>
  );
}

const Hero = () => {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      {/** h1 */}
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Accounting{" "}
        <span className="relative whitespace-nowrap text-blue-600">
          <UnderlineWave />
          <span className="relative">made simple</span>
        </span>{" "}
      </h1>
      {/** Description */}
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight pt-8 text-slate-700">Most bookkeeping software is accurate, but hard to use. We make it simple.</p>
      {/** Sign */}
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register" color="blue">
          Get Started
        </Button>
        <Button href="http://xueeettt.online" variant="outline">
          <HeroRegSvg />
          <span className="ml-3">
            Register for Free
          </span>
        </Button>
      </div>

      {/** Function Logos */}
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">Trusted by these 1000+ businesses</p>
        <ul role="list" className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-ro xl:gap-x-12 xl:gap-y-0">
          {HeroCompanyLogoData.map((group, groupIndex) => (
            <li key={groupIndex} >
              <ul role="list" className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
                {
                  group.map((company, companyIndex) => (
                    <li key={companyIndex}>
                      <Image
                        src={company.logo}
                        alt={company.name}
                        unoptimized
                      />
                    </li>
                  ))
                }
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>

  )
}

export default Hero;