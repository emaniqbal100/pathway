// import Link from "next/link";
// import { Check } from "lucide-react";

// const plans = [
//   {
//     name: "Free",
//     price: "$0",
//     cta: "Get started for free",
//     dark: false,
//     features: ["Up to 5 project members", "Unlimited tasks and projects", "2GB storage", "Integrations", "Basic support"],
//   },
//   {
//     name: "Pro",
//     price: "$9",
//     cta: "Sign up now",
//     dark: true,
//     badge: "Most Popular",
//     features: ["Up to 50 project members", "Unlimited tasks and projects", "50GB storage", "Integrations", "Priority support", "Advanced support", "Export support"],
//   },
//   {
//     name: "Business",
//     price: "$19",
//     cta: "Sign up now",
//     dark: false,
//     features: ["Up to 5 project members", "Unlimited tasks and projects", "200GB storage", "Integrations", "Dedicated account manager", "Custom fields", "Advanced analytics", "Export capabilities", "API access", "Advanced security features"],
//   },
// ];

// export default function Pricing() {
//   return (
//     <section className="max-w-6xl mx-auto px-6 md:px-10 py-12 bg-white dark:bg-[#0B0B14] transition-colors duration-300">
//       <div className="grid md:grid-cols-3 gap-6 items-start">
//         {plans.map((plan) => (
//           <div
//             key={plan.name}
//             className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
//               plan.dark ? "md:scale-105" : ""
//             }`}
//           >
//             {/* Glow effect behind card */}
//             <div
//               className={`absolute -inset-1 rounded-2xl blur-xl bg-gradient-to-r from-indigo-300 to-fuchsia-300 dark:from-indigo-500 dark:to-fuchsia-500 transition-opacity ${
//                 plan.dark ? "opacity-30 dark:opacity-35" : "opacity-20 dark:opacity-25"
//               }`}
//             />

//             {/* Actual card */}
//             <div
//               className={`relative rounded-2xl p-6 border bg-white text-gray-900 border-gray-100 shadow-lg shadow-indigo-100/50 dark:text-white dark:border-white/10 dark:shadow-black/40 ${
//                 plan.dark
//                   ? "dark:bg-gradient-to-b dark:from-[#1a1a2e] dark:to-[#12121f] dark:border-indigo-500/20"
//                   : "dark:bg-[#13131f]"
//               }`}
//             >
//               {plan.badge && (
//                 <span className="absolute top-6 right-6 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-sm">
//                   {plan.badge}
//                 </span>
//               )}

//               <p className="text-sm mb-4 text-gray-400 dark:text-indigo-300/80">
//                 {plan.name}
//               </p>

//               <p className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
//                 {plan.price}
//                 <span className="text-sm font-medium ml-1 text-gray-400 dark:text-gray-500">/monthly</span>
//               </p>

//               <Link
//                 href="#"
//                 className="block text-center text-sm font-medium py-2.5 rounded-full mb-6 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-md shadow-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all duration-300"
//               >
//                 {plan.cta}
//               </Link>

//               <ul className="space-y-2.5">
//                 {plan.features.map((f) => (
//                   <li key={f} className="flex items-start gap-2 text-sm">
//                     <span className="mt-0.5 shrink-0 rounded-full p-0.5 bg-indigo-50 dark:bg-indigo-500/15">
//                       <Check size={12} className="text-indigo-500 dark:text-indigo-300" />
//                     </span>
//                     <span className="text-gray-600 dark:text-gray-300">{f}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    cta: "Get started for free",
    dark: false,
    features: ["Up to 5 project members", "Unlimited tasks and projects", "2GB storage", "Integrations", "Basic support"],
  },
  {
    name: "Pro",
    price: "$9",
    cta: "Sign up now",
    dark: true,
    badge: "Most Popular",
    features: ["Up to 50 project members", "Unlimited tasks and projects", "50GB storage", "Integrations", "Priority support", "Advanced support", "Export support"],
  },
  {
    name: "Business",
    price: "$19",
    cta: "Sign up now",
    dark: false,
    features: ["Up to 5 project members", "Unlimited tasks and projects", "200GB storage", "Integrations", "Dedicated account manager", "Custom fields", "Advanced analytics", "Export capabilities", "API access", "Advanced security features"],
  },
];

export default function Pricing() {
  return (
    <section className="w-full max-w-6xl mx-auto px-7 md:px-10 py-12 bg-white dark:bg-[#0B0B14] transition-colors duration-300">
      <div className="max-w-6xl  grid md:grid-cols-3 gap-8 items-start ">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
              plan.dark ? "md:scale-105" : ""
            }`}
          >
            {/* Glow effect behind card - subtle, tight */}
            <div
              className={`absolute -inset-0.5 rounded-2xl blur-md bg-gradient-to-r from-indigo-300 to-fuchsia-300 dark:from-indigo-600 dark:to-fuchsia-600 transition-opacity ${
                plan.dark ? "opacity-25 dark:opacity-15" : "opacity-15 dark:opacity-[0.08]"
              }`}
            />

            {/* Actual card */}
            <div
              className={`relative rounded-2xl p-6 border bg-white text-gray-900 border-gray-100 shadow-lg shadow-indigo-100/50 dark:text-white dark:border-white/10 dark:shadow-none ${
                plan.dark
                  ? "dark:bg-gradient-to-b dark:from-[#1a1a2e] dark:to-[#12121f] dark:border-indigo-500/20"
                  : "dark:bg-[#13131f]"
              }`}
            >
              {plan.badge && (
                <span className="absolute top-6 right-6 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-sm">
                  {plan.badge}
                </span>
              )}

              <p className="text-sm mb-4 text-gray-400 dark:text-indigo-300/80">
                {plan.name}
              </p>

              <p className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
                {plan.price}
                <span className="text-sm font-medium ml-1 text-gray-400 dark:text-gray-500">/monthly</span>
              </p>

              <Link
                href="#"
                className="block text-center text-sm font-medium py-2.5 rounded-full mb-6 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                {plan.cta}
              </Link>

              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 shrink-0 rounded-full p-0.5 bg-indigo-50 dark:bg-indigo-500/15">
                      <Check size={12} className="text-indigo-500 dark:text-indigo-300" />
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}