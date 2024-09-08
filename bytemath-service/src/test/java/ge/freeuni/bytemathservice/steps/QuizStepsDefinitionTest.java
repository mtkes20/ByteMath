package ge.freeuni.bytemathservice.steps;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import ge.freeuni.bytemathservice.SpringIntegrationTest;
import ge.freeuni.bytemathservice.domain.request.AnswerCreationRequest;
import ge.freeuni.bytemathservice.domain.request.QuestionCreationRequest;
import ge.freeuni.bytemathservice.domain.request.QuizCreationRequest;
import io.cucumber.java.DefaultDataTableCellTransformer;
import io.cucumber.java.DefaultDataTableEntryTransformer;
import io.cucumber.java.DefaultParameterTransformer;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.lang.reflect.Type;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class QuizStepsDefinitionTest extends SpringIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    private QuizCreationRequest quiz;
    private ResultActions resultActions;
    private String quizCreationEndpoint;

    @Autowired
    private ObjectMapper objectMapper;

    @DefaultParameterTransformer
    @DefaultDataTableEntryTransformer
    @DefaultDataTableCellTransformer
    public Object defaultTransformer(final Object fromValue, final Type toValueType) {
        final JavaType javaType = objectMapper.constructType(toValueType);
        return objectMapper.convertValue(fromValue, javaType);
    }

    @Given("the quiz creation endpoint is {string}")
    public void theQuizCreationEndpointIs(String url) {
        this.quizCreationEndpoint = url;
    }

    @And("I have the following quiz creation request:")
    public void iHaveTheFollowingQuizCreationRequest(QuizCreationRequest quiz) {
        this.quiz = quiz;
    }

    @And("I have the following questions in the quiz:")
    public void iHaveTheFollowingQuestionsInTheQuiz(List<QuestionCreationRequest> questions) {
        this.quiz.setQuestions(questions);
    }

    @And("the first question has the following answers:")
    public void theFirstQuestionHasTheFollowingAnswers(List<AnswerCreationRequest> answers) {
        this.quiz.getQuestions().get(0).setAnswers(answers);
    }

    @And("the second question has the following answers:")
    public void theSecondQuestionHasTheFollowingAnswers(List<AnswerCreationRequest> answers) {
        this.quiz.getQuestions().get(1).setAnswers(answers);
    }

    @When("I send a POST request to the quiz creation endpoint with the quiz creation request")
    public void sendPostRequest() throws Exception {
        resultActions = mockMvc.perform(post(quizCreationEndpoint)
                        .with(SecurityMockMvcRequestPostProcessors.jwt())
                        .content(new ObjectMapper().writeValueAsString(quiz))
                        .contentType(MediaType.APPLICATION_JSON))
                .andDo(print());
    }

    @Then("the response status code should be {int}")
    public void checkResponseStatus(int expectedStatusCode) throws Exception {
        resultActions.andExpect(status().is(expectedStatusCode));
    }

    @And("the response body should contain a quiz with the title {string}")
    public void checkQuizTitle(String expectedTitle) throws Exception {
        resultActions.andExpect(jsonPath("$.title").value(expectedTitle));
    }

    @And("the response body should contain a quiz with {int} questions")
    public void checkQuestionCount(int expectedCount) throws Exception {
        resultActions.andExpect(jsonPath("$.questions.length()").value(expectedCount));
    }

    @And("the response body should contain a generated quiz id")
    public void checkQuizId() throws Exception {
        resultActions.andExpect(jsonPath("$.id").isNumber());
    }
}
