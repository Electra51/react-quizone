
import { createBrowserRouter } from "react-router-dom";
import Blogs from "./components/Blogs";
import Books from "./components/Books";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Root from "./components/Root";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'home',
          element: <Home></Home>,
          
        },
        {
          path: 'books',
          element:<Books></Books>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>,
        },
        
        
      ]
    }
]);
  export default router