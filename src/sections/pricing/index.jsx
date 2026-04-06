import { useState } from "react";

import "./styles.css";

const PricingComponent = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingData = [
    {
      title: "Freelancer",
      price: 15,
    },
    {
      title: "Startups",
      price: 29,
    },
    {
      title: "Enterprise",
      price: 79,
    },
  ];

  const discount = 0.2;

  const checkHandler = () => {
    setIsYearly(!isYearly);
  };

  return (
    <>
      <section
        className="
     bg-white
     pt-20
     lg:pt-[120px]
     pb-12
     lg:pb-[90px]
     relative
     z-20
     overflow-hidden
     "
      >
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Precios
                </span>
                <h2
                  className="
              font-bold
              text-3xl
              sm:text-4xl
              md:text-[40px]
              text-dark
              mb-4
              "
                >
                  Nuestros planes
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex mb-5 flex-col items-center">
            <div className="flex">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="switch-link"
                  className="font-sans antialiased text-base cursor-pointer text-stone-600"
                >
                  Monthly
                </label>

                <input
                  id="switch-link"
                  type="checkbox"
                  checked={isYearly}
                  onChange={checkHandler}
                  className="appearance-none relative inline-block rounded-full w-12 h-6 cursor-pointer before:inline-block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-stone-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:top-2/4 after:left-0 after:-translate-y-2/4 after:w-6 after:h-6 after:border after:border-stone-200 after:bg-white after:rounded-full checked:after:translate-x-full after:transition-all after:duration-200 after:ease-in disabled:opacity-50 disabled:cursor-not-allowed dark:after:bg-white checked:before:bg-stone-800 checked:after:border-stone-800"
                />
                <label
                  htmlFor="switch-link"
                  className="font-sans antialiased text-base cursor-pointer text-stone-600"
                >
                  Yearly
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
           bg-white
           rounded-xl
           relative
           z-10
           overflow-hidden
           border border-primary border-opacity-20
           shadow-pricing
           py-10
           px-8
           sm:p-12
           lg:py-10 lg:px-6
           xl:p-12
           mb-10
           "
              >
                <span className="text-primary font-semibold text-lg block mb-4">
                  {pricingData[0].title}
                </span>
                <h2 className="font-bold text-dark mb-2 text-[42px]">
                  $
                  {isYearly
                    ? (pricingData[0].price * 12 * 0.8 + 1).toFixed(0)
                    : pricingData[0].price}
                  <span className="text-base text-body-color font-medium">
                    {isYearly ? "/ year" : "/ month"}
                  </span>
                </h2>
                {isYearly && (
                  <>
                    <p className=" text-sm mb-2">
                      Estarías ahorrando:
                      <span className="font-bold">
                        {" "}
                        ${(pricingData[0].price * 12 * 0.2).toFixed(0)}
                      </span>{" "}
                      al año
                    </p>

                    <p className=" text-sm mb-2">
                      {discount * 100}% de descuento aplicado
                    </p>
                  </>
                )}
                <p
                  className="
              text-base text-body-color
              pb-8
              mb-8
              border-b border-[#F2F2F2]
              "
                >
                  💼 Ideal para profesionales independientes que buscan
                  soluciones simples pero efectivas.
                </p>
                <div className="mb-7">
                  <p className="text-base text-body-color leading-loose mb-1">
                    1 User
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    All UI components
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Lifetime access
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Free updates
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Use on 1 (one) project
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    3 Months support
                  </p>
                </div>
                <a
                  href="javascript:void(0)"
                  className="
              w-full
              block
              text-base
              font-semibold
              text-primary
              bg-transparent
              border border-[#D4DEFF]
              rounded-md
              text-center
              p-4
              hover:text-white hover:bg-primary hover:border-primary
              transition
              "
                >
                  Choose Personal
                </a>
                <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                    <svg
                      width={77}
                      height={172}
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={86}
                        cy={86}
                        r={86}
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1={86}
                          y1={0}
                          x2={86}
                          y2={172}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3056D3" stopOpacity="0.09" />
                          <stop
                            offset={1}
                            stopColor="#C4C4C4"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-4 top-4 z-[-1]">
                    <svg
                      width={41}
                      height={89}
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
           bg-white
           rounded-xl
           relative
           z-10
           overflow-hidden
           border border-primary border-opacity-20
           shadow-pricing
           py-10
           px-8
           sm:p-12
           lg:py-10 lg:px-6
           xl:p-12
           mb-10
           "
              >
                <span className="text-primary font-semibold text-lg block mb-4">
                  {pricingData[1].title}
                </span>
                <h2 className="font-bold text-dark mb-2 text-[42px]">
                  $
                  {isYearly
                    ? (pricingData[1].price * 12 * 0.8 + 1).toFixed(0)
                    : pricingData[1].price}
                  <span className="text-base text-body-color font-medium">
                    {isYearly ? "/ year" : "/ month"}
                  </span>
                </h2>
                {isYearly && (
                  <>
                    <p className=" text-sm mb-2">
                      Estarías ahorrando:
                      <span className="font-bold">
                        {" "}
                        ${(pricingData[1].price * 12 * 0.2).toFixed(0)}
                      </span>{" "}
                      al año
                    </p>

                    <p className=" text-sm mb-2">
                      {discount * 100}% de descuento aplicado
                    </p>
                  </>
                )}
                <p
                  className="
              text-base text-body-color
              pb-8
              mb-8
              border-b border-[#F2F2F2]
              "
                >
                  🚀 Perfecto para proyectos en crecimiento que necesitan algo
                  más robusto
                </p>
                <div className="mb-7">
                  <p className="text-base text-body-color leading-loose mb-1">
                    5 Users
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    All UI components
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Lifetime access
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Free updates
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Use on 3 (Three) project
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    4 Months support
                  </p>
                </div>
                <a
                  href="javascript:void(0)"
                  className="
              w-full
              block
              text-base
              font-semibold
              text-white
              bg-primary
              border border-primary
              rounded-md
              text-center
              p-4
              hover:bg-opacity-90
              transition
              "
                >
                  Choose Business
                </a>
                <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                    <svg
                      width={77}
                      height={172}
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={86}
                        cy={86}
                        r={86}
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1={86}
                          y1={0}
                          x2={86}
                          y2={172}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3056D3" stopOpacity="0.09" />
                          <stop
                            offset={1}
                            stopColor="#C4C4C4"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-4 top-4 z-[-1]">
                    <svg
                      width={41}
                      height={89}
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
           bg-white
           rounded-xl
           relative
           z-10
           overflow-hidden
           border border-primary border-opacity-20
           shadow-pricing
           py-10
           px-8
           sm:p-12
           lg:py-10 lg:px-6
           xl:p-12
           mb-10
           "
              >
                <span className="text-primary font-semibold text-lg block mb-4">
                  {pricingData[2].title}
                </span>
                <h2 className="font-bold text-dark mb-2 text-[42px]">
                  $
                  {isYearly
                    ? (pricingData[2].price * 12 * 0.8 + 1).toFixed(0)
                    : pricingData[2].price}
                  <span className="text-base text-body-color font-medium">
                    {isYearly ? "/ year" : "/ month"}
                  </span>
                </h2>
                {isYearly && (
                  <>
                    <p className=" text-sm mb-2">
                      Estarías ahorrando:
                      <span className="font-bold">
                        {" "}
                        ${(pricingData[2].price * 12 * 0.2).toFixed(0)}
                      </span>{" "}
                      al año
                    </p>

                    <p className=" text-sm mb-2">
                      {discount * 100}% de descuento aplicado
                    </p>
                  </>
                )}
                <p
                  className="
              text-base text-body-color
              pb-8
              mb-8
              border-b border-[#F2F2F2]
              "
                >
                  🏢 Pensado para negocios que necesitan escalabilidad y
                  personalización avanzada
                </p>
                <div className="mb-7">
                  <p className="text-base text-body-color leading-loose mb-1">
                    Unlimited Users
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    All UI components
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Lifetime access
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Free updates
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Use on Unlimited project
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    12 Months support
                  </p>
                </div>
                <a
                  href="javascript:void(0)"
                  className="
              w-full
              block
              text-base
              font-semibold
              text-primary
              bg-transparent
              border border-[#D4DEFF]
              rounded-md
              text-center
              p-4
              hover:text-white hover:bg-primary hover:border-primary
              transition
              "
                >
                  Choose Professional
                </a>
                <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                    <svg
                      width={77}
                      height={172}
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={86}
                        cy={86}
                        r={86}
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1={86}
                          y1={0}
                          x2={86}
                          y2={172}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3056D3" stopOpacity="0.09" />
                          <stop
                            offset={1}
                            stopColor="#C4C4C4"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-4 top-4 z-[-1]">
                    <svg
                      width={41}
                      height={89}
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="38.9138"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 38.9138 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 38.9138 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 38.9138 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 38.9138 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 38.9138 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 38.9138 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 38.9138 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.9138"
                        cy="1.42021"
                        r="1.42021"
                        transform="rotate(180 38.9138 1.42021)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 26.4157 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 26.4157 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 26.4157 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 26.4157 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 26.4157 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 26.4157 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 26.4157 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.4157"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 26.4157 1.4202)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 13.9177 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 13.9177 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 13.9177 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 13.9177 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 13.9177 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 13.9177 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 13.9177 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.9177"
                        cy="1.42019"
                        r="1.42021"
                        transform="rotate(180 13.9177 1.42019)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="87.4849"
                        r="1.42021"
                        transform="rotate(180 1.41963 87.4849)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="74.9871"
                        r="1.42021"
                        transform="rotate(180 1.41963 74.9871)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="62.4892"
                        r="1.42021"
                        transform="rotate(180 1.41963 62.4892)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="38.3457"
                        r="1.42021"
                        transform="rotate(180 1.41963 38.3457)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="13.634"
                        r="1.42021"
                        transform="rotate(180 1.41963 13.634)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="50.2754"
                        r="1.42021"
                        transform="rotate(180 1.41963 50.2754)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="26.1319"
                        r="1.42021"
                        transform="rotate(180 1.41963 26.1319)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.41963"
                        cy="1.4202"
                        r="1.42021"
                        transform="rotate(180 1.41963 1.4202)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingComponent;
