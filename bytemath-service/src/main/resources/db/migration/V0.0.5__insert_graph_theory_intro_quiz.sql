INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, LANGUAGE, TITLE)
VALUES (6, 'GRAPH_THEORY_INTRO', 'ENG', 'Comprehensive Graph Concepts Quiz');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (26, 'What is a graph in mathematics?', 'SINGLE_CHOICE', 6);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (93, 'A collection of nodes and edges', 26, TRUE),
       (94, 'A collection of nodes only', 26, FALSE),
       (95, 'A collection of edges only', 26, FALSE),
       (96, 'A sequence of operations', 26, FALSE);


INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, LANGUAGE, TITLE)
VALUES (7, 'GRAPH_THEORY_INTRO', 'GEO', 'გრაფთა თეორიის შესავალი - ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (34, 'რა არის გრაფი მათემატიკაში?', 'SINGLE_CHOICE', 7);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (125, 'მხოლოდ წვეროების სიმრავლე', 34, FALSE),
       (126, 'წვეროებისა და წიბოების სიმრავლე', 34, TRUE),
       (127, 'მხოლოდ წიბოების სიმრავლე', 34, FALSE),
       (128, 'ოპერაციების თანმიმდევრობა', 34, FALSE);
