INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, LANGUAGE, TITLE)
VALUES (1, 'BINARY_SYSTEM_INTRO', 'ENG', 'Binary System Introduction Quiz');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (1, 'What is the base of the binary numeral system? (Enter a number)', 'TEXT', 1);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (1, '2', 1, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (2, 'Which digits are used in the binary system?', 'SINGLE_CHOICE', 1);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (2, '0 and 1', 2, TRUE),
       (3, '1 and 2', 2, FALSE),
       (4, '0 through 9', 2, FALSE),
       (5, 'A and B', 2, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (3, 'What does a "1" represent in binary in terms of computer operations?', 'SINGLE_CHOICE', 1);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (6, 'Off state', 3, FALSE),
       (7, 'On state', 3, TRUE),
       (8, 'Neutral state', 3, FALSE),
       (9, 'Error state', 3, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (4, 'What is the term for a single digit in binary?', 'SINGLE_CHOICE', 1);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (10, 'Byte', 4, FALSE),
       (11, 'Nibble', 4, FALSE),
       (12, 'Bit', 4, TRUE),
       (13, 'Digit', 4, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (5, 'What decimal number does the binary number 1011 represent?', 'SINGLE_CHOICE', 1);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (14, '9', 5, FALSE),
       (15, '10', 5, FALSE),
       (16, '11', 5, TRUE),
       (17, '13', 5, FALSE);


INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (6, 'In a binary number, each digit represents an increasing power of which number?', 'SINGLE_CHOICE', 1);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (18, '10', 6, FALSE),
       (19, '2', 6, TRUE),
       (20, '8', 6, FALSE),
       (21, '16', 6, FALSE);




INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, LANGUAGE, TITLE)
VALUES (2, 'BINARY_SYSTEM_INTRO', 'GEO', 'ორობითი სისტემის შესავალი - ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (7, 'რა არის ორობითი რიცხვითი სისტემის ფუძე? (შეიყვანეთ რიცხვი)', 'TEXT', 2);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (22, '2', 7, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (8, 'რომელი ციფრები გამოიყენება ორობით სისტემაში?', 'SINGLE_CHOICE', 2);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (23, '0 და 1', 8, TRUE),
       (24, '1 და 2', 8, FALSE),
       (25, '0-დან 9-მდე', 8, FALSE),
       (26, 'A და B', 8, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (9, 'რას წარმოადგენს "1" ორობით სისტემაში კომპიუტერულ ოპერაციებში?', 'SINGLE_CHOICE', 2);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (27, 'გამორთულ მდგომარეობას', 9, FALSE),
       (28, 'ჩართულ მდგომარეობას', 9, TRUE),
       (29, 'ნეიტრალურ მდგომარეობას', 9, FALSE),
       (30, 'შეცდომის მდგომარეობას', 9, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (10, 'რა ეწოდება ორობითი სისტემის ერთ ციფრს?', 'SINGLE_CHOICE', 2);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (31, 'ბაიტი', 10, FALSE),
       (32, 'ნიბლი', 10, FALSE),
       (33, 'ბიტი', 10, TRUE),
       (34, 'ციფრი', 10, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (11, 'რომელ ათობით რიცხვს წარმოადგენს ორობითი რიცხვი 1011?', 'SINGLE_CHOICE', 2);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (35, '9', 11, FALSE),
       (36, '10', 11, FALSE),
       (37, '11', 11, TRUE),
       (38, '13', 11, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (12, 'ორობით რიცხვში, თითოეული ციფრი წარმოადგენს რომელი რიცხვის მზარდ ხარისხს?', 'SINGLE_CHOICE', 2);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (39, '10', 12, FALSE),
       (40, '2', 12, TRUE),
       (41, '8', 12, FALSE),
       (42, '16', 12, FALSE);
