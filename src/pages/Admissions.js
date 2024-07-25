import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Admissions = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <h1
        className="text-2xl md:text-3xl font-bold mb-4 text-center text-indigo-600"
        data-aos="fade-up"
      >
        Admissions
      </h1>
      <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2
          className="text-xl md:text-2xl font-bold mt-4 text-blue-500"
          data-aos="fade-up"
        >
          Process
        </h2>
        <p className="mb-4 text-gray-700" data-aos="flip-left">
          Admission forms are available for download. Submit the completed form
          along with required documents at the school office.
        </p>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2
          className="text-xl md:text-2xl font-bold mt-4 text-green-500"
          data-aos="fade-up"
        >
          Criteria
        </h2>
        <p className="mb-4 text-gray-700" data-aos="flip-left">
          Admission is based on merit and availability of seats. Entrance tests
          may be conducted for certain grades.
        </p>
      </section>
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2
          className="text-xl md:text-2xl font-bold mt-4 text-red-500"
          data-aos="fade-up"
        >
          Important Dates
        </h2>
        <ul className="list-disc pl-5 mb-4 text-gray-700" data-aos="flip-left">
          <li className="mb-2 text-yellow-500">
            Admission Form Availability: March 1st
          </li>
          <li className="mb-2 text-purple-500">
            Last Date for Submission: March 31st
          </li>
          <li className="mb-2 text-teal-500">Entrance Test: April 15th</li>
          <li className="mb-2 text-pink-500">
            Announcement of Results: April 30th
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Admissions;
