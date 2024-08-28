import QuizApi from "../../api/quiz-api";
import {useTranslation} from "react-i18next";
import {useKeycloak} from "../../context/KeycloakProvider";
import {useQuery} from "@tanstack/react-query";
import {QuizResponse} from "../../types/QuizType";
import QuizPrompt from "./QuizPrompt";
import QuizQuestions from "./QuizQuestions";


const Quiz = ({identifier}: { identifier: string }) => {
    const {i18n} = useTranslation()
    const {keycloak, isAuthenticated} = useKeycloak();

    const fetchQuiz = async (identifier: string) => {
        return await QuizApi.getQuiz(
            identifier,
            i18n.resolvedLanguage == 'en' ? "ENG" : "GEO",
            keycloak?.token
        )
    }

    const {
        data: quizData,
        error: quizError,
        isLoading: isQuizLoading,
    } = useQuery<QuizResponse | undefined>({
        queryKey: ["quiz", identifier, i18n.resolvedLanguage],
        queryFn: async () => await fetchQuiz(identifier)
    })

    return (
        <>
            {
                !isAuthenticated ? <QuizPrompt/> :
                    <>
                        {isQuizLoading && <div>Loading...</div>}
                        {!isQuizLoading && !quizData && !!quizError && <div>Error fetching quiz</div>}
                        {!!quizData && <QuizQuestions quizResponse={quizData}
                                                      identifier={identifier}/>

                        }
                    </>
            }
        </>
    )
}

export default Quiz;