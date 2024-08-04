-- English Quiz
INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, LANGUAGE, TITLE)
VALUES (3, 'LOGICAL_OPERANDS_INTRO', 'ENG', 'Logical Operators Introduction Quiz');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (13, 'What is the result of the logical AND operation between true and false?', 'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (43, 'true', 13, FALSE),
       (44, 'false', 13, TRUE),
       (45, 'true and false', 13, FALSE),
       (46, 'undefined', 13, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (14, 'Which operator is used to perform a logical OR operation?', 'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (47, '&&', 14, FALSE),
       (48, '||', 14, TRUE),
       (49, '!', 14, FALSE),
       (50, '^', 14, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (15, 'What is the result of the logical NOT operation on true?', 'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (51, 'true', 15, FALSE),
       (52, 'false', 15, TRUE),
       (53, 'undefined', 15, FALSE),
       (54, 'null', 15, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (16, 'What does the logical XOR operator do?', 'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (55, 'Returns true if both operands are true', 16, FALSE),
       (56, 'Returns false if both operands are false', 16, FALSE),
       (57, 'Returns true if only one operand is true', 16, TRUE),
       (58, 'Returns true if both operands are false', 16, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (17, 'In which scenarios would you use a logical operator in programming?', 'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (59, 'To control the flow of the program based on conditions', 17, TRUE),
       (60, 'To perform arithmetic calculations', 17, FALSE),
       (61, 'To manipulate strings and arrays', 17, FALSE),
       (62, 'To make decisions and execute specific code blocks', 17, FALSE);  -- Adjusted to single choice

-- Updated Georgian Quiz
INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, LANGUAGE, TITLE)
VALUES (4, 'LOGICAL_OPERANDS_INTRO', 'GEO', 'ლოგიკური ოპერატორების შესავალი - ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (18, 'რა არის ლოგიკური და ოპერაციის შედეგი true-სა და false-ს შორის?', 'SINGLE_CHOICE', 4);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (63, 'true', 18, FALSE),
       (64, 'false', 18, TRUE),
       (65, 'true და false', 18, FALSE),
       (66, 'განუსაზღვრელი', 18, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (19, 'რომელი ოპერატორი გამოიყენება ლოგიკური ან ოპერაციის შესასრულებლად?', 'SINGLE_CHOICE', 4);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (67, '&&', 19, FALSE),
       (68, '||', 19, TRUE),
       (69, '!', 19, FALSE),
       (70, '^', 19, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (20, 'რა არის ლოგიკური არა ოპერაციის შედეგი true-ზე?', 'SINGLE_CHOICE', 4);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (71, 'true', 20, FALSE),
       (72, 'false', 20, TRUE),
       (73, 'განუსაზღვრელი', 20, FALSE),
       (74, 'null', 20, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (21, 'რას აკეთებს ლოგიკური XOR ოპერატორი?', 'SINGLE_CHOICE', 4);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (75, 'აბრუნებს true-ს, თუ ორივე ოპერანდი true-ა', 21, FALSE),
       (76, 'აბრუნებს false-ს, თუ ორივე ოპერანდი false-ა', 21, FALSE),
       (77, 'აბრუნებს true-ს, თუ მხოლოდ ერთი ოპერანდია true', 21, TRUE),
       (78, 'აბრუნებს true-ს, თუ ორივე ოპერანდი false-ა', 21, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (22, 'რა შემთხვევებში გამოიყენებთ ლოგიკურ ოპერატორებს პროგრამირებაში?', 'SINGLE_CHOICE', 4);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (79, 'პროგრამის მიმდინარეობის სამართავად პირობების საფუძველზე', 22, TRUE),
       (80, 'არითმეტიკული გამოთვლების შესასრულებლად', 22, FALSE),
       (81, 'სტრიქონებისა და მასივების დასამუშავებლად', 22, FALSE),
       (82, 'გადაწყვეტილებების მისაღებად და კონკრეტული კოდის ბლოკების შესასრულებლად', 22, FALSE);
