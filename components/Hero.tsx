import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-[#6366f1] to-white dark:from-[#1a1a3d] dark:to-[#0B0B14] transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-16 grid md:grid-cols-2 gap-10 items-center relative">
        <div>
          <span className="inline-block bg-white/70 dark:bg-white/10 backdrop-blur text-xs font-medium px-3 py-1.5 rounded-full mb-6 shadow-sm text-gray-900 dark:text-white">
            Version 2.0 is here
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-[#0e1030] dark:text-white">
            Pathway to
            <br />
            productivity
          </h1>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Link
              href="/signup"
              className="bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Get for free
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-900 dark:text-white inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
            >
              Learn more <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="relative h-[340px] flex items-center justify-center">
  {/* Small cylinder - top left of pinwheel */}
  <div className="absolute -top-4 left-2 md:left-4 w-32 h-28 md:w-40 md:h-36 float-slower z-10">
    <Image src="/images/cylinder.png" alt="" fill sizes="160px" className="object-contain drop-shadow-xl" />
  </div>

  {/* Main pinwheel - center */}
  <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] float-slow">
    <Image src="/images/wheel.png" alt="" fill sizes="360px" className="object-contain drop-shadow-2xl" />
  </div>

  {/* Curve accent - bottom right */}
  <div className="absolute -bottom-4 right-0 md:right-2 w-14 h-12 md:w-28 md:h-40 float-slower z-10">
    <Image src="/images/semicircle.png" alt="" fill sizes="132px" className="object-contain drop-shadow-xl" />
  </div>
</div>
      </div>
    </section>
  );
}