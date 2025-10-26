import React from "react";

const TestimonialCard = ({ name, role, review, rating = 5, image }) => {
  return (
    <div className="relative flex flex-col items-center">
   

      {/* Bubble box */}
      <div className="relative bg-white shadow-lg rounded-xl mt-[-2.5rem] p-6 w-80 text-center">
        {/* Rating Stars */}
        <div className="flex justify-center mb-3">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400 mx-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Review */}
        <p className="text-gray-600 italic mb-4">“{review}”</p>

        {/* Name & Role */}
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>

        {/* Speech bubble pointer */}
        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-white"></div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Mrs. Chitra",
      role: "CEO - JCI",
      review:
        "Exceptional service and outstanding support. The team is very professional and truly dedicated to customer satisfaction.",
      rating: 5,
      
    },
    {
      name: "Mr. Yoganathan",
      role: "Facility Manager, Our Lady of Health Hospital",
      review:
        "The service has been very reliable and efficient. We appreciate the consistency and timely response always provided.",
      rating: 5,
    },
    {
      name: "Mr. Venket",
      role: "Public Relations Officer, KG Multi Speciality Hospital & Research Centre",
      review:
        "Great experience overall! The service quality is excellent, and we highly recommend them for their dedication and professionalism.",
      rating: 5,
      
    },
  ];

  return (
<div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((r, i) => (
            <TestimonialCard key={i} {...r} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
