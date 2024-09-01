import {useEffect, useState} from 'react';
import {useKeycloak} from "../context/KeycloakProvider";
import ProblemApi from "../api/problem-api";
import {ProblemSummaryType, ProblemType} from "../types/ProblemType";

export const useProblems = (courseIdentifier: string, language: string) => {
    const {keycloak, isInitialized} = useKeycloak();
    const [problems, setProblems] = useState<ProblemSummaryType[]>([]);
    const [selectedProblem, setSelectedProblem] = useState<ProblemType | null>(null);
    const [loading, setLoading] = useState(true);

    const refetchSelectedProblem = async () => {
        if (selectedProblem) {
            const problem = await ProblemApi.getProblemById(Number(selectedProblem.id), keycloak?.token, language === 'en' ? "ENG" : "GEO");
            setSelectedProblem(problem);
        }
    }

    useEffect(() => {
        const fetchProblems = async () => {
            if (isInitialized && keycloak?.token) {
                try {
                    setLoading(true);
                    const fetchedProblems = await ProblemApi.getProblemsByCourse(courseIdentifier, language === 'en' ? "ENG" : "GEO", keycloak.token);
                    setProblems(fetchedProblems);
                    if (fetchedProblems.length > 0) {
                        const firstProblem = await ProblemApi.getProblemById(fetchedProblems[0].id, keycloak.token, language === 'en' ? "ENG" : "GEO");
                        setSelectedProblem(firstProblem);
                    }
                } catch (error) {
                    console.error("Error fetching problems:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchProblems();
    }, [isInitialized, keycloak?.token, courseIdentifier, language]);

    const selectProblem = async (problemId: number) => {
        if (keycloak?.token) {
            try {
                setLoading(true);
                const problem = await ProblemApi.getProblemById(problemId, keycloak.token, language === 'en' ? "ENG" : "GEO");
                setSelectedProblem(problem);
            } catch (error) {
                console.error("Error fetching problem details:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    return {problems, selectedProblem, loading, selectProblem, refetchSelectedProblem};
};
