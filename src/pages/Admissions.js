import Aos from "aos";
import React, { useEffect } from "react";

const Admissions = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1
        className="text-2xl md:text-3xl font-bold mb-4 text-center"
        data-aos="fade-up"
      >
        Admissions
      </h1>
      <h2 className="text-xl md:text-2xl font-bold mt-4" data-aos="fade-up">
        Process
      </h2>
      <p className="mb-4" data-aos="flip-left">
        Admission forms are available for download. Submit the completed form
        along with required documents at the school office.
      </p>
      <h2 className="text-xl md:text-2xl font-bold mt-4" data-aos="fade-up">
        Criteria
      </h2>
      <p className="mb-4" data-aos="flip-left">
        Admission is based on merit and availability of seats. Entrance tests
        may be conducted for certain grades.
      </p>
      <h2 className="text-xl md:text-2xl font-bold mt-4" data-aos="fade-up">
        Important Dates
      </h2>
      <ul className="list-disc pl-5 mb-4" data-aos="flip-left">
        <li className="mb-2">Admission Form Availability: March 1st</li>
        <li className="mb-2">Last Date for Submission: March 31st</li>
        <li className="mb-2">Entrance Test: April 15th</li>
        <li className="mb-2">Announcement of Results: April 30th</li>
      </ul>
    </div>
  );
};

export default Admissions;
