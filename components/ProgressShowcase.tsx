

import { Boxes, Target, Lock, Bell } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Boxes, title: "Integration ecosystem", desc: "Track your progress and motivate your efforts everyday." },
  { icon: Target, title: "Goal setting and tracking", desc: "Set and track your goals with manageable task breakdowns." },
  { icon: Lock, title: "Secure data encryption", desc: "Ensure your data's safety with top-tier encryption." },
  { icon: Bell, title: "Customizable notifications", desc: "Get alerts on tasks and deadlines that matter most." },
];

export default function ProgressShowcase() {
  return (
    <section className="relative max-w-6xl w-full mx-auto px-6 md:px-10 py-16 text-center bg-white dark:bg-[#0B0B14] transition-colors">
    
        <span className="inline-block bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white text-xs font-medium px-3 py-1.5 rounded-full mb-5">
          Boost your productivity
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#0e1030] dark:text-white">
          A more effective way
          <br />
          <span className="text-[#4b3df5] dark:text-indigo-400">to track progress</span>
        </h2>
        <p className="mt-5 text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website in just minutes with the set of free components
          for Framer.
        </p>

        <div className="relative mt-14">
          {/* Circle/torus shape - bottom left, overlapping */}
          <div className="absolute -left-8 -bottom-8 w-44 h-24 md:w-32 md:h-32 z-20 hidden sm:block">
            <Image src="/images/circle.png" alt="" fill className="object-contain drop-shadow-2xl float-slow" />
          </div>

          {/* Diamond shape - top right, overlapping */}
          <div className="absolute -right-6 -top-10 w-24 h-24 md:w-32 md:h-32 z-20 hidden sm:block">
            <Image src="/images/diamond.png" alt="" fill className="object-contain drop-shadow-2xl float-slower" />
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#6366f1] to-transparent rounded-2xl opacity-10 -z-10" />
            <div className="relative rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl shadow-gray-200 dark:shadow-none overflow-hidden">
              <Image
                src="/images/screen.png"
                alt="Dashboard preview"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 text-left">
          {features.map((f) => (
            <div key={f.title} className="border border-gray-100 dark:border-white/10 rounded-xl p-5 bg-gradient-to-br from-[#6366f1]/5 dark:from-[#6366f1]/15 to-transparent hover:shadow-md dark:hover:bg-white/5 transition-shadow">
              <f.icon size={20} className="text-[#4b3df5] dark:text-indigo-400 mb-4" />
              <p className="font-semibold text-sm mb-1 text-[#0e1030] dark:text-white">{f.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{f.desc}</p>
              <span className="text-xs font-medium text-[#0e1030] dark:text-white inline-flex items-center gap-1">
                Learn more →
              </span>
            </div>
          ))}
        </div>
    </section>
  );
}