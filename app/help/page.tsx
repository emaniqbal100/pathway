'use client';

import CtaFooter from "@/components/CtaFooter";
import Navbar from "@/components/Navbar"
import { Card } from "@/components/ui/card";
import { toggleFaq } from "@/lib/features/faqSlice";
import { useAppDispatch, useAppSelector } from "@/lib/lib";
import { ChevronDown } from "lucide-react";


const faqs =[
    { q: "How do I get started with Pathway?", a: "Sign up for a free account, create your first project, and start adding tasks. No credit card required." },
    { q: "Can I invite my team?", a: "Yes — the Free plan supports up to 5 members, and Pro/Business plans support more, with role-based permissions." },
    { q: "Is my data secure?", a: "All data is encrypted in transit and at rest with top-tier encryption standards." },
    { q: "Can I cancel anytime?", a: "Absolutely. There are no long-term contracts — cancel or downgrade your plan at any time." },
    { q: "Do you offer integrations?", a: "Yes, Pathway connects with over 20 popular tools including calendars, chat apps, and file storage." },

];

export default function HelpPage () {
    const openIndex = useAppSelector((state) =>state.faq.openIndex);
    const dispatch = useAppDispatch();
    
    return(
     <main className="flex-1 pt-[72px] bg-white dark:bg-[#0B0B14] transition-colors">
        <Navbar />

        <section className="max-w-3xl mx-auto px-6 md:px-10 py-16">
            <div className="text-center mb-14">
            <span className="inline-block bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white text-xs font-medium px-3 py-1.5 rounded-full mb-5">
                Help center
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0e1030] dark:text-white mb-6">
                Frequently asked
                <br />
                <span className="text-indigo-500 dark:text-indigo-400">questions</span>
            </h1>
            </div>

            <div className="space-y-3">
            {faqs.map((f, i) => (
                <Card key={f.q} className="p-0 overflow-hidden dark:bg-[#13131f] dark:border-white/10">
                <button
                    onClick={() => dispatch(toggleFaq(i))}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                    <span className="font-medium text-[#0e1030] dark:text-white">{f.q}</span>
                    <ChevronDown
                    size={18}
                    className={`text-gray-400 shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                    />
                </button>
                {openIndex === i && (
                    <div className="px-6 pb-5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {f.a}
                    </div>
                )}
                </Card>
            ))}
            </div>
        </section>

        <CtaFooter />
    </main>
)}
