// import React  from 'react';
// import { useLoaderData } from 'react-router-dom';
// import Topic from './Topic';

// const Topics = () => {

//     const loaderData= useLoaderData()
//     const topicsdata = loaderData.data
//     // console.log(topicsdata);
//     return (
//         <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
//         <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>

//                 {
//                     topicsdata.map(topic => (
//                         <Topic
//                             key={topic.id} topic={topic}
//                         />
//                     ))}

//             </div>
//         </div>
//     );
// };

// export default Topics;

// Topics.jsx
import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "./Topic";
import { Sparkles, BookOpen } from "lucide-react";

const Topics = () => {
  const loaderData = useLoaderData();
  const topicsdata = loaderData.data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Header Section */}
      <div className="px-4 pt-20 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-indigo-900/30 rounded-full mb-6 shadow-sm">
            <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              EXPLORE TOPICS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Choose Your Challenge
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Select a topic and start testing your knowledge right away.
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {" "}
              {topicsdata.length} topics
            </span>{" "}
            available!
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 flex-wrap text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-700 dark:text-gray-300">
                Interactive Learning
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm">
              <span className="text-gray-700 dark:text-gray-300">
                ⚡ Instant Feedback
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm">
              <span className="text-gray-700 dark:text-gray-300">
                🏆 Track Progress
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="px-4 pb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-6 mb-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {topicsdata.map((topic, index) => (
            <Topic key={topic.id} topic={topic} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Can't decide? Start with the most popular topics! 🔥
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-sm font-semibold">
                React
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-semibold">
                JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Topics;
