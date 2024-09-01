-- BINARY_SYSTEM_INTRO
INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (30000, 'BINARY_SYSTEM_INTRO', 'Introduction to Binary System Quiz', 'შესავალი ორობით სისტემაში - ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (30001, 'What is the Binary System?', 'რა არის ორობითი სისტემა?', 'SINGLE_CHOICE', 30000),
       (30002, 'How many digits does the Binary System use? (Enter a number)',
        'რამდენ ციფრს იყენებს ორობითი სისტემა? (შეიყვანეთ რიცხვი)', 'TEXT', 30000),
       (30004, 'What does each digit in the Binary System represent?',
        'რას წარმოადგენს თითოეული ციფრი ორობით სისტემაში?', 'SINGLE_CHOICE', 30000),
       (30005, 'Why is the Binary System crucial for computing?',
        'რატომ არის ორობითი სისტემა მნიშვნელოვანი გამოთვლებისთვის?', 'SINGLE_CHOICE', 30000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (30006, 'A programming language', 'პროგრამირების ენა', 30001, FALSE),
       (30007, 'A system of mathematical equations', 'მათემატიკური განტოლებების სისტემა', 30001, FALSE),
       (30008, 'A base-2 number system using only 0 and 1',
        'ორის ფუძიანი რიცხვთა სისტემა, რომელიც იყენებს მხოლოდ 0-სა და 1-ს', 30001, TRUE),

       (30010, '2', '2', 30002, TRUE),


       (30015, 'A nibble', 'ნიბლი', 30004, FALSE),
       (30016, 'A byte', 'ბაიტი', 30004, FALSE),
       (30017, 'A bit', 'ბიტი', 30004, TRUE),
       (30018, 'A word', 'სიტყვა', 30004, FALSE),

       (30019, 'It''s more colorful', 'უფრო მრავალფეროვანია', 30005, FALSE),
       (30020, 'It uses less memory than decimal', 'იყენებს ნაკლებ მეხსიერებას, ვიდრე ათობითი', 30005, FALSE),
       (30022, 'It''s easy to represent with electrical signals', 'ელექტრული სიგნალებით ადვილი წარმოსადგენია', 30005,
        TRUE);

---------------------------------------------------------------------------------------------------------------------------------

-- BINARY_SYSTEM_REPRESENTATION
INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (40000, 'BINARY_SYSTEM_REPRESENTATION', 'Binary Number Representation Quiz',
        'ორობითი რიცხვების წარმოდგენის ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (40001, 'What does each position in a binary number represent?',
        'რას წარმოადგენს თითოეული პოზიცია ორობით რიცხვში?', 'SINGLE_CHOICE', 40000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (40002, 'A power of 10', '10-ის ხარისხს', 40001, FALSE),
       (40003, 'A power of 2', '2-ის ხარისხს', 40001, TRUE),
       (40004, 'A prime number', 'მარტივ რიცხვს', 40001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (40005, 'What does the binary number 1111 represent in decimal?',
        'რას უდრის ათობით სისტემაში ორობითი რიცხვი 1111?', 'SINGLE_CHOICE', 40000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (40006, '7', '7', 40005, FALSE),
       (40007, '15', '15', 40005, TRUE),
       (40008, '16', '16', 40005, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (40009, 'Which binary pattern represents a power of 2?',
        'რომელი ორობითი პატერნი წარმოადგენს 2-ის ხარისხს?', 'SINGLE_CHOICE', 40000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (40010, '1111', '1111', 40009, FALSE),
       (40011, '1010', '1010', 40009, FALSE),
       (40012, '1000', '1000', 40009, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (40013, 'In RGB color representation, how many bits are typically used for each color component?',
        'RGB ფერების რეპრეზენტაციაში, რამდენი ბიტი გამოიყენება თითოეული ფერის კომპონენტისთვის?', 'SINGLE_CHOICE',
        40000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (40014, '4 bits', '4 ბიტი', 40013, FALSE),
       (40015, '8 bits', '8 ბიტი', 40013, TRUE),
       (40016, '16 bits', '16 ბიტი', 40013, FALSE);

---------------------------------------------------------------------------------------------------------------------------------

--BINARY_SYSTEM_CONVERTING
INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (50000, 'BINARY_SYSTEM_CONVERTING', 'Binary-Decimal Conversion Quiz', 'ორობით-ათობითი კონვერტაციის ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (50001, 'What is the first step in converting a decimal number to binary?',
        'რა არის პირველი ნაბიჯი ათობითი რიცხვის ორობითში გადაყვანისას?', 'SINGLE_CHOICE', 50000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (50002, 'Multiply by 2', '2-ზე გამრავლება', 50001, FALSE),
       (50003, 'Divide by 2', '2-ზე გაყოფა', 50001, TRUE),
       (50004, 'Add 2', '2-ის მიმატება', 50001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (50005, 'In binary to decimal conversion, what do you do with each binary digit?',
        'ორობითიდან ათობითში გადაყვანისას, რას აკეთებთ თითოეული ორობითი ციფრისთვის?', 'SINGLE_CHOICE', 50000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (50006, 'Add it to the previous digit', 'ვუმატებთ წინა ციფრს', 50005, FALSE),
       (50007, 'Multiply it by its place value', 'ვამრავლებთ მის პოზიციურ მნიშვნელობაზე', 50005, TRUE),
       (50008, 'Divide it by 2', 'ვყოფთ 2-ზე', 50005, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (50009, 'What is the binary representation of the decimal number 8?',
        'რა არის ათობითი რიცხვი 8-ის ორობითი რეპრეზენტაცია?', 'SINGLE_CHOICE', 50000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (50010, '1000', '1000', 50009, TRUE),
       (50011, '1001', '1001', 50009, FALSE),
       (50012, '0111', '0111', 50009, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (50017, 'What is the decimal equivalent of the binary number 1010?',
        'რა არის ორობითი რიცხვი 1010-ის ათობითი ექვივალენტი?', 'SINGLE_CHOICE', 50000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (50018, '8', '8', 50017, FALSE),
       (50019, '10', '10', 50017, TRUE),
       (50020, '12', '12', 50017, FALSE);

---------------------------------------------------------------------------------------------------------------------------------

-- BINARY_SYSTEM_ARITHMETIC

INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (60000, 'BINARY_SYSTEM_ARITHMETIC', 'Binary Arithmetic Quiz', 'ორობითი არითმეტიკის ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (60001, 'What is the result of the binary addition: 1101 + 1011?',
        'რა არის ორობითი შეკრების შედეგი: 1101 + 1011?', 'SINGLE_CHOICE', 60000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (60002, '11000', '11000', 60001, TRUE),
       (60003, '10110', '10110', 60001, FALSE),
       (60004, '11001', '11001', 60001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (60005, 'In binary subtraction, what do we do when we need to borrow?',
        'ორობით გამოკლებაში, რას ვაკეთებთ, როცა გვჭირდება სესხება?', 'SINGLE_CHOICE', 60000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (60006, 'We borrow from the next column to the right', 'ვსესხულობთ მარჯვნივ მდებარე სვეტისგან', 60005, FALSE),
       (60007, 'We borrow from the next column to the left', 'ვსესხულობთ მარცხნივ მდებარე სვეტისგან', 60005, TRUE),
       (60008, 'We add 1 to the current column', 'ვუმატებთ 1-ს მიმდინარე სვეტს', 60005, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (60009, 'What are the steps to find the two''s complement of a binary number?',
        'რა ნაბიჯებია საჭირო ორობითი რიცხვის Two''s Complement-ის საპოვნელად?', 'SINGLE_CHOICE', 60000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (60010, 'Invert all bits, then subtract 1', 'შეაბრუნეთ ყველა ბიტი, შემდეგ გამოაკელით 1', 60009, FALSE),
       (60011, 'Add 1, then invert all bits', 'მიუმატეთ 1, შემდეგ შეაბრუნეთ ყველა ბიტი', 60009, FALSE),
       (60012, 'Invert all bits, then add 1', 'შეაბრუნეთ ყველა ბიტი, შემდეგ მიუმატეთ 1', 60009, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (60017, 'Convert the binary number 1010 to decimal. Enter the result as a number.',
        'გადაიყვანეთ ორობითი რიცხვი 1010 ათობითში.', 'TEXT', 60000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (60018, '10', '10', 60017, TRUE);
