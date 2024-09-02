--- Inserting easy ranked binary system problems
INSERT INTO BYTEMATH.PROBLEM (ID, IDENTIFIER,
                              TITLE_ENG, TITLE_GEO,
                              DESCRIPTION_ENG, DESCRIPTION_GEO,
                              TASK_ENG, TASK_GEO,
                              INPUT_FORMAT_ENG, INPUT_FORMAT_GEO,
                              OUTPUT_FORMAT_ENG, OUTPUT_FORMAT_GEO,
                              EXAMPLE_ENG, EXAMPLE_GEO,
                              NOTE_ENG, NOTE_GEO,
                              PYTHON_TEMPLATE_ENG, PYTHON_TEMPLATE_GEO,
                              JAVA_TEMPLATE_ENG, JAVA_TEMPLATE_GEO,
                              PYTHON, JAVA,
                              DIFFICULTY, COURSE_ID)
VALUES (1, 'binary_to_decimal',
        'Binary to Decimal Conversion', 'ორობითიდან ათობითში გადაყვანა',
        'Convert a binary number to its decimal equivalent.', 'გადაიყვანეთ ორობითი რიცხვი მის ათობით ეკვივალენტში.',
        'Implement a function that takes a binary number as a string and returns its decimal equivalent as an integer.',
        'დაწერეთ ფუნქცია, რომელიც იღებს ორობით რიცხვს სტრიქონის სახით და აბრუნებს მის ათობით ეკვივალენტს მთელი რიცხვის სახით.',
        'A single line containing a binary number as a string.',
        'ერთი ხაზი, რომელიც შეიცავს ორობით რიცხვს სტრიქონის სახით.',
        'An integer representing the decimal equivalent of the input binary number.',
        'მთელი რიცხვი, რომელიც წარმოადგენს შეყვანილი ორობითი რიცხვის ათობით ეკვივალენტს.',
        '**Input:**
1101

**Output:**
13

Explanation: 1101 in binary is equal to 13 in decimal (1*2^3 + 1*2^2 + 0*2^1 + 1*2^0 = 8 + 4 + 0 + 1 = 13).',
        '**შესატანი:**
1101

**გამოსატანი:**
13

ახსნა: 1101 ორობითში უდრის 13-ს ათობითში (1*2^3 + 1*2^2 + 0*2^1 + 1*2^0 = 8 + 4 + 0 + 1 = 13).',
        'The input will always be a valid binary number.',
        'შესატანი ყოველთვის იქნება ვალიდური ორობითი რიცხვი.',
        'def binary_to_decimal(binary):
    # Your code here
    return 0

# DO NOT MODIFY BELOW THIS LINE

if __name__ == "__main__":
    binary = input().strip()
    result = binary_to_decimal(binary)
    print(result)',
        'def binary_to_decimal(binary):
    # თქვენი კოდი აქ
    return 0

# არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

if __name__ == "__main__":
    binary = input().strip()
    result = binary_to_decimal(binary)
    print(result)',
        'import java.io.*;
import java.util.*;

public class Solution {

    public static int binaryToDecimal(String binary) {
        // Your code here
        return 0;
    }

    // DO NOT MODIFY BELOW THIS LINE

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String binary = scanner.nextLine().trim();
        int result = binaryToDecimal(binary);
        System.out.println(result);
    }
}',
        'import java.io.*;
import java.util.*;

public class Solution {

    public static int binaryToDecimal(String binary) {
        // თქვენი კოდი აქ
        return 0;
    }

    // არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String binary = scanner.nextLine().trim();
        int result = binaryToDecimal(binary);
        System.out.println(result);
    }
}',
        6, 9,
        'EASY', 1);


INSERT INTO BYTEMATH.TEST_CASE (INPUT, EXPECTED_OUTPUT, PROBLEM_ID)
VALUES ('1101', '13', 1),
       ('1010', '10', 1),
       ('11111', '31', 1),
       ('100000', '32', 1),
       ('0', '0', 1);

--- Inserting medium ranked binary system problems

