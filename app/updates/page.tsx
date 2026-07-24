import Navbar from "@/components/Navbar";
import CtaFooter from "@/components/CtaFooter";

const updates = [
  { version: "v2.0", date: "June 2026", title: "Major redesign & dark mode", desc: "A complete visual overhaul, plus native dark mode support across the entire app." },
  { version: "v1.8", date: "April 2026", title: "Advanced analytics dashboard", desc: "New charts and insights to help you understand your progress at a glance." },
  { version: "v1.6", date: "February 2026", title: "Custom notifications", desc: "Fine-tune exactly which alerts you receive and when." },
  { version: "v1.4", date: "December 2025", title: "Integration ecosystem launch", desc: "Connect Pathway with over 20 of your favorite tools." },
  { version: "v1.2", date: "October 2025", title: "Team collaboration tools", desc: "Assign tasks, leave comments, and track progress together." },
];

export default function UpdatesPage() {
  return (
    <main className="flex-1 pt-[72px] bg-white dark:bg-[#0B0B14] transition-colors">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white text-xs font-medium px-3 py-1.5 rounded-full mb-5">
            Changelog
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0e1030] dark:text-white mb-6">
            What&apos;s new
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Every update, big or small — see how Pathway keeps getting better.
          </p>
        </div>

        <div className="space-y-8">
          {updates.map((u, i) => (
            <div key={u.version} className="relative pl-10">
              <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
              {i !== updates.length - 1 && (
                <span className="absolute left-[7px] top-5 bottom-[-2rem] w-px bg-gray-200 dark:bg-white/10" />
              )}
              <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#13131f] p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-300">
                    {u.version}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{u.date}</span>
                </div>
                <h3 className="font-semibold text-lg text-[#0e1030] dark:text-white mb-2">{u.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{u.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
