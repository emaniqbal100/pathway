import Navbar from "@/components/Navbar";
import CtaFooter from "@/components/CtaFooter";
import Image from "next/image";
import { Boxes, Target, Lock, Bell, Zap, BarChart3 } from "lucide-react";

const features = [
  { icon: Boxes, title: "Integration ecosystem", desc: "Connect all your favorite tools in one place.", shape: "/images/3d%20shape.png" },
  { icon: Target, title: "Goal setting and tracking", desc: "Break big goals into achievable milestones.", shape: "/images/diamond.png" },
  { icon: Lock, title: "Secure data encryption", desc: "Top-tier encryption keeps your data safe.", shape: "/images/star.png" },
  { icon: Bell, title: "Customizable notifications", desc: "Get alerts only on what matters most.", shape: "/images/cylinder.png" },
  { icon: Zap, title: "Automations", desc: "Automate repetitive tasks and save time.", shape: "/images/sprial.png" },
  { icon: BarChart3, title: "Advanced analytics", desc: "Understand your progress with clear insights.", shape: "/images/circle.png" },
];

export default function FeaturesPage() {
  return (
    <main className="flex-1 pt-[72px] bg-white dark:bg-[#0B0B14] transition-colors">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 text-center">
        <span className="inline-block bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white text-xs font-medium px-3 py-1.5 rounded-full mb-5">
          Everything you need
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0e1030] dark:text-white mb-6">
          Powerful features,
          <br />
          <span className="text-indigo-500 dark:text-indigo-400">built for progress</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-16">
          Every feature is designed to help you plan, track, and celebrate your work — without the clutter.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#13131f] p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-16 h-16 mb-5">
                <Image src={f.shape} alt="" fill sizes="64px" className="object-contain" />
              </div>
              <f.icon size={20} className="text-indigo-500 dark:text-indigo-400 mb-3" />
              <h3 className="font-semibold text-[#0e1030] dark:text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
