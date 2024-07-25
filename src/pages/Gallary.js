import sportsDay from "../assets/images/sports_day.jpeg";
import scienceExhibition from "../assets/images/science_exhibhition.jpg";
import culturalFest from "../assets/images/culture_fest.jpg";
import classroom from "../assets/images/classroom.jpeg";
import library from "../assets/images/library.jpeg";
import schoolTour from "../assets/videos/schoolTour.mp4";
import annualFunction from "../assets/videos/annualFunction.mp4";

const Gallery = () => {
  const photos = [
    {
      src: sportsDay,
      alt: "Sports Day",
      description: "Students participating in various sports events.",
    },
    {
      src: scienceExhibition,
      alt: "Science Exhibition",
      description: "Students presenting their science projects.",
    },
    {
      src: culturalFest,
      alt: "Cultural Fest",
      description: "Students performing in the cultural fest.",
    },
    {
      src: classroom,
      alt: "Classroom",
      description: "A glimpse of our interactive classrooms.",
    },
    {
      src: library,
      alt: "Library",
      description: "Students reading and studying in the school library.",
    },
  ];

  return (
    <div className="container mx-auto py-8 bg-gray-100">
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-blue-800 text-center mb-4">
          Virtual tour of Springdale Public School
        </h2>
        <div className="w-full h-96 mb-8 bg-white p-4 rounded-lg shadow-md">
          <video
            controls
            autoPlay
            muted
            className="w-full h-full rounded-lg shadow-md"
          >
            <source src={schoolTour} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-green-800 text-center mb-4">
          Highlights from the Annual Function 2023
        </h2>
        <div className="w-full h-96 bg-white p-4 rounded-lg shadow-md">
          <video
            controls
            autoPlay
            muted
            className="w-full h-full rounded-lg shadow-md"
          >
            <source src={annualFunction} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden bg-white shadow-md"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-48 object-cover"
            />
            <p className="p-2 text-center text-gray-800 bg-gray-200">
              {photo.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
