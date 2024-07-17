import React, { useEffect, useState } from 'react';
import Card from "./Card";
import axios from 'axios';

function Course() {
  // console.log(books);
  // const data = books.filter((item) => {
  //   return item.category!=="Free"
  // });

  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async() => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        console.log(res.data);
        const x = res.data.filter((item) => {
          return item.category!=="Free"
        });
      
        setBook(x);
      } catch (error) {
        console.log(error)
      }
    }

    getBook();
  }, 
[])

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
      <div className="mt-28 items-center justify-center text-center space-y-5 dark:bg-slate-900 dark:text-white">
        <h1 className="text-2xl  md:text-4xl">We are delighted to have you <span className="text-pink-500">here!</span></h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          assumenda? Repellendus, iste corrupti? Tempore laundantium
          Repellendus accusamus accusantium sed architecto odio, nisi expedita
          quas quidem nesciunt debitis dolore non aspernatur prasentium 
          assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
          amini eos aut. Nobis quisquam reiciendis sunt quis sed magnam
          consequatir!
        </p>
        <a href="/">
        <button className="bg-pink-500 px-4 py-2 mt-6 text-white rounded-md hover:bg-pink-700 duration-200">Back</button>

        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          book.map((item) => (
            <Card item={item} key={item.id} />
          )) 
        }
      </div>
    </div>
    </>
  )
}

export default Course