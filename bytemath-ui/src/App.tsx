import React from 'react';
import {createHashRouter, Outlet, RouterProvider} from 'react-router-dom';
import Root from "./Root";
import BinarySystemContent from "./components/binary-system/BinarySystemContent";
import LogicalOperatorsContent from "./components/logical-operators/LogicalOperatorsContent";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import TheoryOfGraphsContent from "./components/graph-theory/TheoryOfGraphsContent";

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
                        element: <LogicalOperatorsContent/>
                    },
                    {
                        path: "graphs",
                        element: <TheoryOfGraphsContent/>
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

const queryClient = new QueryClient({
    defaultOptions: {queries: {retry: 1}},
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    );
};

export default App;
