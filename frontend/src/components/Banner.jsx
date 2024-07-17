import React from "react";
import banner from "/modified.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcome here to learn something
              <span className="text-pink-500"> new everyday!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Discover a wide range of books and explore new topics every day. 
              Whether you're looking for free books or exclusive paid content, 
              our store offers something for everyone. Create an account to 
              access premium books or dive into our collection of free books 
              without any registration.
            </p>
            
          </div>
          <a href="/contact"><button className="btn mt-6 btn-secondary">Get Started</button></a>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="Books"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
