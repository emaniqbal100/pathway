const testimonials = [
  { quote: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.", name: "Alex Rivera", handle: "@jamietechguru00" },
  { quote: "I was amazed at how quickly we were able to integrate this app into our workflow.", name: "Casey Jordan", handle: "@caseyj" },
  { quote: "Adopting this app for our team has streamlined our project management and improved communication across the board.", name: "Jordan Patels", handle: "@jpatelsdesign" },
  { quote: "Our team's productivity has skyrocketed since we started using this tool.", name: "Josh Smith", handle: "@jjsmith" },
  { quote: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.", name: "Taylor Kim", handle: "@taylorkimm" },
  { quote: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.", name: "Sam Dawson", handle: "@dawsontechtips" },
  { quote: "This app has completely transformed how I manage my projects and deadlines.", name: "Morgan Lee", handle: "@morganleewhiz" },
  { quote: "The customizability and integration capabilities of this app are top-notch.", name: "Riley Smith", handle: "@rileysmith1" },
  { quote: "Its user-friendly interface and robust features support our diverse needs.", name: "Casey Harper", handle: "@casey09" },
];

function buildRows(list: typeof testimonials) {
  const rows = [];
  for (let i = 0; i < list.length; i += 3) {
    rows.push(list.slice(i, i + 3));
  }
  return rows;
}

export default function Testimonials() {
  const tripleSet = [...testimonials, ...testimonials, ...testimonials];
  const rows = buildRows(tripleSet);

  return (
    <section className="relative w-full px-6 md:px-16 py-12 bg-white dark:bg-[#0B0B14] transition-colors">
      <div className="text-center mb-12 relative z-20">
        <span className="inline-block bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white text-xs font-medium px-3 py-1.5 rounded-full mb-5">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0e1030] dark:text-white">What our users say</h2>
      </div>

      <div
        className="overflow-hidden max-w-6xl mx-auto"
        style={{
          height: "560px",
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="animate-scroll-vertical">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-3 gap-4 mb-4">
              {row.map((t, i) => (
                <div key={`${rowIdx}-${i}-${t.handle}`} className="border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 rounded-xl p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full iridescent inline-block" />
                    <div>
                      <p className="text-sm font-semibold leading-none text-[#0e1030] dark:text-white">{t.name}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{t.handle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}