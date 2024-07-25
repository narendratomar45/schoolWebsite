import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Faculty = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const facultyList = [
    {
      name: "John Doe",
      position: "Principal",
      qualification: "M.Ed",
      experience: "20 years of experience in educational administration",
    },
    {
      name: "Jane Smith",
      position: "Vice Principal",
      qualification: "M.Sc. in Physics",
      experience: "15 years of teaching experience",
    },
    {
      name: "Emily Johnson",
      position: "English Teacher",
      qualification: "M.A. in English",
      experience: "10 years of teaching experience",
    },
    {
      name: "Michael Brown",
      position: "Mathematics Teacher",
      qualification: "M.Sc. in Mathematics",
      experience: "8 years of teaching experience",
    },
    {
      name: "Sophia Davis",
      position: "Science Teacher",
      qualification: "M.Sc. in Chemistry",
      experience: "12 years of teaching experience",
    },
    {
      name: "David Wilson",
      position: "Computer Science Teacher",
      qualification: "B.Tech in Computer Science",
      experience: "5 years of teaching experience",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1
        className="text-2xl md:text-3xl font-bold mb-6 text-center text-indigo-700"
        data-aos="fade-up"
      >
        Faculty
      </h1>
      <ul className="space-y-4">
        {facultyList.map((faculty, index) => (
          <li
            key={index}
            className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            data-aos="flip-left"
          >
            <h2 className="text-xl font-bold text-indigo-600">
              {faculty.name}
            </h2>
            <p className="text-sm md:text-base text-gray-800">
              {faculty.position}
            </p>
            <p className="text-sm md:text-base text-gray-600">
              {faculty.qualification}
            </p>
            <p className="text-sm md:text-base text-gray-500">
              {faculty.experience}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faculty;
