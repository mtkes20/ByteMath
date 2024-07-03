INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE)
VALUES (1, 'BINARY_ARITHMETICS_001', 'Binary Arithmetic Basics');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (1, 'What is the result of the binary addition 1011 + 1101?', 'MULTIPLE_CHOICE', 1),
       (2, 'What is the result of the binary subtraction 1100 - 1010?', 'MULTIPLE_CHOICE', 1),
       (3, 'Convert the binary number 10101 to decimal.', 'MULTIPLE_CHOICE', 1),
       (4, 'What is the binary equivalent of the decimal number 25?', 'MULTIPLE_CHOICE', 1);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (1, '11000', 1, true),
       (2, '10100', 1, false),
       (3, '11100', 1, false),
       (4, '10011', 1, false);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (5, '0010', 2, true),
       (6, '0101', 2, false),
       (7, '0110', 2, false),
       (8, '0001', 2, false);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (9, '21', 3, true),
       (10, '20', 3, false),
       (11, '22', 3, false),
       (12, '23', 3, false);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (13, '11001', 4, true),
       (14, '11010', 4, false),
       (15, '10011', 4, false),
       (16, '10100', 4, false);
