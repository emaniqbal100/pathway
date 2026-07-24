import Navbar from "@/components/Navbar";
import CtaFooter from "@/components/CtaFooter";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex-1 pt-[72px] bg-white dark:bg-[#0B0B14] transition-colors">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <p className="text-xs text-gray-400 mb-8">Section / About Us</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[380px]">
            <div className="absolute top-0 left-10 w-32 h-32 md:w-40 md:h-40 float-slow">
              <Image src="/images/wheel.png" alt="" fill sizes="160px" className="object-contain drop-shadow-2xl" />
            </div>
            <div className="absolute bottom-0 left-0 w-28 h-28 md:w-36 md:h-36 float-slower">
              <Image src="/images/cylinder.png" alt="" fill sizes="144px" className="object-contain drop-shadow-xl" />
            </div>
            <div className="absolute top-16 right-0 bg-white dark:bg-[#13131f] rounded-2xl border border-gray-100 dark:border-white/10 shadow-xl p-5 w-56">
              <div className="flex items-center gap-2 text-2xl font-extrabold text-gray-900 dark:text-white">
                30,000+
                <TrendingUp size={18} className="text-emerald-500" />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Users in 2026 with 5 star ratings and happy clients.
              </p>
              <div className="flex -space-x-2 mt-4">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="w-8 h-8 rounded-full iridescent border-2 border-white dark:border-[#13131f]" />
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">A bit</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2 mb-6 text-[#0e1030] dark:text-white">
              About us
            </h1>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Pathway was built for people who want to see their progress, not just track it.
              We believe productivity tools should motivate, not overwhelm — so we designed
              an app that celebrates every milestone along the way.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white text-sm font-medium px-5 py-3 rounded-full shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/40 transition-all"
            >
              Explore more <ArrowRight size={16} />
            </Link>

            <div className="mt-10">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Best ratings</p>
              <div className="w-32 h-1.5 rounded-full bg-gray-100 dark:bg-white/10 mb-3">
                <div className="w-4/5 h-full rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
              </div>
              <div className="flex gap-2 text-lg">😍 😊 🙂 😐</div>
            </div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
