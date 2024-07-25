import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Students = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <h1
        className="text-2xl md:text-3xl font-bold mb-6 text-center text-indigo-700"
        data-aos="fade-up"
      >
        Students
      </h1>

      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold text-blue-600" data-aos="fade-up">
          Student Life
        </h2>
        <p className="text-gray-800 mt-2" data-aos="flip-left">
          At Springdale Public School, student life is vibrant and dynamic,
          offering numerous opportunities for personal growth, learning, and
          development. Our school fosters a supportive and inclusive environment
          where students can explore their interests, develop new skills, and
          form lasting friendships.
        </p>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold text-green-600" data-aos="fade-up">
          Extracurricular
        </h2>
        <p className="text-gray-700 mt-2" data-aos="flip-left">
          We believe that education extends beyond the classroom. Our school
          offers a wide range of extracurricular activities to ensure that
          students can pursue their passions and interests. Some of the
          activities include:
        </p>
        <ul className="list-disc pl-5 mt-4 text-gray-800">
          <li data-aos="flip-left" className="mb-2">
            <strong className="text-red-600">Sports and Athletics:</strong> Our
            sports programs encourage physical fitness, teamwork, and
            sportsmanship. Students can participate in various sports such as
            soccer, basketball, cricket, track and field, and swimming.
          </li>
          <li data-aos="flip-left" className="mb-2">
            <strong className="text-yellow-600">
              Music and Performing Arts:
            </strong>{" "}
            We offer music lessons, choir, drama club, and dance classes,
            providing students with opportunities to showcase their talents and
            creativity.
          </li>
          <li data-aos="flip-left" className="mb-2">
            <strong className="text-purple-600">Art and Craft:</strong> Our art
            club encourages students to express themselves through various
            artistic mediums, including painting, sculpture, and digital art.
          </li>
          <li data-aos="flip-left" className="mb-2">
            <strong className="text-teal-600">STEM Clubs:</strong> We have
            dedicated clubs for science, technology, engineering, and
            mathematics, where students can engage in hands-on projects,
            experiments, and competitions.
          </li>
          <li data-aos="flip-left" className="mb-2">
            <strong className="text-pink-600">
              Debate and Public Speaking:
            </strong>{" "}
            Our debate club and public speaking programs help students develop
            their communication skills and confidence.
          </li>
        </ul>
      </section>

      <section className="bg-green-50 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold text-blue-700" data-aos="fade-up">
          Clubs and Societies
        </h2>
        <p className="text-gray-700 mt-2" data-aos="flip-left">
          Springdale Public School boasts a variety of clubs and societies
          catering to different interests and hobbies. These clubs provide
          students with a platform to collaborate, share ideas, and pursue their
          passions. Some of our clubs and societies include:
        </p>
        <ul className="list-disc pl-5 mt-4 text-gray-800">
          <li data-aos="flip-left" className="mb-2">
            <strong className="text-orange-600">Literature Club:</strong> For
            those who love reading, writing, and discussing literature.
          </li>
          <li data-aos="flip-left" className="mb-2">
            <strong className="text-red-600">Environment Club:</strong> Focused
            on promoting environmental awareness and sustainability initiatives.
          </li>
          <li data-aos="flip-left" className="mb-2">
            <strong className="text-yellow-600">Science Club:</strong> For
            students interested in scientific exploration and innovation.
          </li>
          <li data-aos="flip-left" className="mb-2">
            <strong className="text-purple-600">Cultural Club:</strong>{" "}
            Celebrating diversity and cultural heritage through various events
            and activities.
          </li>
          <li data-aos="flip-left" className="mb-2">
            <strong className="text-teal-600">Community Service Club:</strong>{" "}
            Encouraging students to give back to the community through volunteer
            work and social projects.
          </li>
        </ul>
      </section>

      <section className="bg-yellow-50 p-6 rounded-lg shadow-md mb-8">
        <h2
          className="text-xl md:text-2xl font-bold mb-4 text-red-600"
          data-aos="fade-up"
        >
          Achievements
        </h2>
        <ul className="list-disc pl-5 text-gray-800" data-aos="flip-left">
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>
            Tech Innovators Club - Winners of Inter-School Robotics Competition
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
        <h2
          className="text-xl md:text-2xl font-bold mb-4 text-blue-600"
          data-aos="fade-up"
        >
          Student Council
        </h2>
        <ul className="list-disc pl-5 text-gray-800">
          <li>President: Amy Parker, Grade 12</li>
          <li>Vice President: Rajiv Mehta, Grade 11</li>
          <li>Secretary: Lisa Wong, Grade 10</li>
        </ul>
      </section>
    </div>
  );
};

export default Students;
