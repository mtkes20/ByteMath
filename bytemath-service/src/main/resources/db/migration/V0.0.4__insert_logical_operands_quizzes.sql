-- LOGICAL_OPERANDS_INTRO - English Quiz
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

-- LOGICAL_OPERANDS_INTRO - Georgian Quiz
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



-----------------------------------------------------------------------------------------------------------------


-- LOGICAL_OPERANDS_BASIC_OPERATORS - English Version
INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, LANGUAGE, TITLE)
VALUES (1001, 'LOGICAL_OPERANDS_BASIC_OPERATORS', 'ENG', 'Basic Logical Operators Quiz');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (10001, 'Which logical operator returns true only when all conditions are met?', 'SINGLE_CHOICE', 1001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (100001, 'AND', 10001, TRUE),
       (100002, 'OR', 10001, FALSE),
       (100003, 'NOT', 10001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (10002, 'What is the symbol for the OR operator?', 'SINGLE_CHOICE', 1001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (100004, '&&', 10002, FALSE),
       (100005, '||', 10002, TRUE),
       (100006, '!', 10002, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (10003, 'Which operator always does the opposite, turning true into false and false into true?', 'SINGLE_CHOICE', 1001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (100007, 'AND', 10003, FALSE),
       (100008, 'OR', 10003, FALSE),
       (100009, 'NOT', 10003, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (10004, 'In the expression "A && B", what does it mean if the result is true?', 'SINGLE_CHOICE', 1001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (100010, 'Either A or B is true', 10004, FALSE),
       (100011, 'Both A and B are true', 10004, TRUE),
       (100012, 'Neither A nor B is true', 10004, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (10005, 'What is the result of "true || false"?', 'SINGLE_CHOICE', 1001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (100013, 'True', 10005, TRUE),
       (100014, 'False', 10005, FALSE),
       (100015, 'It depends on the context', 10005, FALSE);

-- LOGICAL_OPERANDS_BASIC_OPERATORS - Georgian Version
INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, LANGUAGE, TITLE)
VALUES (1002, 'LOGICAL_OPERANDS_BASIC_OPERATORS', 'GEO', 'მარტივი ლოგიკური ოპერატორების ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (10006, 'რომელი ლოგიკური ოპერატორი აბრუნებს ჭეშმარიტს მხოლოდ მაშინ, როცა ყველა პირობა სრულდება?', 'SINGLE_CHOICE', 1002);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (100016, 'და (AND)', 10006, TRUE),
       (100017, 'ან (OR)', 10006, FALSE),
       (100018, 'არა (NOT)', 10006, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (10007, 'რა არის "ან" (OR) ოპერატორის სიმბოლო?', 'SINGLE_CHOICE', 1002);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (100019, '&&', 10007, FALSE),
       (100020, '||', 10007, TRUE),
       (100021, '!', 10007, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (10008, 'რომელი ოპერატორი აკეთებს ყოველთვის საპირისპიროს, აქცევს ჭეშმარიტს მცდარად და მცდარს ჭეშმარიტად?', 'SINGLE_CHOICE', 1002);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (100022, 'და (AND)', 10008, FALSE),
       (100023, 'ან (OR)', 10008, FALSE),
       (100024, 'არა (NOT)', 10008, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (10009, 'გამოსახულებაში "A && B", რას ნიშნავს თუ შედეგი ჭეშმარიტია?', 'SINGLE_CHOICE', 1002);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (100025, 'A ან B არის ჭეშმარიტი', 10009, FALSE),
       (100026, 'A და B ორივე ჭეშმარიტია', 10009, TRUE),
       (100027, 'არც A და არც B არ არის ჭეშმარიტი', 10009, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (10010, 'რა იქნება "true || false"-ის შედეგი?', 'SINGLE_CHOICE', 1002);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (100028, 'ჭეშმარიტი', 10010, TRUE),
       (100029, 'მცდარი', 10010, FALSE),
       (100030, 'დამოკიდებულია კონტექსტზე', 10010, FALSE);


-----------------------------------------------------------------------------------------------------------------


-- LOGICAL_OPERANDS_ADVANCED_OPERATORS - English Version
INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, LANGUAGE, TITLE)
VALUES (2001, 'LOGICAL_OPERANDS_ADVANCED_OPERATORS', 'ENG', 'Advanced Logical Operators Quiz');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (20001, 'Which advanced logical operator returns false only when all inputs are true?', 'SINGLE_CHOICE', 2001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (200001, 'NAND', 20001, TRUE),
       (200002, 'NOR', 20001, FALSE),
       (200003, 'XOR', 20001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (20002, 'What is the symbol for the NOR operator?', 'SINGLE_CHOICE', 2001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (200004, '⊼', 20002, FALSE),
       (200005, '⊽', 20002, TRUE),
       (200006, '⊕', 20002, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (20003, 'Which operator returns true only when inputs differ?', 'SINGLE_CHOICE', 2001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (200007, 'NAND', 20003, FALSE),
       (200008, 'NOR', 20003, FALSE),
       (200009, 'XOR', 20003, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (20004, 'What is the result of "true NAND false"?', 'SINGLE_CHOICE', 2001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (200010, 'True', 20004, TRUE),
       (200011, 'False', 20004, FALSE),
       (200012, 'It depends on the context', 20004, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (20005, 'Which advanced operator is known as "The Universal Pessimist"?', 'SINGLE_CHOICE', 2001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (200013, 'NAND', 20005, FALSE),
       (200014, 'NOR', 20005, TRUE),
       (200015, 'XOR', 20005, FALSE);

-- LOGICAL_OPERANDS_ADVANCED_OPERATORS - Georgian Version
INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, LANGUAGE, TITLE)
VALUES (2002, 'LOGICAL_OPERANDS_ADVANCED_OPERATORS', 'GEO', 'რთული ლოგიკური ოპერატორების ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (20006, 'რომელი რთული ლოგიკური ოპერატორი აბრუნებს მცდარს მხოლოდ მაშინ, როცა ყველა პირობა ჭეშმარიტია?', 'SINGLE_CHOICE', 2002);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (200016, 'NAND', 20006, TRUE),
       (200017, 'NOR', 20006, FALSE),
       (200018, 'XOR', 20006, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (20007, 'რა არის NOR ოპერატორის სიმბოლო?', 'SINGLE_CHOICE', 2002);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (200019, '⊼', 20007, FALSE),
       (200020, '⊽', 20007, TRUE),
       (200021, '⊕', 20007, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (20008, 'რომელი ოპერატორი აბრუნებს ჭეშმარიტს მხოლოდ მაშინ, როცა პირობები განსხვავდება?', 'SINGLE_CHOICE', 2002);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (200022, 'NAND', 20008, FALSE),
       (200023, 'NOR', 20008, FALSE),
       (200024, 'XOR', 20008, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (20009, 'რა იქნება "ჭეშმარიტი NAND მცდარი"-ის შედეგი?', 'SINGLE_CHOICE', 2002);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (200025, 'ჭეშმარიტი', 20009, TRUE),
       (200026, 'მცდარი', 20009, FALSE),
       (200027, 'დამოკიდებულია კონტექსტზე', 20009, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT, QUESTION_TYPE, QUIZ_ID)
VALUES (20010, 'რომელი რთული ოპერატორი ცნობილია როგორც "უნივერსალური პესიმისტი"?', 'SINGLE_CHOICE', 2002);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT, QUESTION_ID, IS_CORRECT)
VALUES (200028, 'NAND', 20010, FALSE),
       (200029, 'NOR', 20010, TRUE),
       (200030, 'XOR', 20010, FALSE);
