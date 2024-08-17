import React from 'react';
import {createHashRouter, Outlet, RouterProvider} from 'react-router-dom';
import Root from "./Root";
import BinarySystemContent from "./components/binary-system/BinarySystemContent";
import LogicalOperatorsContent from "./components/logical-operators/LogicalOperatorsContent";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import TheoryOfGraphsContent from "./components/graph-theory/TheoryOfGraphsContent";
import NumberTheoryContent from "./components/number-theory/NumberTheoryContent";
import {KeycloakProvider} from "./context/KeycloakProvider";
import MainPage from "./components/main/MainPage";

const router = createHashRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <></>,
        children: [
            {
                path: "/",
                element: <MainPage/>
            },
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
                        element: <NumberTheoryContent/>
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
            <KeycloakProvider>
                <RouterProvider router={router}/>
            </KeycloakProvider>
        </QueryClientProvider>
    );
};

export default App;
