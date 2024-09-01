-- NUMBER_THEORY_INTRO

INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (410000, 'NUMBER_THEORY_INTRO', 'Introduction to Number Theory Quiz', 'შესავალი რიცხვთა თეორიაში - ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (410001, 'What is the primary focus of Number Theory?',
        'რა არის რიცხვთა თეორიის მთავარი ფოკუსი?', 'SINGLE_CHOICE', 410000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (410002, 'The study of real numbers', 'ნამდვილი რიცხვების შესწავლა', 410001, FALSE),
       (410003, 'The study of integers and integer-valued functions', 'მთელი რიცხვებისა და მათი ფუნქციების შესწავლა',
        410001, TRUE),
       (410004, 'The study of complex numbers', 'კომპლექსური რიცხვების შესწავლა', 410001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (410005, 'Which of the following is NOT a key concept in Number Theory?',
        'ჩამოთვლილთაგან რომელი არ არის რიცხვთა თეორიის ძირითადი კონცეფცია?', 'SINGLE_CHOICE', 410000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (410006, 'Prime Numbers', 'მარტივი რიცხვები', 410005, FALSE),
       (410007, 'Modular Arithmetic', 'მოდულარული არითმეტიკა', 410005, FALSE),
       (410008, 'Differential Equations', 'დიფერენციალური განტოლებები', 410005, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (410009, 'What is the definition of prime numbers in Number Theory?',
        'როგორ განიმარტება მარტივი რიცხვები რიცხვთა თეორიაში?', 'SINGLE_CHOICE', 410000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (410010, 'Numbers greater than 1 with no positive divisors other than 1 and themselves',
        'რიცხვები, რომლებიც 1-ზე მეტია და არ აქვთ სხვა დადებითი გამყოფები გარდა 1-ისა და საკუთარი თავისა', 410009,
        TRUE),
       (410011, 'Even numbers greater than 2', 'ლუწი რიცხვები, რომლებიც 2-ზე მეტია', 410009, FALSE),
       (410012, 'Numbers that can be divided by 2 and 3', 'რიცხვები, რომლებიც იყოფა 2-ზე და 3-ზე', 410009, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (410013, 'Which of the following is an application of Number Theory?',
        'ჩამოთვლილთაგან რაში გამოიყენება რიცხვთა თეორია?', 'SINGLE_CHOICE', 410000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (410014, 'Weather forecasting', 'ამინდის პროგნოზირება', 410013, FALSE),
       (410015, 'Cryptography', 'კრიპტოგრაფია', 410013, TRUE),
       (410016, 'Geology', 'გეოლოგია', 410013, FALSE);


---------------------------------------------------------------------------------------------------------------------------------


-- NUMBER_THEORY_LCM_GCD

INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (420000, 'NUMBER_THEORY_LCM_GCD', 'Least Common Multiple (LCM) and Greatest Common Divisor (GCD) Quiz', 'უსჯ და უსგ - ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (420001, 'What is the Least Common Multiple (LCM)?',
        'რა არის უმცირესი საერთო ჯერადი (უსჯ)?', 'SINGLE_CHOICE', 420000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (420002, 'The largest number that divides both numbers', 'უდიდესი რიცხვი, რომელიც ყოფს ორივე რიცხვს', 420001, FALSE),
       (420003, 'The smallest positive number divisible by both numbers', 'უმცირესი დადებითი რიცხვი, რომელიც იყოფა ორივე რიცხვზე', 420001, TRUE),
       (420004, 'The sum of two numbers', 'ორი რიცხვის ჯამი', 420001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (420005, 'Which algorithm is most efficient for calculating the GCD?',
        'რომელი ალგორითმია ყველაზე ეფექტური უსგ-ს გამოსათვლელად?', 'SINGLE_CHOICE', 420000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (420006, 'Prime factorization', 'მარტივ მამრავლებად დაშლა', 420005, FALSE),
       (420007, 'Euclidean algorithm', 'ევკლიდეს ალგორითმი', 420005, TRUE),
       (420008, 'Trial division', 'ცდის მეთოდი', 420005, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (420013, 'What is the formula for calculating LCM using GCD?',
        'რა არის უსჯ-ს გამოსათვლელი ფორმულა უსგ-ს გამოყენებით?', 'SINGLE_CHOICE', 420000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (420014, 'LCM(a,b) = a + b - GCD(a,b)', 'უსჯ(a,b) = a + b - უსგ(a,b)', 420013, FALSE),
       (420015, 'LCM(a,b) = a * b * GCD(a,b)', 'უსჯ(a,b) = a * b * უსგ(a,b)', 420013, FALSE),
       (420016, 'LCM(a,b) = |a * b| / GCD(a,b)', 'უსჯ(a,b) = |a * b| / უსგ(a,b)', 420013, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (420017, 'What is the GCD of 48 and 18?',
        'რა არის 48-ისა და 18-ის უსგ?', 'TEXT', 420000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (420018, '6', '6', 420017, TRUE);


---------------------------------------------------------------------------------------------------------------------------------


-- NUMBER_THEORY_RSA

INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (440000, 'NUMBER_THEORY_RSA', 'RSA Algorithm Quiz', 'RSA ალგორითმის ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (440001, 'What type of cryptosystem is RSA?',
        'რა ტიპის კრიპტოსისტემაა RSA?', 'SINGLE_CHOICE', 440000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (440002, 'Symmetric-key cryptosystem', 'სიმეტრიული გასაღების კრიპტოსისტემას', 440001, FALSE),
       (440003, 'Public-key cryptosystem', 'საჯარო გასაღების კრიპტოსისტემას', 440001, TRUE),
       (440004, 'Hash-based cryptosystem', 'ჰეშზე დაფუძნებული კრიპტოსისტემას', 440001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (440005, 'What mathematical problem is the security of RSA based on?',
        'რომელ მათემატიკურ პრობლემას ეფუძნება RSA-ს უსაფრთხოება?', 'SINGLE_CHOICE', 440000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (440006, 'The traveling salesman problem', 'მოგზაური გამყიდველის პრობლემა', 440005, FALSE),
       (440007, 'The knapsack problem', 'ზურგჩანთის პრობლემა', 440005, FALSE),
       (440008, 'The factoring problem', 'ფაქტორიზაციის პრობლემა', 440005, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (440009, 'Which of the following is NOT a step in RSA key generation?',
        'ჩამოთვლილთაგან რომელი არ არის RSA-ს გასაღების გენერაციის ერთ-ერთი ნაბიჯი?', 'SINGLE_CHOICE', 440000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (440010, 'Choose two distinct large prime numbers', 'ორი განსხვავებული დიდი მარტივი რიცხვის არჩევა', 440009, FALSE),
       (440011, 'Compute the modulus n', 'n მოდულის გამოთვლა', 440009, FALSE),
       (440012, 'Calculate the square root of n', 'n-ის კვადრატული ფესვის გამოთვლა', 440009, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (440013, 'What is the recommended minimum key size for RSA as of 2021?',
        'რა არის RSA-ს რეკომენდებული მინიმალური გასაღების ზომა 2021 წლის მდგომარეობით?', 'SINGLE_CHOICE', 440000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (440014, '1024 bits', '1024 ბიტი', 440013, FALSE),
       (440015, '2048 bits', '2048 ბიტი', 440013, TRUE),
       (440016, '4096 bits', '4096 ბიტი', 440013, FALSE);


---------------------------------------------------------------------------------------------------------------------------------


-- NUMBER_THEORY_MODULAR_ARITHMETIC

INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (430000, 'NUMBER_THEORY_MODULAR_ARITHMETIC', 'Modular Arithmetic Quiz', 'მოდულარული არითმეტიკის ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (430001, 'What does the notation a ≡ b (mod m) mean in modular arithmetic?',
        'რას ნიშნავს ჩანაწერი a ≡ b (mod m) მოდულარულ არითმეტიკაში?', 'SINGLE_CHOICE', 430000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (430002, 'a is larger than b by m', 'a მეტია b-ზე m-ით', 430001, FALSE),
       (430003, 'a and b leave the same remainder when divided by m', 'a და b გვაძლევს ერთსა და იმავე ნაშთს m-ზე გაყოფისას', 430001, TRUE),
       (430004, 'a is equal to b multiplied by m', 'a ტოლია b გამრავლებული m-ზე', 430001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (430005, 'Which of the following is NOT an operation in modular arithmetic?',
        'ჩამოთვლილთაგან რომელი არ არის ოპერაცია მოდულარულ არითმეტიკაში?', 'SINGLE_CHOICE', 430000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (430006, 'Addition', 'შეკრება', 430005, FALSE),
       (430007, 'Multiplication', 'გამრავლება', 430005, FALSE),
       (430008, 'Division', 'გაყოფა', 430005, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (430009, 'Which property of modular arithmetic states that the result of any operation is always within the set of residues modulo m?',
        'მოდულარული არითმეტიკის რომელი თვისება ამბობს, რომ ნებისმიერი ოპერაციის შედეგი ყოველთვის არის m მოდულის ნაშთების სიმრავლიდან?', 'SINGLE_CHOICE', 430000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (430010, 'Associativity', 'ჯუფთებადობა', 430009, FALSE),
       (430011, 'Commutativity', 'გადანაცვლებადობა', 430009, FALSE),
       (430012, 'Closure', 'ჩაკეტილობა', 430009, TRUE);
