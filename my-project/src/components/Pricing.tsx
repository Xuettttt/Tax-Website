'use client';
import React from 'react';
import clsx from "clsx";
import Container from "@/components/Container";
import Button from "@/components/Button";
import UnderlineWave from '@/components/svg/Underline';


const PlanList = [
  {
    name: "Pro",
    price: "$29",
    description: "Perfect for small teams who need more advanced features.",
    href: "/register",
    features: [
      'Send unlimited quotes and invoices',
      'Connect up to 5 bank accounts',
      'Track up to 50 expenses per month',
      'Automated payroll support',
      'Export up to 10 reports'
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "$59",
    description: "Ideal for growing businesses with multiple employees.",
    href: "/register",
    features: [
      'Unlimited quotes, invoices, and reports',
      'Connect up to 10 bank accounts',
      'Track unlimited expenses',
      'Full payroll automation',
      'Priority customer support'
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "All-in-one solution with premium support and customization.",
    href: "/register",
    features: [
      'Custom integrations with your tools',
      'Dedicated account manager',
      'Unlimited everything',
      '24/7 premium support',
      'Advanced analytics and insights'
    ],
    featured: false,
  }

]

function CheckMarkIcon({ className = "", width = 70, height = 70 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="470 410 120 120"
      aria-hidden="true"
      className={className}
    >
      <path
        d="m533.566 429.163-25.9 25.9-8.182-8.182"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="513.994" cy="453.678" r="29.992"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      />
      <circle
        cx="513.994" cy="444.223" r="29.992"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      />
    </svg>
  );
}

const Plan = React.forwardRef<HTMLDivElement, {
  name: string
  price: string
  description: string
  href: string
  features: string[]
  featured?: boolean
  onClick: () => void
}>(
  ({ name, price, description, href, features, featured, onClick }, ref) => {
    return (
      <section
        onClick={onClick}
        ref={ref}
        className={clsx("flex flex-col rounded-3xl mb-20 px-6 sm:px-8 ", featured ? "order-first bg-blue-600 py-8 lg:order-none" : "lg:py-8")}>
        <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
        <p className={clsx("mt-2 text-base", featured ? "text-white" : "text-slate-400")}>{description}</p>
        <p className="order-first font-display text-5xl font-light tracking-tight text-white">{price}</p>

        <Button href={href} variant={featured ? "solid" : "outline"} color="white"
          className="mt-8" aria-label={`Get started with the ${name} plan for ${price}`}>
          get start
        </Button>
        <ul role="list"
          className={clsx("order-last mt-10 flex flex-col gap-y-3 text-sm", featured ? "text-white" : "text-slate-400")}>
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-x-3">
              <CheckMarkIcon className={featured ? "text-white" : "text-slate-400"} />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </section>
    )
  }
)

Plan.displayName = "Plan"

const Pricing = () => {
  const [activeIndex, setActiveIndex] = React.useState(
    PlanList.findIndex((plan) => plan.featured)
  );

  const refs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const node = refs.current[activeIndex];
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeIndex]);

  return (
    <section id="pricing" aria-label="Pricing" className="bg-slate-900 py-20 sm:py-32">
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <UnderlineWave className="absolute left-0 top-5/6 h-[1rem] w-full fill-blue-600" />
              <span>Simple pricing,</span>
            </span>{" "}
            for everyone.
          </h2>
          <p className="mt-4 text-lg text-white tracking-tight sm:mt-8">
            In another episode of our client chat series, Andrew sits and more, with a bit of banter on the e!
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-0 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          {
            PlanList.map((plan, planIndex) => (
              <Plan
                key={planIndex}
                ref={(el) => { refs.current[planIndex] = el; }}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                href={plan.href}
                featured={planIndex === activeIndex}
                onClick={() => setActiveIndex(planIndex)}
              />
            ))
          }
        </div>

      </Container>
    </section>
  )
}

export default Pricing