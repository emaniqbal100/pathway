"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { Check } from "lucide-react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex-1 pt-[72px] min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-[#12122a] dark:to-[#0B0B14] transition-colors">
      <Navbar />

      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <Image src="/images/wheel.png" alt="" fill sizes="96px" className="object-contain drop-shadow-xl float-slow" />
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0e1030] dark:text-white mb-3">
          Get started for free
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          No credit card required. Set up your account in under a minute.
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#13131f] p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-4">
              <Check size={22} className="text-white" />
            </div>
            <h2 className="font-semibold text-lg text-[#0e1030] dark:text-white mb-2">You&apos;re on the list!</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We&apos;ve sent a confirmation to <span className="font-medium">{email}</span>. Check your inbox to finish setting up.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#13131f] p-8 shadow-sm text-left"
          >
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Work email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white px-4 py-3 text-sm mb-5 outline-none focus:border-indigo-400 dark:focus:border-indigo-500 transition-colors"
            />
            <button
              type="submit"
              className="w-full text-center text-sm font-medium py-3 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-md shadow-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
            >
              Create free account
            </button>

            <ul className="mt-6 space-y-2.5 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-indigo-500 shrink-0" /> Up to 5 project members
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-indigo-500 shrink-0" /> Unlimited tasks and projects
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-indigo-500 shrink-0" /> 2GB storage included
              </li>
            </ul>
          </form>
        )}

        <p className="text-xs text-gray-400 dark:text-gray-500 mt-8">
          By signing up, you agree to our Terms and Privacy Policy.
        </p>
      </section>
    </main>
  );
}
