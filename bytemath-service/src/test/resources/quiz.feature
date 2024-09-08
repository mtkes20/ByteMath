Feature: Quiz Creation

  Scenario: Successfully create a new quiz
    Given the quiz creation endpoint is "/api/v1/quiz"
    And I have the following quiz creation request:
      | titleEng                | titleGeo                             |
      | Math and Geography Quiz | მათემატიკისა და გეოგრაფიის ვიქტორინა |
    And I have the following questions in the quiz:
      | questionTextEng                | questionTextGeo                 | questionType  |
      | What is the capital of France? | რა არის საფრანგეთის დედაქალაქი? | SINGLE_CHOICE |
      | What is 7 x 8?                 | რა არის 7 x 8?                  | SINGLE_CHOICE |
    And the first question has the following answers:
      | answerTextEng | answerTextGeo | correct |
      | London        | ლონდონი       | false   |
      | Paris         | პარიზი        | true    |
      | Berlin        | ბერლინი       | false   |
      | Madrid        | მადრიდი       | false   |
    And the second question has the following answers:
      | answerTextEng | answerTextGeo | correct |
      | 54            | 54            | false   |
      | 56            | 56            | true    |
      | 58            | 58            | false   |
      | 62            | 62            | false   |
    When I send a POST request to the quiz creation endpoint with the quiz creation request
    Then the response status code should be 201
    And the response body should contain a quiz with the title "Math and Geography Quiz"
    And the response body should contain a quiz with 2 questions
    And the response body should contain a generated quiz id
