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
import UserPage from "./components/user/UserPage";
import BinarySystemIntroduction from './components/binary-system/Introduction';
import Converting from "./components/binary-system/Converting";
import Arithmetic from "./components/binary-system/Arithmetic";
import GraphTheoryIntroduction from "./components/graph-theory/introduction/Introduction";
import DifferentGraphs from "./components/graph-theory/different-kind-of-graphs/DifferentGraphs";
import GraphTraversals from "./components/graph-theory/graph-traversals/GraphTraversals";
import GraphAlgorithms from "./components/graph-theory/graph-algorithms/GraphAlgorithms";
import GraphTheoryProblems from "./components/graph-theory/graph-problems/GraphTheoryProblems";
import LogicalOperatorsIntroduction from "./components/logical-operators/Introduction";
import BasicOperators from "./components/logical-operators/BasicOperators";
import AdvancedOperators from "./components/logical-operators/AdvancedOperators";
import TruthTables from "./components/logical-operators/TruthTables";
import NumberTheoryIntroduction from "./components/number-theory/Introduction";
import LCMandGCD from "./components/number-theory/LCMandGCD";
import RSAAlgorithm from "./components/number-theory/RSAAlgorithm";
import ModularArithmetic from "./components/number-theory/ModularArithmetic";

const router = createHashRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <></>,
        children: [
            {
                path: "user",
                element: <UserPage/>
            },
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
                        element: <BinarySystemContent/>,
                        children: [
                            {
                                path: "BINARY_SYSTEM_INTRO",
                                element: <BinarySystemIntroduction/>
                            },
                            {
                                path: "BINARY_SYSTEM_CONVERTING",
                                element: <Converting/>
                            },
                            {
                                path: "BINARY_SYSTEM_ARITHMETIC",
                                element: <Arithmetic/>
                            }
                        ]
                    },
                    {
                        path: "logic-operands",
                        element: <LogicalOperatorsContent/>,
                        children: [
                            {
                                path: "LOGICAL_OPERANDS_INTRO",
                                element: <LogicalOperatorsIntroduction/>
                            },
                            {
                                path: "LOGICAL_OPERANDS_BASIC_OPERATORS",
                                element: <BasicOperators/>
                            },
                            {
                                path: "LOGICAL_OPERANDS_ADVANCED_OPERATORS",
                                element: <AdvancedOperators/>
                            },
                            {
                                path: "LOGICAL_OPERANDS_TRUTH_TABLES",
                                element: <TruthTables/>
                            }
                        ]
                    },
                    {
                        path: "graphs",
                        element: <TheoryOfGraphsContent/>,
                        children: [
                            {
                                path: "GRAPH_THEORY_INTRO",
                                element: <GraphTheoryIntroduction/>
                            },
                            {
                                path: "GRAPH_THEORY_DIFFERENT_GRAPHS",
                                element: <DifferentGraphs/>
                            },
                            {
                                path: "GRAPH_THEORY_GRAPH_TRAVERSALS",
                                element: <GraphTraversals/>
                            },
                            {
                                path: "GRAPH_THEORY_ALGORITHMS",
                                element: <GraphAlgorithms/>
                            },
                            {
                                path: "GRAPH_THEORY_PROBLEMS",
                                element: <GraphTheoryProblems/>
                            }
                        ]
                    },
                    {
                        path: "numbers-theory",
                        element: <NumberTheoryContent/>,
                        children: [
                            {
                                path: "NUMBER_THEORY_INTRO",
                                element: <NumberTheoryIntroduction/>
                            },
                            {
                                path: "NUMBER_THEORY_LCM_GCD",
                                element: <LCMandGCD/>
                            },
                            {
                                path: "NUMBER_THEORY_RSA",
                                element: <RSAAlgorithm/>
                            },
                            {
                                path: "NUMBER_THEORY_MODULAR_ARITHMETIC",
                                element: <ModularArithmetic/>
                            }
                        ]
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
