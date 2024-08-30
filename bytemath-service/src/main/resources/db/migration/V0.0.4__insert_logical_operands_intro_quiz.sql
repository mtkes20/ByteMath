-- English Quiz
INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, LANGUAGE, TITLE)
VALUES (3, 'LOGICAL_OPERANDS_INTRO', 'ENG', 'Logical Operators Introduction Quiz');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (13, 'Which of the following best describes the importance of logical operators in programming?',
        'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (43, 'They are used only for arithmetic calculations', 13, FALSE),
       (44, 'They are essential for defining conditions and controlling program flow', 13, TRUE),
       (45, 'They are used exclusively in database management', 13, FALSE),
       (46, 'They have no practical applications in computer science', 13, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (14, 'In the light switch example, what does the AND operator represent?', 'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (47, 'The light is on when at least one switch is on', 14, FALSE),
       (48, 'The light is on only when both switches are on', 14, TRUE),
       (49, 'The light is always off regardless of the switches', 14, FALSE),
       (50, 'The light alternates between on and off states', 14, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (15, 'Which of the following is NOT mentioned as a topic explored in this course?', 'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (51, 'Basic logical operators', 15, FALSE),
       (52, 'Advanced logical operators', 15, FALSE),
       (53, 'Truth tables', 15, FALSE),
       (54, 'Boolean algebra', 15, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (16, 'How are logical operators used in artificial intelligence systems?', 'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (55, 'They are not used in AI systems', 16, FALSE),
       (56, 'They are used only for data storage', 16, FALSE),
       (57, 'They play a significant role in decision-making algorithms', 16, TRUE),
       (58, 'They are used exclusively for image processing', 16, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (17, 'In the light switch example, what does the OR operator represent?', 'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (59, 'The light is on if at least one of the switches is on', 17, TRUE),
       (60, 'The light is on only when both switches are off', 17, FALSE),
       (61, 'The light is always on regardless of the switches', 17, FALSE),
       (62, 'The light is on when exactly one switch is on', 17, FALSE);

-- Georgian Quiz
-- Georgian Quiz
INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, LANGUAGE, TITLE)
VALUES (4, 'LOGICAL_OPERANDS_INTRO', 'GEO', 'ლოგიკური ოპერატორების შესავალი - ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (18, 'რომელი აღწერს საუკეთესოდ ლოგიკური ოპერატორების მნიშვნელობას პროგრამირებაში?', 'SINGLE_CHOICE', 4);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (63, 'ისინი გამოიყენება მხოლოდ არითმეტიკული გამოთვლებისთვის', 18, FALSE),
       (64, 'ისინი აუცილებელია პირობების განსაზღვრისა და პროგრამის მიმდინარეობის კონტროლისათვის', 18, TRUE),
       (65, 'ისინი გამოიყენება მხოლოდ მონაცემთა ბაზების მართვაში', 18, FALSE),
       (66, 'მათ არ აქვთ პრაქტიკული გამოყენება კომპიუტერულ მეცნიერებაში', 18, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (19, 'ნათურის ჩამრთველების მაგალითში რას წარმოადგენს "და" ოპერატორი?', 'SINGLE_CHOICE', 4);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (67, 'ნათურა ინთება, როცა ერთი ჩამრთველი მაინც ჩართულია', 19, FALSE),
       (68, 'ნათურა ინთება მხოლოდ მაშინ, როცა ორივე ჩამრთველი ჩართულია', 19, TRUE),
       (69, 'ნათურა ყოველთვის გამორთულია, მიუხედავად ჩამრთველების მდგომარეობისა', 19, FALSE),
       (70, 'ნათურა მონაცვლეობს ჩართულ და გამორთულ მდგომარეობებს შორის', 19, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (20, 'რომელი არ არის ნახსენები, როგორც ამ კურსში შესასწავლი თემა?', 'SINGLE_CHOICE', 4);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (71, 'მარტივი ლოგიკური ოპერატორები', 20, FALSE),
       (72, 'რთული ლოგიკური ოპერატორები', 20, FALSE),
       (73, 'ჭეშმარიტების ცხრილები', 20, FALSE),
       (74, 'ბულის ალგებრა', 20, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (21, 'როგორ გამოიყენება ლოგიკური ოპერატორები ხელოვნური ინტელექტში?', 'SINGLE_CHOICE', 4);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (75, 'ისინი არ გამოიყენება ხელოვნური ინტელექტში', 21, FALSE),
       (76, 'ისინი გამოიყენება მხოლოდ მონაცემთა შენახვისთვის', 21, FALSE),
       (77, 'ისინი მნიშვნელოვან როლს ასრულებენ გადაწყვეტილების მიღების ალგორითმებში', 21, TRUE),
       (78, 'ისინი გამოიყენება მხოლოდ გამოსახულებების დამუშავებისთვის', 21, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (22, 'ნათურის ჩამრთველების მაგალითში რას წარმოადგენს "ან" ოპერატორი?', 'SINGLE_CHOICE', 4);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (79, 'ნათურა ინთება, თუ ერთ-ერთი ჩამრთველი მაინც ჩართულია', 22, TRUE),
       (80, 'ნათურა ინთება მხოლოდ მაშინ, როცა ორივე ჩამრთველი გამორთულია', 22, FALSE),
       (81, 'ნათურა ყოველთვის ანთია, მიუხედავად ჩამრთველების მდგომარეობისა', 22, FALSE),
       (82, 'ნათურა ინთება, როცა ზუსტად ერთი ჩამრთველია ჩართული', 22, FALSE);
