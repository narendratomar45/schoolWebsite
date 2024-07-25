import React, { useEffect } from "react";
import CarouselComponent from "../Components/Carousel";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="bg-gray-100">
      <header className="bg-blue-700 p-4 text-white flex items-center justify-between shadow-md">
        <h1 className="text-xl font-bold">Springdale Public School</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <CarouselComponent />
        <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-800 mb-4"
            data-aos="fade-up"
          >
            Welcome to Springdale Public School
          </h1>
          <p
            className="text-xl md:text-2xl text-center text-gray-700"
            data-aos="flip-left"
          >
            "Welcome to Springdale Public School, where we nurture young minds
            for a brighter future."
          </p>
        </section>
        <section className="mt-5 bg-white p-6 rounded-lg shadow-lg">
          <p className="text-xl text-center text-gray-800" data-aos="flip-left">
            At Springdale Public School, we are dedicated to providing a
            nurturing and dynamic learning environment where students are
            encouraged to excel academically, socially, and personally. Located
            in the heart of Noida, our school is committed to fostering a
            holistic education that prepares students for future challenges and
            opportunities.
          </p>
        </section>
        <section className="mt-8 bg-blue-50 p-6 rounded-lg shadow-lg">
          <h1
            className="text-2xl font-extrabold text-center text-blue-700"
            data-aos="fade-up"
          >
            Our Mission:
          </h1>
          <p
            className="text-xl text-center text-gray-800"
            data-aos="flip-right"
          >
            To empower students to reach their full potential through a blend of
            innovative teaching practices, a supportive community, and a focus
            on both academic excellence and personal growth.
          </p>
        </section>
        <section className="mt-8 bg-green-50 p-6 rounded-lg shadow-lg">
          <h1
            className="text-2xl font-extrabold text-center text-green-700"
            data-aos="fade-up"
          >
            Our Vision:
          </h1>
          <p className="text-xl text-center text-gray-800" data-aos="flip-left">
            To be a leading institution that inspires a lifelong love of
            learning, promotes critical thinking, and cultivates leadership
            skills in our students.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
