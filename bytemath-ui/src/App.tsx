import React, {useEffect} from 'react';
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
import {useTranslation} from "react-i18next";
import BinarySystemIntroduction from './components/binary-system/Introduction';
import BinaryConversion from "./components/binary-system/BinaryConversion";
import Arithmetic from "./components/binary-system/Arithmetic";
import GraphTheoryIntroduction from "./components/graph-theory/introduction/Introduction";
import DifferentGraphs from "./components/graph-theory/different-kind-of-graphs/DifferentGraphs";
import GraphTraversals from "./components/graph-theory/graph-traversals/GraphTraversals";
import GraphAlgorithms from "./components/graph-theory/graph-algorithms/GraphAlgorithms";
import GraphTheoryProblems from "./components/graph-theory/graph-problems/GraphTheoryProblems";
import LogicalOperatorsIntroduction from "./components/logical-operators/Introduction";
import BasicOperators from "./components/logical-operators/BasicOperators";
import AdvancedOperators from "./components/logical-operators/AdvancedOperators";
import NumberTheoryIntroduction from "./components/number-theory/Introduction";
import LCMandGCD from "./components/number-theory/LCMandGCD";
import RSAAlgorithm from "./components/number-theory/RSAAlgorithm";
import ModularArithmetic from "./components/number-theory/ModularArithmetic";
import BinaryRepresentation from "./components/binary-system/BinaryRepresentation";
import LogicalOperandsProblems from "./components/logical-operators/LogicalOperandsProblems";
import Dashboard from "./components/user/NewUserPage";
import BinarySystemProblems from "./components/binary-system/BinarySystemProblems";
import NumberTheoryProblems from "./components/number-theory/NumberTheoryProblems";

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
                                path: "BINARY_SYSTEM_REPRESENTATION",
                                element: <BinaryRepresentation/>
                            },
                            {
                                path: "BINARY_SYSTEM_CONVERTING",
                                element: <BinaryConversion/>
                            },
                            {
                                path: "BINARY_SYSTEM_ARITHMETIC",
                                element: <Arithmetic/>
                            },
                            {
                                path: "BINARY_SYSTEM_PROBLEMS",
                                element: <BinarySystemProblems/>
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
                                path: "LOGICAL_OPERANDS_PROBLEMS",
                                element: <LogicalOperandsProblems/>
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
                            },
                            {
                                path: "NUMBER_THEORY_PROBLEMS",
                                element: <NumberTheoryProblems/>
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
    const {i18n} = useTranslation()
    useEffect(() => {
        const language = localStorage.getItem("language")
        if (!!language) {
            i18n.changeLanguage(language)
        }
    }, [i18n]);

    return (
        <QueryClientProvider client={queryClient}>
            <KeycloakProvider>
                <RouterProvider router={router}/>
            </KeycloakProvider>
        </QueryClientProvider>
    );
};

export default App;
