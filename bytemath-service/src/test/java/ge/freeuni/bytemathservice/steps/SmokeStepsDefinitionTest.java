package ge.freeuni.bytemathservice.steps;

import ge.freeuni.bytemathservice.SpringIntegrationTest;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class SmokeStepsDefinitionTest extends SpringIntegrationTest {

    @Given("application exists")
    public void applicationExists() {
        log.info("application exists");
    }

    @When("application is built")
    public void applicationIsBuilt() {
        log.info("application is built");
    }

    @Then("application runs")
    public void applicationRuns() {
        log.info("application runs");
    }

}
