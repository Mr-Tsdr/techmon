import Image from "next/image";

export default function ContentSection() {
  // const services = [
  //   {
  //     title: "Radiation Measurement",
  //     description: "Sales and maintenance of instruments for measuring all types of radiation (alpha, beta, gamma, neutron).",
  //     icon: (
  //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     title: "Geophysical Surveys",
  //     description: "Borehole geophysical surveys for coal, water, uranium, and other exploratory research wells.",
  //     icon: (
  //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  //       </svg>
  //     )
  //   },
  //   {
  //     title: "Radiation Protection",
  //     description: "Sales of protection equipment, lead shields fabrication, and professional training services.",
  //     icon: (
  //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     title: "Environmental Analysis",
  //     description: "Professional radiation measurement and consulting services for environmental protection.",
  //     icon: (
  //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  //       </svg>
  //     )
  //   },
  //   {
  //     title: "Laboratory Research",
  //     description: "Comprehensive analysis of air, water, soil, building materials, and food samples.",
  //     icon: (
  //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  //       </svg>
  //     )
  //   }
  // ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="services">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-16">
      <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
        Our Services
      </span>
      <h2
  className="text-balance text-4xl font-bold lg:text-5xl mb-4 text-gray-900 dark:text-white cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-pink-500 hover:via-yellow-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
>
  Website & Mobile App Development
</h2>
      <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        We create web and mobile solutions based on modern technology that
        meet your business needs and offer user-friendly and fast
        operations.
      </p>
    </div>

    {/* Full-width image */}
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 group cursor-pointer">
      <Image
        src="/images/feature.jpg"
        alt="Radiation measurement equipment"
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
    </div>
  </div>
</section>

  );
}
