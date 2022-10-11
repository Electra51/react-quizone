import React from 'react';

const Blogs = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
          <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            Some questions about React-Router-Dom,Context API
            </h2>
           
          </div>
        </div>
        <div className='max-w-screen-xl sm:mx-auto'>
          <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
            <div className='space-y-8'>
              <div>
                <p className='mb-4 text-xl font-medium'>
                  What is the purpose of React-Router?
                </p>
                <p className='text-gray-700'>
                React Router is a JavaScript library used to handle client and server-side routing in React applications. It is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                 
                </p>
              </div>
              <div>
                <p className='mb-4 text-xl font-medium'>
                  How does Context API works?
                </p>
                <p className='text-gray-700'>
                The Context API can be used to share data with multiple components, without having to pass data through props manually.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                  
                </p>
              </div>
            
            </div>
            <div className='space-y-8'>
              <div>
                <p className='mb-4 text-xl font-medium'>
                  Write about React hook useref?
                </p>
                <p className='text-gray-700'>
                A hook is an opening statement (which is usually the first sentence) in an essay that attempts to grab the reader's attention so that they want to read on. It can be done by using a few different types of hooks, which are a question, quote, statistic, or anecdote.React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.
                  <br />
                  The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument.
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blogs;