import Aos from "aos";
import React, { useEffect } from "react";

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
    <div className="container mx-auto px-4 py-8">
      <h1
        className="text-2xl md:text-3xl font-bold mb-4 text-center"
        data-aos="fade-up"
      >
        Faculty
      </h1>
      <ul className="space-y-4" data-aos="flip-left">
        {facultyList.map((faculty, index) => (
          <li key={index} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold">{faculty.name}</h2>
            <p className="text-sm md:text-base">{faculty.position}</p>
            <p className="text-sm md:text-base">{faculty.qualification}</p>
            <p className="text-sm md:text-base">{faculty.experience}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faculty;
