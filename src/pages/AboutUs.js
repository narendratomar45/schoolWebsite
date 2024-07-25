import Aos from "aos";
import React, { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1
        className="text-3xl md:text-3xl font-bold mb-4 text-center"
        data-aos="fade-up"
      >
        About Us
      </h1>
      <h1
        className="text-2xl md:text-3xl font-bold mb-4 mt-5 text-center"
        ata-aos="fade-up"
      >
        Welcome to SpringDale Public School
      </h1>
      <section>
        <h1 className="font-extrabold text-lg " data-aos="fade-up">
          Our History
        </h1>
        <p className=" text-lg" data-aos="flip-left">
          Springdale Public School was established in 1995 with a vision to
          create a dynamic and progressive educational environment in Noida.
          Over the years, we have grown from a small institution into a leading
          educational establishment, known for our commitment to excellence and
          holistic development. Our journey has been marked by numerous
          achievements, both academic and extracurricular, reflecting our
          dedication to nurturing well-rounded individuals.
        </p>
        <br />
      </section>
      <section>
        <h1 className="font-extrabold text-lg" data-aos="fade-up">
          Our Vision
        </h1>
        <p className=" text-lg" data-aos="flip-left">
          At Springdale Public School, our vision is to foster an environment
          where every student is inspired to achieve their highest potential. We
          aim to be a beacon of educational excellence, promoting a culture of
          innovation, critical thinking, and creativity. Our goal is to prepare
          students to thrive in a rapidly changing world by equipping them with
          the skills and knowledge necessary for success in their future
          endeavors.
        </p>
        <br />
      </section>
      <section>
        <h1 className="font-extrabold text-lg" data-aos="fade-up">
          Our Mission
        </h1>
        <p className=" text-lg" data-aos="flip-left">
          Our mission is to provide a supportive and enriching educational
          experience that empowers students to excel academically, socially, and
          emotionally. We are committed to:
        </p>
        <li className=" text-lg" data-aos="flip-left">
          Delivering a well-rounded curriculum that emphasizes both academic
          rigor and personal growth.
        </li>
        <li className=" text-lg" data-aos="flip-left">
          Encouraging students to develop a lifelong passion for learning.
        </li>
        <li className=" text-lg" data-aos="flip-left">
          Fostering a safe and inclusive environment that celebrates diversity
          and promotes mutual respect.
        </li>
        <li className=" text-lg" data-aos="flip-left">
          Partnering with parents and the community to enhance the overall
          learning experience.
        </li>{" "}
        <br />
      </section>
      <section>
        <h1 className="font-extrabold text-lg" data-aos="fade-up">
          Our values
        </h1>
        <ol>
          <li className=" text-lg" data-aos="flip-left">
            <strong>1. Excellence:</strong> We strive for the highest standards
            in all aspects of education and personal development.
          </li>
          <li className=" text-lg" data-aos="flip-left">
            <strong>2. Integrity:</strong> We uphold honesty, transparency, and
            ethical behavior in all our interactions.
          </li>
          <li className=" text-lg" data-aos="flip-left">
            <strong>3. Respect: </strong>We value each individual’s uniqueness
            and promote an environment of mutual respect and understanding.
          </li>
          <li className=" text-lg" data-aos="flip-left">
            <strong>4. Innovation:</strong> We embrace new ideas and approaches
            to continually improve our educational practices.
          </li>
          <li className=" text-lg" data-aos="flip-left">
            <strong>5. Community:</strong> We believe in the power of
            collaboration and the importance of working together to achieve
            common goals.
          </li>
        </ol>
        <br />
      </section>
      <section>
        <h1 className="font-extrabold text-lg" data-aos="fade-up">
          Message from The Principal
        </h1>
        <strong>Dear Students, Parents, and Staff,</strong>
        <p className=" text-lg" data-aos="flip-left">
          Welcome to Springdale Public School! It is an honor and a privilege to
          be part of such a vibrant and committed community. Our school is
          dedicated to providing an exceptional educational experience that
          prepares our students for the future with confidence and competence.
          <br />
          As we continue to grow and evolve, our focus remains on creating an
          environment where each student can thrive and reach their full
          potential. Our dedicated faculty, state-of-the-art facilities, and
          comprehensive programs are all designed to support and inspire our
          students.
          <br />
          We believe that education is a collaborative journey, and we are
          committed to working closely with parents and the community to ensure
          the success and well-being of our students. Together, we will continue
          to build on our tradition of excellence and make a positive impact on
          the lives of our students.
          <br />
          Thank you for being a part of our Springdale family.
          <br />
          Warm regards, <br />
          SpringDale
          <br />
          Principal
        </p>
      </section>
      <section>
        <h1 className="font-extrabold text-lg" data-aos="fade-up">
          Infrastructure and Facilities
        </h1>
        <p className=" text-lg" data-aos="flip-left">
          At Springdale Public School, we take pride in our modern and
          well-equipped facilities that provide a conducive environment for
          learning and personal development:
        </p>
        <li className=" text-lg" data-aos="flip-left">
          <strong> Classrooms:</strong> Spacious and well-ventilated classrooms
          with the latest teaching aids and technologies.
        </li>
        <li className=" text-lg" data-aos="flip-left">
          <strong>Science Laboratories:</strong> Cutting-edge labs for Physics,
          Chemistry, and Biology, designed to facilitate hands-on learning and
          experimentation.
        </li>
        <li className=" text-lg" data-aos="flip-left">
          <strong>Sports Facilities:</strong> A comprehensive library with a
          vast collection of books, periodicals, and digital resources to
          support research and reading.
        </li>
        <li className=" text-lg" data-aos="flip-left">
          <strong>Sports Facilities:</strong> A range of sports facilities
          including a multi-purpose playground, tennis courts, and an indoor
          gymnasium to promote physical fitness.
        </li>
        <li className=" text-lg" data-aos="flip-left">
          <strong>Arts and Music Rooms:</strong> Dedicated spaces for visual
          arts, music, and drama, allowing students to explore and develop their
          creative talents.
        </li>
        <li className=" text-lg" data-aos="flip-left">
          <strong>Computer Labs:</strong> Equipped with modern computers and
          software to support technology education and digital literacy.
        </li>
        <li className=" text-lg" data-aos="flip-left">
          <strong> Cafeteria:</strong> A hygienic and well-maintained cafeteria
          offering a variety of nutritious and delicious meals.
        </li>
        <li className=" text-lg" data-aos="flip-left">
          <strong>Health and Wellness Center:</strong> A dedicated area for
          student health and wellness, including medical facilities and
          counseling services.
        </li>
        <br />
        <p className=" text-lg" data-aos="flip-left">
          We invite you to explore and experience all that Springdale Public
          School has to offer. Our commitment to excellence and holistic
          development ensures that every student has the opportunity to succeed
          and thrive.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
