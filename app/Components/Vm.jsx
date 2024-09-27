import { Eye, Target, Diamond } from "lucide-react";

export default function Component() {
  const sections = [
    {
      title: "Vision",
      icon: Eye,
      color: "text-blue-600",
      borderColor: "border-blue-600",
      description:
        "We envision creating a Global Institute that will cater to every Indian's dream of stepping into Computer, Accounting, and Tally courses. We aim to be one of the best Tally Institutes in the next 5 years in India!",
    },
    {
      title: "Mission",
      icon: Target,
      color: "text-orange-500",
      borderColor: "border-orange-500",
      description:
        "We believe in Educating, Empowering and giving real-world Experience to anyone who walks through our doors. Be prepared for a life-changing experience!",
    },
    {
      title: "Values",
      icon: Diamond,
      color: "text-red-500",
      borderColor: "border-red-500",
      description:
        "Excellence, Integrity, Innovation, and Continuous Learning form the cornerstone of our approach to financial education and empowerment.",
    },
  ];

  return (
    <div className="lg:max-w-[1300px] mx-auto -my-10 py-32">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-16">
        Vision and Mission
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch space-y-8 md:space-y-0 md:space-x-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full md:w-1/3">
            <div
              className={`w-24 h-24 rounded-full ${section.borderColor} border-4 flex items-center justify-center mb-4`}>
              <section.icon className={`w-12 h-12 ${section.color}`} />
            </div>
            <div
              className={`w-48 h-24 border-t-4 ${section.borderColor} rounded-t-full`}></div>
            <h2
              className={`text-xl font-semibold mt-4 mb-2 ${section.color} text-center`}>
              {section.title}
            </h2>
            <p className="text-center text-gray-600 px-4">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