INSERT INTO BYTEMATH.PROBLEM (ID, IDENTIFIER,
                              TITLE_ENG, TITLE_GEO,
                              DESCRIPTION_ENG, DESCRIPTION_GEO,
                              TASK_ENG, TASK_GEO,
                              INPUT_FORMAT_ENG, INPUT_FORMAT_GEO,
                              OUTPUT_FORMAT_ENG, OUTPUT_FORMAT_GEO,
                              EXAMPLE_ENG, EXAMPLE_GEO,
                              NOTE_ENG, NOTE_GEO,
                              PYTHON_TEMPLATE_ENG, PYTHON_TEMPLATE_GEO,
                              JAVA_TEMPLATE_ENG, JAVA_TEMPLATE_GEO,
                              PYTHON, JAVA,
                              DIFFICULTY, COURSE_ID)
VALUES (2, 'binary_addition',
        'Binary Addition', 'ორობითი შეკრება',
        'Perform addition of two binary numbers.', 'შეასრულეთ ორი ორობითი რიცხვის შეკრება.',
        'Implement a function that takes two binary numbers as strings and returns their sum as a binary string. The function should handle carry operations correctly.',
        'დაწერეთ ფუნქცია, რომელიც იღებს ორ ორობით რიცხვს სტრიქონების სახით და აბრუნებს მათ ჯამს ორობითი სტრიქონის სახით. ფუნქციამ სწორად უნდა დაამუშაოს გადატანის ოპერაციები.',
        'Two lines, each containing a binary number as a string.',
        'ორი ხაზი, თითოეული შეიცავს ორობით რიცხვს სტრიქონის სახით.',
        'A single line containing the binary sum of the two input numbers.',
        'ერთი ხაზი, რომელიც შეიცავს შეყვანილი ორი რიცხვის ორობით ჯამს.',
        '**Input:**
1011
1010

**Output:**
10101

Explanation:
  1011 (11 in decimal)
+ 1010 (10 in decimal)
-------
 10101 (21 in decimal)',
        '**შესატანი:**
1011
1010

**გამოსატანი:**
10101

ახსნა:
  1011 (11 ათობითში)
+ 1010 (10 ათობითში)
-------
 10101 (21 ათობითში)',
        'The input will always be valid binary numbers. The result may have a different number of digits than the input numbers.',
        'შესატანი ყოველთვის იქნება ვალიდური ორობითი რიცხვები. შედეგს შეიძლება ჰქონდეს განსხვავებული რაოდენობის ციფრები, ვიდრე შესატან რიცხვებს.',
        'def binary_addition(a, b):
    # Your code here
    return ""

# DO NOT MODIFY BELOW THIS LINE

if __name__ == "__main__":
    a = input().strip()
    b = input().strip()
    result = binary_addition(a, b)
    print(result)',
        'def binary_addition(a, b):
    # თქვენი კოდი აქ
    return ""

# არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

if __name__ == "__main__":
    a = input().strip()
    b = input().strip()
    result = binary_addition(a, b)
    print(result)',
        'import java.io.*;
import java.util.*;

public class Solution {

    public static String binaryAddition(String a, String b) {
        // Your code here
        return "";
    }

    // DO NOT MODIFY BELOW THIS LINE

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String a = scanner.nextLine().trim();
        String b = scanner.nextLine().trim();
        String result = binaryAddition(a, b);
        System.out.println(result);
    }
}',
        'import java.io.*;
import java.util.*;

public class Solution {

    public static String binaryAddition(String a, String b) {
        // თქვენი კოდი აქ
        return "";
    }

    // არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String a = scanner.nextLine().trim();
        String b = scanner.nextLine().trim();
        String result = binaryAddition(a, b);
        System.out.println(result);
    }
}',
        7, 10,
        'MEDIUM', 1);

