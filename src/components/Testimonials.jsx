import React, { useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      name: 'John Smith',
      title: 'CEO, Tech Startup',
      rating: 5,
      quote:
        "Outstanding work! Delivered the project on time and exceeded our expectations. Great communication throughout the process.",
    },
    {
      name: 'Sarah Johnson',
      title: 'Product Manager',
      rating: 5,
      quote:
        "Incredible attention to detail and technical expertise. Made our complex project seem effortless.",
    },
    {
      name: 'Michael Brown',
      title: 'Creative Director',
      rating: 5,
      quote:
        "A true professional who brings both technical skill and creative insight to every project. Highly recommended!",
    },
    {
        name: 'Emily Davis',
        title: 'Marketing Specialist',
        rating: 4,
        quote: "Great work! I was impressed with the quick turnaround and attention to detail. Would definitely work with again."
    },
    {
        name: 'David Wilson',
        title: 'Software Engineer',
        rating: 5,
        quote: "Excellent communication and technical skills. Delivered a high-quality product that met all our requirements."
    },
    {
        name: 'Jessica Rodriguez',
        title: 'Project Manager',
        rating: 4,
        quote: "Very professional and easy to work with. I appreciated the proactive communication and problem-solving skills."
    }
  ];

  const handlePrev = () => {
    setCurrentSlide(Math.max(currentSlide - 1, 0));
  };

  const handleNext = () => {
    setCurrentSlide(Math.min(currentSlide + 1, testimonials.length - 3));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>★</span>);
    }
    return stars;
  }

  return (
    <section id="testimonials" className="bg-neutral-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Client Testimonials
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </div>

        <div className="testimonial-slider relative">
          <div className="swiper-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(currentSlide, currentSlide + 3).map(
                (testimonial, index) => (
                  <Testimonial key={index} {...testimonial} renderStars={renderStars} />
                )
              )}
            </div>
          </div>
        </div>

        <div className="testimonial-navigation flex justify-center mt-8 gap-4">
          <button
            id="prev"
            className="bg-neutral-800 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePrev}
            disabled={currentSlide === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            id="next"
            className="bg-neutral-800 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleNext}
            disabled={currentSlide >= testimonials.length - 3}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({ name, title, rating, quote, renderStars }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
          <span className="text-xl">👤</span>
        </div>
        <div className="ml-4">
          <h4 className="font-bold text-neutral-800">{name}</h4>
          <p className="text-neutral-600">{title}</p>
        </div>
      </div>
      <div className="mb-4">
          {renderStars(rating)}
      </div>
      <p className="text-neutral-700 leading-relaxed">{quote}</p>
    </div>
  );
};

export default Testimonials;