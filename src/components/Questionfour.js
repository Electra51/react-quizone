import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEye } from '@fortawesome/free-solid-svg-icons'

const Questionfour = () => {
    
    const fourthtoast = () => {
        toast(`correct answer is ${quiz.questions[3].correctAnswer}`)
    }
    
    // const fourr = () => {
    //     {value === correctAnswer ? toast("this is correct") : toast("not correct") }
    // }
    // const fourr = () => {
    //     if (fourr.value === correctAnswer) {
    //         toast("This is correct answer")
    //     }
       
        
    // }
    // const { value } = props;
    
    function fourr(value) {
        
        
        if (value===quiz.questions[1].correctAnswer) {
            // console.log(value);
            toast("correct")
        }
        else {
            toast("not correct")
        }
      }
   
    const loaderData= useLoaderData()
    const quiz = loaderData.data
    // console.log(quiz.questions[1].correctAnswer)

    const {total,name,correctAnswer,options} = quiz;
    return (
        <div>
             <div className='border-solid border-2 border-blue-600 rounded-md mx-10 my-5 pb-5 bg-blue-600'>
                <h1 className='pb-4 text-lg font-medium text-gray-900 dark:text-white pt-2'>Question {4}:{quiz.questions[1].question.slice(3,-4)}</h1>
                <button onClick={fourthtoast}>
                <FontAwesomeIcon icon={faEye} />
                </button>
            
            <div className='flex justify-center gap-4 sm:flex flex-col'>
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input onClick={()=>{fourr()}} id="default-radio-1" type="radio" value={quiz.questions[3].options[0]} name="four-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-black dark:text className-black">{quiz.questions[3].options[0]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input onClick={()=>{fourr()}} id="default-radio-2" type="radio" value={quiz.questions[3].options[1]} name="four-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[3].options[1]} </label>
                </div>
                
                </div>
                
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
<input onClick={() => { fourr() }} id="default-radio-1" type="radio" value={quiz.questions[3].options[2]}name="four-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[3].options[2]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200">
    <input onClick={()=>{fourr()}} id="default-radio-2" type="radio" value={quiz.questions[3].options[3]} name="four-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[3].options[3]} </label>
                            
</div>
            </div>
            </div>

            </div>
            <ToastContainer></ToastContainer>
     
        </div>
        
    );
};

export default Questionfour;