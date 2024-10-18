import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel"; // React Carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "./Home.css"; // Import for any additional styles
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate() ;
  const [username, setUsername] = useState(""); // Hardcoded username
  const [selectedInterests] = useState([
    { name: "Political", imageUrl: "src/Images/politics1.jpg" },
    { name: "Cooking", imageUrl: "src/Images/cooking1.jpg" },
    { name: "Astrological", imageUrl: "src/Images/astrology.jpg" },
    { name: "Business", imageUrl: "src/Images/business.jpg" },
    { name: "Movies", imageUrl: "src/Images/movies.jpg" },
    { name: "Travelling", imageUrl: "src/Images/travel.jpg" },
  ]);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">Perspectify</a>
          {username && <a href="#profile" className="text-lg">Welcome, {username}</a>}
        </div>
      </nav>

      {/* Slideshow (Carousel) */}
      <div className="container mx-auto mt-6">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          interval={3000}
          showStatus={false}
          className="shadow-lg rounded-lg"
        >
          <div>
            <img src="src/Images/science.jpg" alt="Science" className="h-96 w-full object-cover" />
            <p className="legend">Science</p>
          </div>
          <div>
            <img src="src/Images/spiritual.jpg" alt="Spiritual" className="h-96 w-full object-cover" />
            <p className="legend">Spiritual</p>
          </div>
          <div>
            <img src="src/Images/stock.jpg" alt="Stock" className="h-96 w-full object-cover" />
            <p className="legend">Stock</p>
          </div>
          <div>
            <img src="src/Images/tech2.jpg" alt="Tech" className="h-96 w-full object-cover" />
            <p className="legend">Tech</p>
          </div>
          <div>
            <img src="src/Images/fitness1.jpg" alt="Fitness" className="h-96 w-full object-cover" />
            <p className="legend">Fitness</p>
          </div>
          <div onClick={() => {
            navigate('/political')
          }} >
            <img  src="src/Images/politics2.jpg" alt="Politics" className="h-96 w-full object-cover" />
            <p className="legend">Politics</p>
          </div>
        </Carousel>
      </div>

      {/* Main content showing selected interests */}
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-6">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
              <div onClick={() => {
                navigate('/political')
              }}  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="src/Images/politics1.jpg"  className="h-56 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Political</h3>
                  <button className="bg-purple-600 text-white px-4 py-2 mt-4 rounded hover:bg-purple-700 transition-colors">
                    Search Voices
                  </button>
                </div>
              </div>

              <div onClick={() => {
                navigate('/cooking')
              }}  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="src/Images/cooking1.jpg"  className="h-56 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Cooking</h3>
                  <button className="bg-purple-600 text-white px-4 py-2 mt-4 rounded hover:bg-purple-700 transition-colors">
                    Search Voices
                  </button>
                </div>
              </div>

              <div onClick={() => {
                navigate('/aestrological')
              }}  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="ssrc/Images/astrology.jpg" className="h-56 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Aestrological</h3>
                  <button className="bg-purple-600 text-white px-4 py-2 mt-4 rounded hover:bg-purple-700 transition-colors">
                    Search Voices
                  </button>
                </div>
              </div>

              <div onClick={() => {
                navigate('/business')
              }} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="src/Images/business.jpg" className="h-56 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Business</h3>
                  <button className="bg-purple-600 text-white px-4 py-2 mt-4 rounded hover:bg-purple-700 transition-colors">
                    Search Voices
                  </button>
                </div>
              </div>

              <div onClick={() => {
                navigate('/travelling')
              }}  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="src/Images/travel.jpg"  className="h-56 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Travelling</h3>
                  <button className="bg-purple-600 text-white px-4 py-2 mt-4 rounded hover:bg-purple-700 transition-colors">
                    Search Voices
                  </button>
                </div>
              </div>

              <div onClick={() => {
                navigate('/movies')
              }} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="src/Images/movies.jpg"  className="h-56 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Movies</h3>
                  <button className="bg-purple-600 text-white px-4 py-2 mt-4 rounded hover:bg-purple-700 transition-colors">
                    Search Voices
                  </button>
                </div>
              </div>


            
         
        </div>
      </div>
    </div>
  );
};

export default Home;