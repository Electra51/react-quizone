
import { createBrowserRouter } from "react-router-dom";
import Blogs from "./components/Blogs";
import Topics from "./components/Topics";
import ErrorPage from "./components/ErrorPage";
import Root from "./components/Root";
import Statistics from "./components/Statistics";
import TopicsDetails from "./components/TopicsDetails/TopicsDetails";
import HomePage from "./components/HomePage";





const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>,
          
        },
        {
          path: 'home',
          element: <HomePage></HomePage>,
          
          
        },
        {
          path: 'topics',
          element:<Topics></Topics>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        },
        {
          path: 'topic/:id',
          element:<TopicsDetails></TopicsDetails>,
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        },
        {
          path: 'Statistics',
          element: <Statistics></Statistics>,
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>,
        },
        
        
      ]
  },

]);
  export default router