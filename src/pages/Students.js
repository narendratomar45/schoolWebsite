import Aos from "aos";
import React, { useEffect } from "react";

const Students = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1
        className="text-2xl md:text-3xl font-bold mb-6 text-center"
        data-aos="fade-up"
      >
        Students
      </h1>

      <section>
        <h1 className="font-bold text-lg" data-aos="fade-up">
          Student Life
        </h1>
        <p data-aos="flip-left">
          At Springdale Public School, student life is vibrant and dynamic,
          offering numerous opportunities for personal growth, learning, and
          development. Our school fosters a supportive and inclusive environment
          where students can explore their interests, develop new skills, and
          form lasting friendships.
        </p>
        <br />
      </section>
      <section>
        <h1 className="font-bold text-lg" data-aos="fade-up">
          Extracurricular
        </h1>
        <p data-aos="flip-left">
          We believe that education extends beyond the classroom. Our school
          offers a wide range of extracurricular activities to ensure that
          students can pursue their passions and interests. Some of the
          activities include:
        </p>
        <br />
        <li data-aos="flip-left">
          <strong>Sports and Athletics: </strong>Our sports programs encourage
          physical fitness, teamwork, and sportsmanship. Students can
          participate in various sports such as soccer, basketball, cricket,
          track and field, and swimming.
        </li>
        <li data-aos="flip-left">
          <strong> Music and Performing Arts:</strong> We offer music lessons,
          choir, drama club, and dance classes, providing students with
          opportunities to showcase their talents and creativity.
        </li>
        <li data-aos="flip-left">
          <strong>Art and Craft:</strong> Our art club encourages students to
          express themselves through various artistic mediums, including
          painting, sculpture, and digital art.
        </li>
        <li data-aos="flip-left">
          <strong> STEM Clubs:</strong>We have dedicated clubs for science,
          technology, engineering, and mathematics, where students can engage in
          hands-on projects, experiments, and competitions.
        </li>
        <li data-aos="flip-left">
          <strong> Debate and Public Speaking:</strong> Our debate club and
          public speaking programs help students develop their communication
          skills and confidence.
        </li>{" "}
        <br />
      </section>
      <section>
        <h1 className="font-bold text-lg" data-aos="fade-up">
          Clubs and Societies{" "}
        </h1>
        <p data-aos="flip-left">
          Springdale Public School boasts a variety of clubs and societies
          catering to different interests and hobbies. These clubs provide
          students with a platform to collaborate, share ideas, and pursue their
          passions. Some of our clubs and societies include:
        </p>
        <li data-aos="flip-left">
          <strong>Literature Club:</strong> For those who love reading, writing,
          and discussing literature. Environment Club: Focused on promoting
          environmental awareness and sustainability initiatives.
        </li>
        <li data-aos="flip-left">
          <strong>Science Club:</strong>For students interested in scientific
          exploration and innovation.
        </li>
        <li data-aos="flip-left">
          <strong>Cultural Club:</strong> Celebrating diversity and cultural
          heritage through various events and activities.
        </li>
        <li data-aos="flip-left">
          <strong>Community Service Club:</strong> Encouraging students to give
          back to the community through volunteer work and social projects.
        </li>
        <br />
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4" data-aos="fade-up">
          Achievements
        </h2>
        <ul className="list-disc list-inside" data-aos="flip-left">
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>
            Tech Innovators Club - Winners of Inter-School Robotics Competition
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4" data-aos="fade-up">
          Student Council
        </h2>
        <ul className="list-disc list-inside">
          <li>President: Amy Parker, Grade 12</li>
          <li>Vice President: Rajiv Mehta, Grade 11</li>
          <li>Secretary: Lisa Wong, Grade 10</li>
        </ul>
      </section>
    </div>
  );
};

export default Students;
