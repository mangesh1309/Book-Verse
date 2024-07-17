import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';

function Freebook() {
    // const freebooks = books.filter((book) => {
    //     return book.category === "Free";
    // });

    const [book, setBook] = useState([]);
    useEffect(() => {
      const getBook = async() => {
        try {
          const res = await axios.get("http://localhost:3000/book");
          const x = res.data.filter((item) => {
            return item.category==="Free"
          });
          console.log(x);
          setBook(x);
        } catch (error) {
          console.log(error)
        }
      }
  
      getBook();
    }, 
  [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
            <h1 className="font-semibold text-xl pt-12 pb-2">Free Offered Courses</h1>
            <p className="text-sm md:text-xl">
          Explore our selection of free books that cover a wide range of topics and genres. 
          Whether you're into fiction, non-fiction, self-help, or educational content, 
          our free offerings provide a wealth of knowledge and entertainment at no cost. 
          Start reading today and expand your horizons with Book Store's free collection!
        </p>
        </div>

    <div>
    <Slider {...settings}>
            {book.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook