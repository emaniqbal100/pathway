
export default function TrustedCompanies() {
  const companies = [
    { icon: "«", name: "Acme Corp" },
    { icon: "⚙", name: "Quantum" },
    { icon: "✕", name: "Echo Valley" },
    { icon: "✱", name: "Celestial" },
    { name: "PULSE" },
    { icon: "⬜", name: "Apex" },
  ];

  return (
    <section className="relative bg-white dark:bg-[#0B0B14] py-8 overflow-hidden transition-colors">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#0B0B14] via-white dark:via-[#0B0B14] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#0B0B14] via-white dark:via-[#0B0B14] to-transparent z-10" />

      <div className="flex animate-scroll">
        {[0, 1, 2].map((copyIdx) => (
          <div className="flex shrink-0 items-center" key={copyIdx} aria-hidden={copyIdx !== 0}>
            {companies.map((company, idx) => (
              <div
                key={`${copyIdx}-${idx}`}
                className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400 whitespace-nowrap px-8"
              >
                {company.icon && <span className="text-base">{company.icon}</span>}
                <span>{company.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}