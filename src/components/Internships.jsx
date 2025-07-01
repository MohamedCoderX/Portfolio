import React from "react";

const internships = [
  {
    title: "Software Developer Intern",
    company: "Zeazh",
    year: 2025,
  },
  {
    title: "React Developer Intern",
    company: "Nexitence Technology",
    year: 2025,
  },
];

const Internships = () => {
  return (
    <div className="bg-white p-6 md:p-12 rounded-xl shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4">Internships</h2>
      <div className="space-y-4">
        {internships.map((item, index) => (
          <div
            key={index}
            className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50 hover:bg-emerald-100 rounded"
          >
            <p className="text-md font-semibold text-gray-800">{item.title}</p>
            <p className="text-sm text-gray-600">
              {item.company} ({item.year})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;