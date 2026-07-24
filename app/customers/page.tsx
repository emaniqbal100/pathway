import Navbar from "@/components/Navbar";
import CtaFooter from "@/components/CtaFooter";

const stories = [
  { name: "Alex Rivera", handle: "@jamietechguru00", quote: "Framer.com instantly grabbed my attention as a seasoned designer.", metric: "+40% output" },
  { name: "Casey Jordan", handle: "@caseyj", quote: "We integrated this app into our workflow in a single afternoon.", metric: "1 day setup" },
  { name: "Jordan Patels", handle: "@jpatelsdesign", quote: "Communication across our team improved almost overnight.", metric: "-30% meetings" },
  { name: "Josh Smith", handle: "@jjsmith", quote: "Our team's productivity has skyrocketed since we started.", metric: "+65% velocity" },
  { name: "Taylor Kim", handle: "@taylorkimm", quote: "Nothing slips through the cracks anymore.", metric: "0 missed tasks" },
  { name: "Sam Dawson", handle: "@dawsontechtips", quote: "We assign, track, and manage documents all in one place.", metric: "3-in-1 tool" },
];

export default function CustomersPage() {
  return (
    <main className="flex-1 pt-[72px] bg-white dark:bg-[#0B0B14] transition-colors">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 text-center">
        <span className="inline-block bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white text-xs font-medium px-3 py-1.5 rounded-full mb-5">
          Customer stories
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0e1030] dark:text-white mb-6">
          Loved by teams
          <br />
          <span className="text-indigo-500 dark:text-indigo-400">everywhere</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-16">
          Real results from real teams using Pathway every day.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {stories.map((s) => (
            <div
              key={s.handle}
              className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#13131f] p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white mb-4">
                {s.metric}
              </span>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-5">&ldquo;{s.quote}&rdquo;</p>
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full iridescent inline-block" />
                <div>
                  <p className="text-sm font-semibold text-[#0e1030] dark:text-white leading-none">{s.name}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{s.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