INSERT INTO BYTEMATH.TEST_CASE (INPUT, EXPECTED_OUTPUT, PROBLEM_ID)
VALUES ('1011
1010', '10101', 2),
       ('11111
1', '100000', 2),
       ('1010101
10101010', '11111111', 2),
       ('0
1111', '1111', 2),
       ('1111111111
1', '10000000000', 2);


--- Inserting hard ranked binary system problems

INSERT INTO BYTEMATH.PROBLEM (ID, IDENTIFIER,
                              TITLE_ENG, TITLE_GEO,
                              DESCRIPTION_ENG, DESCRIPTION_GEO,
                              TASK_ENG, TASK_GEO,
                              INPUT_FORMAT_ENG, INPUT_FORMAT_GEO,
                              OUTPUT_FORMAT_ENG, OUTPUT_FORMAT_GEO,
                              EXAMPLE_ENG, EXAMPLE_GEO,
                              NOTE_ENG, NOTE_GEO,
                              PYTHON_TEMPLATE_ENG, PYTHON_TEMPLATE_GEO,
                              JAVA_TEMPLATE_ENG, JAVA_TEMPLATE_GEO,
                              PYTHON, JAVA,
                              DIFFICULTY, COURSE_ID)
VALUES (3, 'binary_expression_evaluator',
        'Binary Expression Evaluator', 'ორობითი გამოსახულების შემფასებელი',
        'Evaluate arithmetic expressions with binary numbers.', 'შეაფასეთ არითმეტიკული გამოსახულებები ორობითი რიცხვებით.',
        'Create a function that takes an arithmetic expression with binary numbers as input and returns the result of the expression in binary.',
        'შექმენით ფუნქცია, რომელიც იღებს არითმეტიკულ გამოსახულებას ორობითი რიცხვებით და აბრუნებს გამოსახულების შედეგს ორობით ფორმატში.',
        'A single line containing an arithmetic expression with binary numbers. The expression may contain binary numbers, parentheses, and the operators +, -, *, and /.',
        'ერთი ხაზი, რომელიც შეიცავს არითმეტიკულ გამოსახულებას ორობითი რიცხვებით. გამოსახულება შეიძლება შეიცავდეს ორობით რიცხვებს, ფრჩხილებს და ოპერატორებს +, -, *, და /.',
        'A single line containing the result of the expression in binary format.',
        'ერთი ხაზი, რომელიც შეიცავს გამოსახულების შედეგს ორობით ფორმატში.',
        '**Input:**
(1000 + 1001) / 101

**Output:**
11

Explanation:
1. 1000 (8 in decimal) + 1001 (9 in decimal) = 10001 (17 in decimal)
2. 10001 / 101 (5 in decimal) = 11 (3 in decimal)',
        '**შესატანი:**
(1000 + 1001) / 101

**გამოსატანი:**
11

ახსნა:
1. 1000 (8 ათობითში) + 1001 (9 ათობითში) = 10001 (17 ათობითში)
2. 10001 / 101 (5 ათობითში) = 11 (3 ათობითში)',
        'The input will always be a valid arithmetic expression with binary numbers. The division operation should perform integer division (floor division). The result should always be a non-negative binary number.',
        'შესატანი ყოველთვის იქნება ვალიდური არითმეტიკული გამოსახულება ორობითი რიცხვებით. გაყოფის ოპერაცია უნდა შეასრულოს მთელრიცხვა გაყოფა (floor division). შედეგი ყოველთვის უნდა იყოს არაუარყოფითი ორობითი რიცხვი.',
        'def evaluate_binary_expression(expression):
    # Your code here
    return ""

# DO NOT MODIFY BELOW THIS LINE

if __name__ == "__main__":
    expression = input().strip()
    result = evaluate_binary_expression(expression)
    print(result)',
        'def evaluate_binary_expression(expression):
    # თქვენი კოდი აქ
    return ""

# არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

if __name__ == "__main__":
    expression = input().strip()
    result = evaluate_binary_expression(expression)
    print(result)',
        'import java.io.*;
import java.util.*;

public class Solution {

    public static String evaluateBinaryExpression(String expression) {
        // Your code here
        return "";
    }

    // DO NOT MODIFY BELOW THIS LINE

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String expression = scanner.nextLine().trim();
        String result = evaluateBinaryExpression(expression);
        System.out.println(result);
    }
}',
        'import java.io.*;
import java.util.*;

public class Solution {

    public static String evaluateBinaryExpression(String expression) {
        // თქვენი კოდი აქ
        return "";
    }

    // არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String expression = scanner.nextLine().trim();
        String result = evaluateBinaryExpression(expression);
        System.out.println(result);
    }
}',
        6, 8,
        'HARD', 1);


INSERT INTO BYTEMATH.TEST_CASE (INPUT, EXPECTED_OUTPUT, PROBLEM_ID)
VALUES ('(1000+1001)/101', '11', 3),
       ('1010*1011-1100', '1011110', 3),
       ('(1111+1)*(1010-11)', '1111100', 3),
    ('1010/(11-1)', '101', 3),
       ('((1000*1000)+(1100*1010))/1010', '1111011', 3),
       ('1111111-(1010101+101010)', '1111', 3),
       ('(1+10)*(11+100)*(101+110)', '11111000', 3),
       ('(1000000/1000)*(1001-1000) + 101', '1000', 3);
