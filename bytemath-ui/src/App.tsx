import React from 'react';
import {createHashRouter, Outlet, RouterProvider} from 'react-router-dom';
import Root from "./Root";
import BinarySystemContent from "./components/binary-system/BinarySystemContent";
import LogicalOperatorsContent from "./components/logical-operators/LogicalOperatorsContent";

const router = createHashRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <></>,
        children: [
            {
                path: "courses",
                element: <Outlet/>,
                children: [
                    {
                        path: "binary-system",
                        element: <BinarySystemContent/>
                    },
                    {
                        path: "logic-operands",
                        //TODO do something about language
                        element: <LogicalOperatorsContent language={"en"}/>
                    },
                    {
                        path: "graphs",
                        element: <div>graphs</div>
                    },
                    {
                        path: "numbers-theory",
                        element: <div>numbers theory</div>
                    }
                ]
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
