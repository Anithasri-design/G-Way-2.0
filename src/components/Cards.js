import React from "react";
import {
  ClipboardCheck,
  Microscope,
  Hospital,
  GraduationCap,
  Building2,
} from "lucide-react";

const services = [
  {
    title: "Accreditation Services",
    desc: "Comprehensive NABH, NABL, and ISO certification support with end-to-end guidance.",
    points: [
      "NABH Pre-assessment",
      "NABL Implementation",
      "ISO Standards",
      "Documentation Support",
    ],
    icon: <ClipboardCheck className="w-6 h-6 text-pink-600" />,
    color: "bg-pink-100",
  },
  {
    title: "Biomedical Equipment Services",
    desc: "Complete lifecycle management of medical equipment from procurement to maintenance.",
    points: [
      "Equipment Validation",
      "Preventive Maintenance",
      "Calibration Services",
      "Compliance Audit",
    ],
    icon: <Microscope className="w-6 h-6 text-emerald-600" />,
    color: "bg-emerald-100",
  },
  {
    title: "Operational Quality Management",
    desc: "Streamline operations with quality management systems and process optimization.",
    points: [
      "Process Mapping",
      "Quality Policies",
      "SOP Development",
      "Performance Metrics",
    ],
    icon: <Hospital className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-100",
  },
  {
    title: "Competency & Capacity Building",
    desc: "Professional development programs to enhance healthcare team capabilities.",
    points: [
      "Staff Training",
      "Leadership Development",
      "Quality Education",
      "Certification Prep",
    ],
    icon: <GraduationCap className="w-6 h-6 text-orange-600" />,
    color: "bg-orange-100",
  },
  {
    title: "Facility Planning & Compliance",
    desc: "Expert guidance for healthcare facility design and regulatory compliance.",
    points: [
      "Facility Design",
      "Infrastructure Planning",
      "Regulatory Compliance",
      "Safety Protocols",
    ],
    icon: <Building2 className="w-6 h-6 text-teal-600" />,
    color: "bg-teal-100",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          <span className="bg-gradient-to-r from-sky-500 to-blue-600 text-transparent bg-clip-text">
            Our Core Services
          </span>
        </h2>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white w-72 h-72 shadow-md p-6 flex flex-col justify-between border border-gray-100 rounded-xl transition-all duration-300 hover:shadow-xl hover:border-sky-400"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full ${service.color}`}
              >
                {service.icon}
              </div>

              {/* Title + Desc */}
              <div className="text-left">
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{service.desc}</p>
                <ul className="mt-3 text-xs text-gray-500 space-y-1">
                  {service.points.map((point, i) => (
                    <li key={i}>✔ {point}</li>
                  ))}
                </ul>
              </div>

              {/* Arrow */}
              <div className="text-right text-sky-500 font-bold">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
