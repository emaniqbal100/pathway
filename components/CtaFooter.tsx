import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const footerCols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Integrations", href: "#" },
      { label: "Updates", href: "/updates" },
      { label: "FAQ", href: "/help" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Manifesto", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Examples", href: "#" },
      { label: "Community", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Docs", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

export default function CtaFooter() {
  return (
    <>
      <section className="w-full py-12 bg-white dark:bg-[#0B0B14] transition-colors overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-10 rounded-xl shadow-xl shadow-indigo-500/50">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 py-10">
            {/* Star shape - left */}
            <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 float-slow">
              <Image src="/images/star.png" alt="" fill sizes="224px" className="object-contain drop-shadow-2xl" />
            </div>

            {/* Center text */}
            <div className="relative text-center flex-1 max-w-md">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-[#0e1030] dark:text-white">
                Sign up for free today
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Celebrate the joy of accomplishment with an app designed to
                track your progress and motivate your efforts.
              </p>
              <div className="flex items-center justify-center gap-6">
                <Link
                  href="#"
                  className="bg-black dark:bg-white text-white dark:text-black text-sm font-medium px-5 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  Get for free
                </Link>
                <Link href="/features" className="text-sm font-medium text-gray-900 dark:text-white inline-flex items-center gap-1.5">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Spiral shape - right */}
            <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 float-slower">
              <Image src="/images/sprial.png" alt="" fill sizes="224px" className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-300 pt-14 pb-8 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-10">
          <div>
            <span className="w-8 h-8 rounded-lg iridescent inline-block mb-4" />
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Effortlessly turn your ideas into a fully functional,
              responsive, no-code SaaS website.
            </p>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto flex gap-5 mt-12 pt-6 border-t border-white/10 text-gray-500">
          <span className="text-xs">© {new Date().getFullYear()} Pathway. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}