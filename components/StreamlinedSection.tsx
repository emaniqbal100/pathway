import { Boxes, Target } from "lucide-react";
import { CrossShape, CubeShape } from "./Shapes";

const features = [
  {
    title: "Integration ecosystem",
    desc: "Enhance your productivity by connecting your favorite tools, keeping all your essentials in one place.",
    shape: CrossShape,
  },
  {
    title: "Goal setting and tracking",
    desc: "Define and track your goals, breaking them down into achievable milestones along the way.",
    shape: CubeShape,
  },
];

export default function StreamlinedSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-10 py-16 text-center bg-white dark:bg-[#0B0B14] transition-colors">
      <span className="inline-block bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white text-xs font-medium px-3 py-1.5 rounded-full mb-5">
        Everything you need
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-[#0e1030] dark:text-white">
        Streamlined for easy
        <br />
        management
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-16">
        Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and
        see your progress simply and quickly.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {features.map((feature, idx) => {
          const ShapeComponent = feature.shape;
          return (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative h-64 w-full flex items-center justify-center mb-8">
                <div className="absolute inset-0 bg-gradient-to-b from-[#6366f1]/10 dark:from-[#6366f1]/20 to-transparent rounded-2xl" />
                <ShapeComponent className="float-slow" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#0e1030] dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}