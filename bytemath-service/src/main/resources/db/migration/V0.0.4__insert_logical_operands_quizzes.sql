-- LOGICAL_OPERANDS_INTRO
INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (3, 'LOGICAL_OPERANDS_INTRO', 'Logical Operators Introduction Quiz', 'ლოგიკური ოპერატორების შესავალი - ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (13, 'Which of the following best describes the importance of logical operators in programming?',
        'რომელი აღწერს საუკეთესოდ ლოგიკური ოპერატორების მნიშვნელობას პროგრამირებაში?', 'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (43, 'They are used only for arithmetic calculations', 'ისინი გამოიყენება მხოლოდ არითმეტიკული გამოთვლებისთვის',
        13, FALSE),
       (44, 'They are essential for defining conditions and controlling program flow',
        'ისინი აუცილებელია პირობების განსაზღვრისა და პროგრამის მიმდინარეობის კონტროლისათვის', 13, TRUE),
       (45, 'They are used exclusively in database management', 'ისინი გამოიყენება მხოლოდ მონაცემთა ბაზების მართვაში',
        13, FALSE),
       (46, 'They have no practical applications in computer science',
        'მათ არ აქვთ პრაქტიკული გამოყენება კომპიუტერულ მეცნიერებაში', 13, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (14, 'In the light switch example, what does the AND operator represent?',
        'ნათურის ჩამრთველების მაგალითში რას წარმოადგენს "და" ოპერატორი?', 'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (47, 'The light is on when at least one switch is on', 'ნათურა ინთება, როცა ერთი ჩამრთველი მაინც ჩართულია', 14,
        FALSE),
       (48, 'The light is on only when both switches are on',
        'ნათურა ინთება მხოლოდ მაშინ, როცა ორივე ჩამრთველი ჩართულია', 14, TRUE),
       (49, 'The light is always off regardless of the switches',
        'ნათურა ყოველთვის გამორთულია, მიუხედავად ჩამრთველების მდგომარეობისა', 14, FALSE),
       (50, 'The light alternates between on and off states',
        'ნათურა მონაცვლეობს ჩართულ და გამორთულ მდგომარეობებს შორის', 14, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (15, 'Which of the following is NOT mentioned as a topic explored in this course?',
        'რომელი არ არის ნახსენები, როგორც ამ კურსში შესასწავლი თემა?', 'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (51, 'Basic logical operators', 'მარტივი ლოგიკური ოპერატორები', 15, FALSE),
       (52, 'Advanced logical operators', 'რთული ლოგიკური ოპერატორები', 15, FALSE),
       (53, 'Truth tables', 'ჭეშმარიტების ცხრილები', 15, FALSE),
       (54, 'Boolean algebra', 'ბულის ალგებრა', 15, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (16, 'How are logical operators used in artificial intelligence systems?',
        'როგორ გამოიყენება ლოგიკური ოპერატორები ხელოვნური ინტელექტში?', 'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (55, 'They are not used in AI systems', 'ისინი არ გამოიყენება ხელოვნური ინტელექტში', 16, FALSE),
       (56, 'They are used only for data storage', 'ისინი გამოიყენება მხოლოდ მონაცემთა შენახვისთვის', 16, FALSE),
       (57, 'They play a significant role in decision-making algorithms',
        'ისინი მნიშვნელოვან როლს ასრულებენ გადაწყვეტილების მიღების ალგორითმებში', 16, TRUE),
       (58, 'They are used exclusively for image processing',
        'ისინი გამოიყენება მხოლოდ გამოსახულებების დამუშავებისთვის', 16, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (17, 'In the light switch example, what does the OR operator represent?',
        'ნათურის ჩამრთველების მაგალითში რას წარმოადგენს "ან" ოპერატორი?', 'SINGLE_CHOICE', 3);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (59, 'The light is on if at least one of the switches is on',
        'ნათურა ინთება, თუ ერთ-ერთი ჩამრთველი მაინც ჩართულია', 17, TRUE),
       (60, 'The light is on only when both switches are off',
        'ნათურა ინთება მხოლოდ მაშინ, როცა ორივე ჩამრთველი გამორთულია', 17, FALSE),
       (61, 'The light is always on regardless of the switches',
        'ნათურა ყოველთვის ანთია, მიუხედავად ჩამრთველების მდგომარეობისა', 17, FALSE),
       (62, 'The light is on when exactly one switch is on', 'ნათურა ინთება, როცა ზუსტად ერთი ჩამრთველია ჩართული', 17,
        FALSE);


---------------------------------------------------------------------------------------------------------------------------------


-- LOGICAL_OPERANDS_BASIC_OPERATORS
INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (1001, 'LOGICAL_OPERANDS_BASIC_OPERATORS', 'Basic Logical Operators Quiz',
        'მარტივი ლოგიკური ოპერატორების ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (10001, 'Which logical operator returns true only when all conditions are met?',
        'რომელი ლოგიკური ოპერატორი აბრუნებს ჭეშმარიტს მხოლოდ მაშინ, როცა ყველა პირობა სრულდება?', 'SINGLE_CHOICE',
        1001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (100001, 'AND', 'და (AND)', 10001, TRUE),
       (100002, 'OR', 'ან (OR)', 10001, FALSE),
       (100003, 'NOT', 'არა (NOT)', 10001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (10002, 'What is the symbol for the OR operator?',
        'რა არის "ან" (OR) ოპერატორის სიმბოლო?', 'SINGLE_CHOICE', 1001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (100004, '&&', '&&', 10002, FALSE),
       (100005, '||', '||', 10002, TRUE),
       (100006, '!', '!', 10002, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (10003, 'Which operator always does the opposite, turning true into false and false into true?',
        'რომელი ოპერატორი აკეთებს ყოველთვის საპირისპიროს, აქცევს ჭეშმარიტს მცდარად და მცდარს ჭეშმარიტად?',
        'SINGLE_CHOICE', 1001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (100007, 'AND', 'და (AND)', 10003, FALSE),
       (100008, 'OR', 'ან (OR)', 10003, FALSE),
       (100009, 'NOT', 'არა (NOT)', 10003, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (10004, 'In the expression "A && B", what does it mean if the result is true?',
        'გამოსახულებაში "A && B", რას ნიშნავს თუ შედეგი ჭეშმარიტია?', 'SINGLE_CHOICE', 1001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (100010, 'Either A or B is true', 'A ან B არის ჭეშმარიტი', 10004, FALSE),
       (100011, 'Both A and B are true', 'A და B ორივე ჭეშმარიტია', 10004, TRUE),
       (100012, 'Neither A nor B is true', 'არც A და არც B არ არის ჭეშმარიტი', 10004, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (10005, 'What is the result of "true || false"?',
        'რა იქნება "true || false"-ის შედეგი?', 'SINGLE_CHOICE', 1001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (100013, 'True', 'ჭეშმარიტი', 10005, TRUE),
       (100014, 'False', 'მცდარი', 10005, FALSE),
       (100015, 'It depends on the context', 'დამოკიდებულია კონტექსტზე', 10005, FALSE);


---------------------------------------------------------------------------------------------------------------------------------


-- LOGICAL_OPERANDS_ADVANCED_OPERATORS

INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (2001, 'LOGICAL_OPERANDS_ADVANCED_OPERATORS', 'Advanced Logical Operators Quiz',
        'რთული ლოგიკური ოპერატორების ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (20001, 'Which advanced logical operator returns false only when all inputs are true?',
        'რომელი რთული ლოგიკური ოპერატორი აბრუნებს მცდარს მხოლოდ მაშინ, როცა ყველა პირობა ჭეშმარიტია?', 'SINGLE_CHOICE',
        2001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (200001, 'NAND', 'NAND', 20001, TRUE),
       (200002, 'NOR', 'NOR', 20001, FALSE),
       (200003, 'XOR', 'XOR', 20001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (20002, 'What is the symbol for the NOR operator?',
        'რა არის NOR ოპერატორის სიმბოლო?', 'SINGLE_CHOICE', 2001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (200004, '⊼', '⊼', 20002, FALSE),
       (200005, '⊽', '⊽', 20002, TRUE),
       (200006, '⊕', '⊕', 20002, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (20003, 'Which operator returns true only when inputs differ?',
        'რომელი ოპერატორი აბრუნებს ჭეშმარიტს მხოლოდ მაშინ, როცა პირობები განსხვავდება?', 'SINGLE_CHOICE', 2001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (200007, 'NAND', 'NAND', 20003, FALSE),
       (200008, 'NOR', 'NOR', 20003, FALSE),
       (200009, 'XOR', 'XOR', 20003, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (20004, 'What is the result of "true NAND false"?',
        'რა იქნება "ჭეშმარიტი NAND მცდარი"-ის შედეგი?', 'SINGLE_CHOICE', 2001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (200010, 'True', 'ჭეშმარიტი', 20004, TRUE),
       (200011, 'False', 'მცდარი', 20004, FALSE),
       (200012, 'It depends on the context', 'დამოკიდებულია კონტექსტზე', 20004, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (20005, 'Which advanced operator is known as "The Universal Pessimist"?',
        'რომელი რთული ოპერატორი ცნობილია როგორც "უნივერსალური პესიმისტი"?', 'SINGLE_CHOICE', 2001);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (200013, 'NAND', 'NAND', 20005, FALSE),
       (200014, 'NOR', 'NOR', 20005, TRUE),
       (200015, 'XOR', 'XOR', 20005, FALSE);
