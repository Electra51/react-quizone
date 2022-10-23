import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEye } from '@fortawesome/free-solid-svg-icons'

const Questionfive = () => {
    
    const fifthtoast = () => {
        toast(`correct answer is ${quiz.questions[4].correctAnswer}`)
    }
    const loaderData= useLoaderData()
    const quiz = loaderData.data
    console.log(quiz.questions[1])
    function fourr(value) {
        
        
        if (value===quiz.questions[1].correctAnswer) {
            // console.log(value);
            toast("correct")
        }
        else {
            toast("not correct")
        }
      }

    const {total,name,} = quiz;
    return (
        <div>
           <div className='border-solid border-2 border-blue-600 rounded-md mx-10 my-5 pb-5 bg-blue-600'>
                <h1 className='pb-4 text-lg font-medium text-gray-900 dark:text-white pt-2'>Question {5}:{quiz.questions[1].question.slice(3,-4)}</h1>
                <button onClick={fifthtoast}>
                <FontAwesomeIcon icon={faEye} />
                </button>
            
            <div className='lg:flex justify-center gap-4 sm:flex flex-col '>
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input onClick={()=>{fourr()}} id="default-radio-1" type="radio" value="" name="fifth-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-black dark:text className-black">{quiz.questions[4].options[0]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input onClick={()=>{fourr()}} id="default-radio-2" type="radio" value="" name="fifth-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[4].options[1]} </label>
                </div>
                
                </div>
                
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input onClick={()=>{fourr()}} id="default-radio-1" type="radio" value="" name="fifth-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[4].options[2]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200">
    <input onClick={()=>{fourr()}} id="default-radio-2" type="radio" value="" name="fifth-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[4].options[3]} </label>
</div>
            </div>
            </div>

            </div>

            <ToastContainer></ToastContainer>
        </div>
        
    );
};

export default Questionfive;