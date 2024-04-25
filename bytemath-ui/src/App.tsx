import React from 'react';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import Root from "./Root";

const router = createHashRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <></>,
        children: [
            {
                path: "courses",
                element: <div>courses</div>,
            },
            {
                path: "quizzes",
                element: <div>quizzes</div>,
            },
            {
                path: "login",
                element: <div>login</div>,
            },
            {
                path: "signup",
                element: <div>signup</div>,
            }
        ]
    }]);

const App: React.FC = () => {
  return (
      <RouterProvider router={router}/>
  );
};

export default App;
