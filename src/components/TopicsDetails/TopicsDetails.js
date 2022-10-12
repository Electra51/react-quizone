import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import Question from './Question';

const TopicsDetails = () => {
    const loaderData= useLoaderData()
    const quiz = loaderData.data
    console.log(quiz.questions
        );
    // const quiz = useLoaderData();
    // console.log(quiz);
    const {id,question,options,total,name,
            } = quiz;
   
    const num = `[]`;
    return (
        <div>
            <h3 className='p-5 my-8 font-sans text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none'>Quiz topics: {name} {total}</h3>
            
            

            <div className='border-solid border-2 border-blue-600 rounded-md mx-10 my-5 pb-5 bg-blue-600'>
            <h1 className='pb-4 text-lg font-medium text-gray-900 dark:text-white pt-2'>Question {total}:{quiz.questions[1].question}</h1>
            
            <div className='flex justify-center gap-4 '>
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-black dark:text className-black">{quiz.questions[0].options[0]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[0].options[1]} </label>
                </div>
                
                </div>
                
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[0].options[2]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[0].options[3]} </label>
</div>
            </div>
            </div>

            </div>
           {/* 2nd */}
            <div className='border-solid border-2 border-blue-600 rounded-md mx-10 my-5 pb-5 bg-blue-600'>
            <h1 className='pb-4 text-lg font-medium text-gray-900 dark:text-white pt-2'>Question {num}:{quiz.questions[1].question}</h1>
            
            <div className='flex justify-center gap-4 '>
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-black dark:text className-black">{quiz.questions[1].options[0]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[1].options[1]} </label>
                </div>
                
                </div>
                
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[1].options[2]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[1].options[3]} </label>
</div>
            </div>
            </div>

            </div>
     {/* 3rd */}
            <div className='border-solid border-2 border-blue-600 rounded-md mx-10 my-5 pb-5 bg-blue-600'>
            <h1 className='pb-4 text-lg font-medium text-gray-900 dark:text-white pt-2'>Question {1}:{quiz.questions[1].question}</h1>
            
            <div className='flex justify-center gap-4 '>
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-black dark:text className-black">{quiz.questions[2].options[0]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[2].options[1]} </label>
                </div>
                
                </div>
                
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[2].options[2]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[2].options[3]} </label>
</div>
            </div>
            </div>

            </div>
    {/* 4th */}
            <div className='border-solid border-2 border-blue-600 rounded-md mx-10 my-5 pb-5 bg-blue-600'>
            <h1 className='pb-4 text-lg font-medium text-gray-900 dark:text-white pt-2'>Question {1}:{quiz.questions[1].question}</h1>
            
            <div className='flex justify-center gap-4 '>
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-black dark:text className-black">{quiz.questions[3].options[0]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[3].options[1]} </label>
                </div>
                
                </div>
                
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[3].options[2]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[3].options[3]} </label>
</div>
            </div>
            </div>

            </div>
            {/* 5th */}

            <div className='border-solid border-2 border-blue-600 rounded-md mx-10 my-5 pb-5 bg-blue-600'>
            <h1 className='pb-4 text-lg font-medium text-gray-900 dark:text-white pt-2'>Question {1}:{quiz.questions[1].question}</h1>
            
            <div className='flex justify-center gap-4 '>
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-black dark:text className-black">{quiz.questions[4].options[0]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[4].options[1]} </label>
                </div>
                
                </div>
                
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[4].options[2]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[4].options[3]} </label>
</div>
            </div>
            </div>

            </div>
            {/* 6th */}
            <div className='border-solid border-2 border-blue-600 rounded-md mx-10 my-5 pb-5 bg-blue-600'>
            <h1 className='pb-4 text-lg font-medium text-gray-900 dark:text-white pt-2'>Question {1}:{quiz.questions[1].question}</h1>
            
            <div className='flex justify-center gap-4 '>
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-black dark:text className-black">{quiz.questions[5].options[0]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[5].options[1]} </label>
                </div>
                
                </div>
                
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[5].options[2]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[5].options[3]} </label>
</div>
            </div>
            </div>

            </div>
            {/* 7th */}
            
            <div className='border-solid border-2 border-blue-600 rounded-md mx-10 my-5 pb-5 bg-blue-600'>
            <h1 className='pb-4 text-lg font-medium text-gray-900 dark:text-white pt-2'>Question {1}:{quiz.questions[1].question}</h1>
            
            <div className='flex justify-center gap-4 '>
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-black dark:text className-black">{quiz.questions[6].options[0]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[6].options[1]} </label>
                </div>
                
                </div>
                
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[6].options[2]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[6].options[3]} </label>
</div>
            </div>
            </div>

            </div>
            {/* 8th */}
            <div className='border-solid border-2 border-blue-600 rounded-md mx-10 my-5 pb-5 bg-blue-600'>
            <h1 className='pb-4 text-lg font-medium text-gray-900 dark:text-white pt-2'>Question {1}:{quiz.questions[1].question}</h1>
            
            <div className='flex justify-center gap-4 '>
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-black dark:text className-black">{quiz.questions[7].options[0]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[7].options[1]} </label>
                </div>
                
                </div>
                
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[7].options[2]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[7].options[3]} </label>
</div>
            </div>
            </div>

            </div>
{/* 9th */}
            {/* <div className='border-solid border-2 border-blue-600 rounded-md mx-10 my-5 pb-5 bg-blue-600'>
            <h1 className='pb-4 text-lg font-medium text-gray-900 dark:text-white pt-2'>Question {1}:{quiz.questions[1].question}</h1>
            
            <div className='flex justify-center gap-4 '>
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-black dark:text className-black">{quiz.questions[8].options[0]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[8].options[1]} </label>
                </div>
                
                </div>
                
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[8].options[2]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[8].options[3]} </label>
</div>
            </div>
            </div>

            </div> */}
            {/* 10th */}

            {/* <div className='border-solid border-2 border-blue-600 rounded-md mx-10 my-5 pb-5 bg-blue-600'>
            <h1 className='pb-4 text-lg font-medium text-gray-900 dark:text-white pt-2'>Question {1}:{quiz.questions[1].question}</h1>
            
            <div className='flex justify-center gap-4 '>
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-black dark:text className-black">{quiz.questions[9].options[0]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[9].options[1]} </label>
                </div>
                
                </div>
                
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[9].options[2]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[9].options[3]} </label>
</div>
            </div>
            </div>

            </div> */}

            {/* <div className='border-solid border-2 border-blue-600 rounded-md mx-10 my-5 pb-5 bg-blue-600'>
            <h1 className='pb-4 text-lg font-medium text-gray-900 dark:text-white pt-2'>Question {1}:{quiz.questions[1].question}</h1>
            
            <div className='flex justify-center gap-4 '>
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-black dark:text className-black">{quiz.questions[10].options[0]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[10].options[1]} </label>
                </div>
                
                </div>
                
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[10].options[2]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[10].options[3]} </label>
</div>
            </div>
            </div>

            </div>
            <div className='border-solid border-2 border-blue-600 rounded-md mx-10 my-5 pb-5 bg-blue-600'>
            <h1 className='pb-4 text-lg font-medium text-gray-900 dark:text-white pt-2'>Question {1}:{quiz.questions[1].question}</h1>
            
            <div className='flex justify-center gap-4 '>
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-black dark:text className-black">{quiz.questions[11].options[0]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[11].options[1]} </label>
                </div>
                
                </div>
                
            <div>
            <div className="flex items-center mb-4 border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-black focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[11].options[2]}</label>
</div>
<div className="flex items-center border-solid border-2 border-blue-600 rounded-md mx-10 my-5 p-4 bg-sky-200">
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black">{quiz.questions[11].options[3]} </label>
</div>
            </div>
            </div>

            </div>
            */}
        

        </div>
    );
};

export default TopicsDetails;