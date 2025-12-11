// import React from 'react'
// import { Link} from 'react-router-dom'

// const Topic = ({ topic }) => {
//   const { id, name, logo, total } = topic
//   return (
//       <Link to={`../topic/${id}`} aria-label='View Item'>
//       <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
//         <img

//           src={logo}
//           alt=''
//         />
//         <div className="p-5">
//           <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</p>

//           <br />
//          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Total quiz: {total}</p>
//         <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Start Now
//             <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//         </button>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default Topic

// Topic.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Zap, Award } from "lucide-react";

const Topic = ({ topic, index }) => {
  const { id, name, logo, total } = topic;

  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500",
  ];

  const bgColors = [
    "bg-blue-50 dark:bg-blue-900/20",
    "bg-purple-50 dark:bg-purple-900/20",
    "bg-green-50 dark:bg-green-900/20",
    "bg-orange-50 dark:bg-orange-900/20",
    "bg-indigo-50 dark:bg-indigo-900/20",
    "bg-pink-50 dark:bg-pink-900/20",
  ];

  const gradient = gradients[index % gradients.length];
  const bgColor = bgColors[index % bgColors.length];

  return (
    <Link
      to={`../topic/${id}`}
      aria-label={`Start ${name} quiz`}
      className="block group"
      style={{
        animation: `slideUp 0.5s ease-out ${index * 0.1}s both`,
      }}>
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden h-full">
        {/* Hover Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-all duration-300`}></div>

        <div className="relative z-10">
          {/* Logo */}
          <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
            <div
              className={`w-20 h-20 mx-auto ${bgColor} rounded-xl flex items-center justify-center shadow-lg`}>
              <img src={logo} alt={name} className="w-12 h-12 object-contain" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 dark:group-hover:from-indigo-400 dark:group-hover:to-purple-400 transition-all">
              {name}
            </h3>
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-medium">Total quiz: {total}</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Quick & Fun</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-green-500" />
              <span>Track Progress</span>
            </div>
          </div>

          {/* Button */}
          <button
            className={`w-full py-3 bg-gradient-to-r ${gradient} text-white rounded-xl font-semibold shadow-md hover:shadow-lg transform group-hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2`}>
            Start Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Decorative corner */}
        <div
          className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${gradient} rounded-full blur-2xl opacity-20 group-hover:scale-150 transition-transform duration-500`}></div>
      </div>
    </Link>
  );
};

export default Topic;
