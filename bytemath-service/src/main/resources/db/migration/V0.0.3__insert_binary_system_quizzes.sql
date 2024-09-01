-- Insert Quiz
INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (30000, 'BINARY_SYSTEM_INTRO', 'Introduction to Binary System Quiz', 'შესავალი ორობით სისტემაში - ქვიზი');

-- Insert Questions
INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (30001, 'What is the Binary System?', 'რა არის ორობითი სისტემა?', 'SINGLE_CHOICE', 30000),
       (30002, 'How many digits does the Binary System use? (Enter a number)',
        'რამდენ ციფრს იყენებს ორობითი სისტემა? (შეიყვანეთ რიცხვი)', 'TEXT', 30000),
       (30003, 'Which of the following is a real-life example of the Binary System?',
        'რომელია ორობითი სისტემის რეალური მაგალითი?', 'SINGLE_CHOICE', 30000),
       (30004, 'What does each digit in the Binary System represent?',
        'რას წარმოადგენს თითოეული ციფრი ორობით სისტემაში?', 'SINGLE_CHOICE', 30000),
       (30005, 'Why is the Binary System crucial for computing?',
        'რატომ არის ორობითი სისტემა მნიშვნელოვანი გამოთვლებისთვის?', 'SINGLE_CHOICE', 30000);

-- Insert Answers
INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (30006, 'A programming language', 'პროგრამირების ენა', 30001, FALSE),
       (30007, 'A system of mathematical equations', 'მათემატიკური განტოლებების სისტემა', 30001, FALSE),
       (30008, 'A base-2 number system using only 0 and 1',
        'ორის ფუძიანი რიცხვთა სისტემა, რომელიც იყენებს მხოლოდ 0-სა და 1-ს', 30001, TRUE),

       (30010, '2', '2', 30002, TRUE),

       (30011, 'Analog clocks', 'ანალოგური საათები', 30003, FALSE),
       (30012, 'Digital photography', 'ციფრული ფოტოგრაფია', 30003, TRUE),
       (30013, 'Paper books', 'ქაღალდის წიგნები', 30003, FALSE),
       (30014, 'Mechanical calculators', 'მექანიკური კალკულატორები', 30003, FALSE),

       (30015, 'A nibble', 'ნიბლი', 30004, FALSE),
       (30016, 'A byte', 'ბაიტი', 30004, FALSE),
       (30017, 'A bit (binary digit)', 'ბიტი (ორობითი ციფრი)', 30004, TRUE),
       (30018, 'A word', 'სიტყვა', 30004, FALSE),

       (30019, 'It''s more colorful', 'უფრო ფერადია', 30005, FALSE),
       (30020, 'It uses less memory than decimal', 'იყენებს ნაკლებ მეხსიერებას, ვიდრე ათობითი', 30005, FALSE),
       (30021, 'It''s faster for humans to read', 'უფრო სწრაფია ადამიანებისთვის წასაკითხად', 30005, FALSE),
       (30022, 'It''s easy to represent with electrical signals', 'ადვილია წარმოდგენა ელექტრული სიგნალებით', 30005,
        TRUE);
