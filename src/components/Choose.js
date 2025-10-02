import React from "react";
import {
  Shield,
  Clock,
  Users,
  CheckCircle,
  DollarSign,
  Headphones,
  Briefcase,
  Target,
} from "lucide-react";

const features = [
  {
    icon: <Target className="w-8 h-8 text-blue-500" />,
    title: "Expertise in NABH/NABL Frameworks",
    desc: "Deep knowledge and proven track record in healthcare accreditation standards.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-500" />,
    title: "Startup-Friendly Packages",
    desc: "Tailored solutions designed specifically for emerging healthcare organizations.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-500" />,
    title: "Affordable and Transparent",
    desc: "Competitive pricing with no hidden costs and transparent fee structure.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-blue-500" />,
    title: "Post-Accreditation Support",
    desc: "Ongoing assistance to maintain standards and prepare for renewals.",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    title: "Quality Assurance",
    desc: "Rigorous quality checks at every step to ensure compliance and excellence.",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: "24/7 Availability",
    desc: "Round-the-clock support for urgent consultations and emergency assistance.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Expert Team",
    desc: "Highly qualified professionals with extensive healthcare industry experience.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
    title: "Proven Results",
    desc: "100% success rate in helping clients achieve their accreditation goals.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-12">
          Why Choose <span className="text-sky-600">GWay Healthcare</span>
        </h1>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-xl shadow-md mb-4 
                bg-gradient-to-br from-blue-50 to-blue-100"
              >
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
