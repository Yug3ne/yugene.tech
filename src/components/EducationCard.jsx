import React from "react";

const education = [
  {
    degree: "BSc (Hons) Software Engineering",
    institution: "African Leadership University",
    years: "2024 - 2028",
  },
  {
    degree: "Certificate in Software Engineering",
    institution: "Moringa School",
    years: "Dec 2023 - June 2024",
  },
];

const EducationCard = () => {
  return (
    <div className="flex flex-col bg-slate-400 rounded-xl">
      <div className="ml-3 mt-3 font-bold">Education and Certfications</div>
      {education.map((edu, index) => (
        <div key={index} className="flex flex-col gap-2 p-4 border-gray-200">
          <div>
            <h3 className="text-sm font-semibold flex items-center">
              {" "}
              <span className="text-2xl">&#8226; </span> {edu.degree}
            </h3>
            <p className="text-sm text-gray-600 pl-3">{edu.institution}</p>
          </div>
          <div className="text-sm text-gray-500 pl-3">{edu.years}</div>
        </div>
      ))}
    </div>
  );
};

export default EducationCard;
