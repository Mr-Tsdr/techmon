import { Gem, Handshake, Star } from "lucide-react";

export default function Features() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 transition-transform duration-500 hover:scale-105 cursor-pointer">
            Our Payment Package
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a variety of payment packages to suit your needs and
            capabilities. Choose from a flexible option that suits your business
            and use our services more effectively!
          </p>
        </div>

        {/* Business Cards */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              icon: (
                <Star className="size-8 text-red-400 dark:text-red-400 transition-transform group-hover:rotate-6" />
              ),
              title: "Starter",
              description:
                "₩700,000 (~$500) for a basic POS system, customer registration",
            },
            {
              icon: (
                <Handshake className="size-8 text-red-400 dark:text-red-400 transition-transform group-hover:rotate-6" />
              ),
              title: "Business",
              description:
                "₩1,400,000 (~$1,000) for POS + CRM + income and expense management",
            },
            {
              icon: (
                <Gem className="size-8 text-red-400 dark:text-red-400 transition-transform group-hover:rotate-6" />
              ),
              title: "Premium",
              description:
                "₩2,800,000 (~$2,000) ERP, multi-branch management, reporting system",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl 
    bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700
    p-8 shadow-md transition-all duration-300 
    hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="mb-4 text-white">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
