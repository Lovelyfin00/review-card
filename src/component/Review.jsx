import { useState } from "react"

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


import reviews from "./data"


const Review = () => {
    let [count, setCount] = useState(0);
    const [review, setReview] = useState(reviews[count]);

    const capitalizeWords = (str) => {
      return str.replace(/(^|\s)\S/g, function (match) {
        return match.toUpperCase();
      });
    }

    const nextReview = (nextOrPrev) => {

      if (nextOrPrev === "next") {
        count ++;
      } else {
        count --;
      }

      if (count > 3) {
        count =  0;
      } else if (count < 0) {
        count = 3;
      }

      setCount(count);
      setReview(reviews[count]);
    }

    const randomReview = () => {
      const randomNumber = Math.floor(Math.random() * reviews.length);

      setCount(randomNumber);
      setReview(reviews[randomNumber]);
    }
    
  return (
    <main className="flex justify-center items-center min-h-screen bg-grey-500">
        <Slider {...review} capitalizeWords={capitalizeWords} nextReview={nextReview} randomReview={randomReview} />
    </main>
  )
}

const Slider = (props) => {
  const {name, job, image, text, capitalizeWords, randomReview, nextReview} = props;
  
  return (
    <div className="review-card w-2/4 max-md:w-3/4 min-h-[28rem] bg-white text-center px-6">
      <div className="customer-img bg-primary-500 w-[150px] h-[150px] max-sm:w-[100px] max-sm:h-[100px] rounded-full m-auto mt-4 relative">
        <img src={image} alt={name} className="w-[150px] h-[150px] max-sm:w-[100px] max-sm:h-[100px] rounded-full absolute right-2.5 top-1.5" />
        <div className="h-11 w-11 max-sm:w-8 max-sm:h-8 max-sm:top-3 top-5 left-[-14px] bg-primary-500 rounded-full flex justify-center items-center absolute z-10 ">
          <FaQuoteRight className="text-white" />
        </div>
      </div>
      <h4 className="mt-6 text-2xl">{capitalizeWords(name)}</h4>
      <p className="text-sm text-primary-500 font-normal mb-3">{job.toUpperCase()}</p>
      <p className="text-grey-600">{text}</p>
      <div className="flex justify-center items-center mt-4">
        <button className="text-2xl text-primary-700" onClick={ () => nextReview("prev")}><FaChevronLeft /></button>
        <button className="text-2xl text-primary-700 ms-6" onClick={ () => nextReview("next")}><FaChevronRight /></button>
      </div>
      <button className="px-8 py-1 text-primary-500 bg-primary-200 my-4 rounded" onClick={randomReview}>Suprise Me</button>
    </div>
  )
}

export default Review