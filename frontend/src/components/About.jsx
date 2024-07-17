import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from './Navbar';
import Footer from "./Footer";

function AboutUs() {
  return (
    <>
      <Navbar />

    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="max-w-screen-2xl container mx-auto py-28 px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">About BookVerse</h1>
            <p className="text-lg text-gray-700">
              Welcome to BookVersee, your go-to place for discovering and exploring a wide range of books.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod auctor leo, vel pretium nunc vestibulum at.
                Sed a libero ut tellus mattis euismod. Nullam commodo accumsan dui, ac pretium nisi condimentum eget.
              </p>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">What We Offer</h2>
              <p className="text-gray-700 leading-relaxed">
                At BookVerse, we offer a diverse collection of both free and paid books. Users can freely browse and read
                our selection of free books. For premium content, users can create an account to access exclusive paid books.
                Whether you're a casual reader or a dedicated learner, there's something here for everyone.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact Us</h2>
            <p className="text-lg text-gray-700">
              Have questions, suggestions, or just want to say hello? Feel free to reach out to us using our contact form.
              We're here to assist you!x
            </p>
            <Link to="/contact" className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Contact Us
            </Link>
          </div>

        </div>
      </div>

      <Footer />
      
      
    </>
  );
}

export default AboutUs;
