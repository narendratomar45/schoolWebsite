import Aos from "aos";
import React, { useEffect } from "react";

const Academics = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <header className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
        <h1
          className="text-2xl md:text-3xl font-bold mb-4 text-center"
          data-aos="fade-up"
        >
          Academics
        </h1>
      </header>

      <section
        className="bg-white p-6 mt-6 rounded-lg shadow-lg"
        aria-labelledby="curriculum-overview"
      >
        <h2
          id="curriculum-overview"
          className="text-xl md:text-2xl font-bold mt-4 text-blue-600"
          data-aos="fade-up"
        >
          Curriculum Overview
        </h2>
        <p data-aos="flip-left" className="text-gray-700">
          At Springdale Public School, we offer a comprehensive and balanced
          curriculum designed to cater to the diverse needs of students across
          different educational stages. Our curriculum is structured into three
          main levels: Primary, Secondary, and Senior Secondary.
        </p>
      </section>

      <section
        className="bg-gray-50 p-6 mt-6 rounded-lg shadow-lg"
        aria-labelledby="primary-curriculum"
      >
        <h3
          id="primary-curriculum"
          className="text-lg md:text-xl font-bold mt-4 text-green-600"
          data-aos="fade-up"
        >
          Primary (Grades 1-5)
        </h3>
        <p className="mb-4" data-aos="fade-up">
          <strong>Core Subjects:</strong>
        </p>
        <ul
          className="list-disc list-inside mb-4 text-gray-800"
          data-aos="flip-left"
        >
          <li>
            <strong>English Language Arts:</strong> Emphasis on reading,
            writing, speaking, and listening skills.
          </li>
          <li>
            <strong>Mathematics:</strong> Focus on fundamental arithmetic,
            geometry, and problem-solving.
          </li>
          <li>
            <strong>Science:</strong> Introduction to basic scientific concepts
            and principles.
          </li>
          <li>
            <strong>Social Studies:</strong> Exploration of communities,
            cultures, and historical events.
          </li>
          <li>
            <strong>Environmental Studies:</strong> Awareness of environmental
            issues and sustainability.
          </li>
          <li>
            <strong>Art and Craft:</strong> Development of creativity through
            various artistic mediums.
          </li>
          <li>
            <strong>Physical Education:</strong> Activities to promote physical
            fitness and coordination.
          </li>
        </ul>

        <div>
          <h4 className="font-bold text-blue-500" data-aos="fade-up">
            Teaching Methodologies:
          </h4>
          <ul
            className="list-disc list-inside mb-4 text-gray-800"
            data-aos="flip-left"
          >
            <li>
              <strong>Hands-On Learning:</strong> Interactive activities and
              experiments to reinforce concepts.
            </li>
            <li>
              <strong>Project-Based Learning:</strong> Encouraging exploration
              and creativity through projects.
            </li>
            <li>
              <strong>Group Work:</strong> Collaborative activities to develop
              teamwork and communication skills.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-blue-500" data-aos="fade-up">
            Educational Resources:
          </h4>
          <ul
            className="list-disc list-inside mb-4 text-gray-800"
            data-aos="flip-left"
          >
            <li>
              <strong>Textbooks and Workbooks:</strong> Age-appropriate
              materials for core subjects.
            </li>
            <li>
              <strong>Educational Games:</strong> Interactive games to make
              learning engaging.
            </li>
            <li>
              <strong>Charts and Models:</strong> Charts, models, and multimedia
              resources to support instruction.
            </li>
          </ul>
        </div>
      </section>

      <section
        className="bg-white p-6 mt-6 rounded-lg shadow-lg"
        aria-labelledby="secondary-curriculum"
      >
        <h3
          id="secondary-curriculum"
          className="text-lg md:text-xl font-bold mt-4 text-purple-600"
          data-aos="fade-up"
        >
          Secondary (Grades 6-10)
        </h3>
        <p className="mb-4" data-aos="fade-up">
          <strong>Core Subjects:</strong>
        </p>
        <ul
          className="list-disc list-inside mb-4 text-gray-800"
          data-aos="flip-left"
        >
          <li>
            <strong>English Language Arts:</strong> Advanced reading
            comprehension, writing techniques, and literary analysis.
          </li>
          <li>
            <strong>Mathematics:</strong> Algebra, geometry, trigonometry, and
            statistics.
          </li>
          <li>
            <strong>Science:</strong> In-depth study of Physics, Chemistry, and
            Biology.
          </li>
          <li>
            <strong>Social Studies:</strong> Comprehensive coverage of History,
            Geography, and Political Science.
          </li>
          <li>
            <strong>Technology:</strong> Introduction to computer science and
            digital literacy.
          </li>
          <li>
            <strong>Foreign Language:</strong> Options to learn additional
            languages such as Spanish, French, or Mandarin.
          </li>
        </ul>

        <div>
          <h4 className="font-bold text-purple-500" data-aos="fade-up">
            Elective Subjects:
          </h4>
          <ul
            className="list-disc list-inside mb-4 text-gray-800"
            data-aos="flip-left"
          >
            <li>
              <strong>Art and Design:</strong> Advanced exploration of visual
              arts and design principles.
            </li>
            <li>
              <strong>Music and Performing Arts:</strong> In-depth study of
              music, drama, and dance.
            </li>
            <li>
              <strong>Physical Education:</strong> Specialized programs in
              various sports and fitness activities.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-purple-500" data-aos="fade-up">
            Teaching Methodologies:
          </h4>
          <ul
            className="list-disc list-inside mb-4 text-gray-800"
            data-aos="flip-left"
          >
            <li>
              <strong>Inquiry-Based Learning:</strong> Interactive activities
              and experiments to reinforce concepts.
            </li>
            <li>
              <strong>Differentiated Instruction:</strong> Tailoring teaching
              strategies to meet individual learning needs.
            </li>
            <li>
              <strong>Technology Integration:</strong> Use of digital tools and
              resources to enhance learning.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-purple-500" data-aos="fade-up">
            Educational Resources:
          </h4>
          <ul
            className="list-disc list-inside mb-4 text-gray-800"
            data-aos="flip-left"
          >
            <li>
              <strong>Interactive Textbooks:</strong> Enhanced textbooks with
              multimedia and online resources.
            </li>
            <li>
              <strong>Laboratories:</strong> Well-equipped science and computer
              labs for practical learning.
            </li>
            <li>
              <strong>Library:</strong> Extensive collection of reference
              materials and fiction/non-fiction books.
            </li>
          </ul>
        </div>
      </section>

      <section
        className="bg-gray-50 p-6 mt-6 rounded-lg shadow-lg"
        aria-labelledby="senior-secondary-curriculum"
      >
        <h3
          id="senior-secondary-curriculum"
          className="text-lg md:text-xl font-bold mt-4 text-red-600"
          data-aos="fade-up"
        >
          Senior Secondary (Grades 11-12)
        </h3>
        <p className="mb-4" data-aos="fade-up">
          <strong>Core Subjects:</strong>
        </p>
        <ul
          className="list-disc list-inside mb-4 text-gray-800"
          data-aos="flip-left"
        >
          <li>
            <strong>English Language Arts:</strong> Advanced language skills and
            preparation for higher education.
          </li>
          <li>
            <strong>Mathematics:</strong> Advanced topics including Calculus and
            Statistics.
          </li>
          <li>
            <strong>Science:</strong> Specialization options in Physics,
            Chemistry, Biology, and Environmental Science.
          </li>
          <li>
            <strong>Social Studies:</strong> Advanced studies in Economics,
            Sociology, Psychology, and Political Science.
          </li>
        </ul>

        <div>
          <h4 className="font-bold text-red-500" data-aos="fade-up">
            Elective Subjects:
          </h4>
          <ul
            className="list-disc list-inside mb-4 text-gray-800"
            data-aos="flip-left"
          >
            <li>
              <strong>Business Studies:</strong> Introduction to Business
              Management, Accounting, and Economics.
            </li>
            <li>
              <strong>Engineering and Technology:</strong> Basics of
              Engineering, Robotics, and Technology applications.
            </li>
            <li>
              <strong>Humanities:</strong> Advanced courses in Literature,
              History, and Philosophy.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-red-500" data-aos="fade-up">
            Teaching Methodologies:
          </h4>
          <ul
            className="list-disc list-inside mb-4 text-gray-800"
            data-aos="flip-left"
          >
            <li>
              <strong> Research-Based Learning:</strong> Emphasis on independent
              research and critical analysis.
            </li>
            <li>
              <strong>Career-Oriented Training:</strong> Preparation for
              college, vocational training, and career exploration.
            </li>
            <li>
              <strong>Collaborative Projects:</strong> Group projects to foster
              teamwork and problem-solving skills.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-red-500" data-aos="fade-up">
            Educational Resources:
          </h4>
          <ul
            className="list-disc list-inside mb-4 text-gray-800"
            data-aos="flip-left"
          >
            <li>
              <strong>Advanced Textbooks:</strong> Comprehensive materials
              aligned with higher education standards.
            </li>
            <li>
              <strong>Research Databases:</strong> Access to academic journals,
              research papers, and online resources.
            </li>
            <li>
              <strong>Career Counseling:</strong> Guidance on college
              applications, career choices, and internships.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Academics;
