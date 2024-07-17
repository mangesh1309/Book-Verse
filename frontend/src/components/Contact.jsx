import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from './Navbar';
import toast from 'react-hot-toast';
import Footer from "./Footer";


const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (result.success) {
        toast.success('Email sent successfully!');
      } else {
        toast.error('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <>
    <Navbar />
    <div className="flex h-screen items-center justify-center bg-white-100">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-xl border-[3px] rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('name', { required: true })}
            />
            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('email', { required: true })}
            />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
              {...register('message', { required: true })}
            ></textarea>
            {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default Contact;
