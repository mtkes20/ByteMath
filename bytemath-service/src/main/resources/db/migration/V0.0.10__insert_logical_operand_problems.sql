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
VALUES (4, 'weather_conditions',
        'Weather Conditions', 'ამინდის პირობები',
        'Validate the given weather conditions.', 'შეამოწმეთ, არის თუ არა მოცემული ამინდის პირობები ვალიდური.',
        'Implement a function that takes three boolean parameters representing weather conditions: sunny, rainy, snowy) and returns true if the combination is valid, and false otherwise. A valid combination means only one condition can be true at a time, or all can be false.',
        'დაწერეთ ფუნქცია, რომელიც იღებს სამ პარამეტრს, რომლებიც წარმოადგენენ ამინდის სხვადასხვა პირობებს (მზიანი, წვიმიანი, თოვლიანი) და აბრუნებს true-ს, თუ კომბინაცია ვალიდურია, და false-ს წინააღმდეგ შემთხვევაში. ვალიდური კომბინაცია ნიშნავს, რომ მხოლოდ ერთი პირობა შეიძლება იყოს ჭეშმარიტი, ან ყველა პირობა უნდა იყოს მცდარი.',
        'Three boolean values representing is_sunny, is_rainy, and is_snowy.',
        'სამი მნიშვნელობა, რომლებიც წარმოადგენენ is_sunny, is_rainy და is_snowy ამინდის პირობებს.',
        'A boolean value: true if the weather condition is valid, false otherwise.',
        'ლოგიკური მნიშვნელობა: true თუ ამინდის პირობები ვალიდურია, false წინააღმდეგ შემთხვევაში.',
        'Input 1:
True False False

Output 1: True

Input 2:
False True True

Output 2: False

Input 3:
False False False

Output 3: True',
        'შესატანი 1:
True False False

გამოსატანი 1: True

შესატანი 2:
False True True

გამოსატანი 2: False

შესატანი 3:
False False False

გამოსატანი 3: True',
        'Remember that weather will be valid if it is not neither sunny, rainy, nor snowy.',
        'გახსოვდეთ, რომ შეიძლება არ იყოს არც მზიანი, არც წვიმიანი და არც თოვლიანი ამინდი, მაგრამ ასეთი პირობები მაინც იქნება ვალიდური.',
        'def weather_condition_is_valid(is_sunny, is_rainy, is_snowy):
    # Your code here
    pass

# DO NOT MODIFY BELOW THIS LINE

if __name__ == "__main__":
    is_sunny = input().strip().lower() == "true"
    is_rainy = input().strip().lower() == "true"
    is_snowy = input().strip().lower() == "true"

    result = weather_condition_is_valid(is_sunny, is_rainy, is_snowy)
    print(str(result).lower())',
        'def weather_condition_is_valid(is_sunny, is_rainy, is_snowy):
    # თქვენი კოდი აქ
    pass

# არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

if __name__ == "__main__":
    is_sunny = input().strip().lower() == "true"
    is_rainy = input().strip().lower() == "true"
    is_snowy = input().strip().lower() == "true"

    result = weather_condition_is_valid(is_sunny, is_rainy, is_snowy)
    print(str(result).lower())',
        'import java.util.Scanner;

public class Solution {
    public static boolean weatherConditionIsValid(boolean isSunny, boolean isRainy, boolean isSnowy) {
        // Your code here
        return false;
    }

    // DO NOT MODIFY BELOW THIS LINE

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean isSunny = Boolean.parseBoolean(scanner.nextLine().trim().toLowerCase());
        boolean isRainy = Boolean.parseBoolean(scanner.nextLine().trim().toLowerCase());
        boolean isSnowy = Boolean.parseBoolean(scanner.nextLine().trim().toLowerCase());

        boolean result = weatherConditionIsValid(isSunny, isRainy, isSnowy);
        System.out.println(String.valueOf(result).toLowerCase());
    }
}',
        'import java.util.Scanner;

public class Solution {
    public static boolean weatherConditionIsValid(boolean isSunny, boolean isRainy, boolean isSnowy) {
        // თქვენი კოდი აქ
        return false;
    }

    // არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean isSunny = Boolean.parseBoolean(scanner.nextLine().trim().toLowerCase());
        boolean isRainy = Boolean.parseBoolean(scanner.nextLine().trim().toLowerCase());
        boolean isSnowy = Boolean.parseBoolean(scanner.nextLine().trim().toLowerCase());

        boolean result = weatherConditionIsValid(isSunny, isRainy, isSnowy);
        System.out.println(String.valueOf(result).toLowerCase());
    }
}',
        10, 13,
        'EASY', 2);


INSERT INTO BYTEMATH.TEST_CASE (INPUT, EXPECTED_OUTPUT, PROBLEM_ID)
VALUES ( 'true
false
false', 'true', 4),
       ( 'false
true
false', 'true', 4),
       ( 'false
false
true', 'true', 4),
       ( 'false
false
false', 'true', 4),
       ( 'true
true
false', 'false', 4),
       ( 'true
false
true', 'false', 4),
       ( 'false
true
true', 'false', 4),
       ( 'true
true
true', 'false', 4);


------------------------------------------------------------------------------------------------------

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
VALUES (5, 'advanced_logical_operators',
        'Advanced Logical Operators', 'რთული ლოგიკური ოპერაციები',
        'Implement NAND, NOR, and XOR logical operations.', 'დააიმპლემენტირეთ NAND, NOR და XOR ლოგიკური ოპერაციები.',
        'Implement a function that takes two boolean inputs and a string representing the operation to perform (NAND, NOR, or XOR). The function should return the result of the specified operation on the input values.',
        'დააიმპლემენტირეთ ფუნქცია, რომელიც იღებს ორ ბულეანის ტიპის ცვლადს და სტრინგს, რომელიც შეესაბამება შესასრულებელ ოპერაციას (NAND, NOR, ან XOR). ფუნქციამ უნდა დააბრუნოს მითითებული ოპერაციის შედეგი შეტანილ მნიშვნელობებზე.',
        'The function will receive three parameters:
1. boolean a - the first input value
2. boolean b - the second input value
3. String op - the operation to perform ("NAND", "NOR", or "XOR")',
        'ფუნქცია მიიღებს სამ პარამეტრს:
1. boolean a - პირველი ცვლადის მნიშვნელობა
2. boolean b - მეორე ცვლადის მნიშვნელობა
3. String op - შესასრულებელი ოპერაცია ("NAND", "NOR", ან "XOR")',
        'The function should return a boolean value representing the result of the specified operation on a and b.',
        'ფუნქციამ უნდა დააბრუნოს ბულეანის ტიპის მნიშვნელობა, რომელიც წარმოადგენს მითითებული ოპერაციის შედეგს a და b ცვლადებზე.',
        'Input 1:
true false NAND

Output 1:
true

Input 2:
true true XOR

Output 2:
false

Input 3:
false false NOR

Output 3:
true',
        'შეტანა 1:
true false NAND

გამოტანა 1:
true

შეტანა 2:
true true XOR

გამოტანა 2:
false

შეტანა 3:
false false NOR

გამოტანა 3:
true',
        'NAND (NOT AND) is true if at least one input is false.
NOR (NOT OR) is true only if both inputs are false.
XOR (Exclusive OR) is true if the inputs are different.',
        'NAND არის ჭეშმარიტი, თუ ერთი ცვლადი მაინც არის მცდარი.
NOR არის ჭეშმარიტი მხოლოდ მაშინ, თუ ორივე ცვლადი არის მცდარი.
XOR (გამომრიცხავი ან) არის ჭეშმარიტი, თუ ცვლადები განსხვავებულია.',
        'def logical_operation(a: bool, b: bool, op: str) -> bool:
    # Your code here
    pass

# DO NOT MODIFY BELOW THIS LINE

if __name__ == "__main__":
    a = input().strip().lower() == "true"
    b = input().strip().lower() == "true"
    op = input().strip().upper()

    result = logical_operation(a, b, op)
    print(str(result).lower())',
        'def logical_operation(a: bool, b: bool, op: str) -> bool:
    # თქვენი კოდი აქ
    pass

# არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

if __name__ == "__main__":
    a = input().strip().lower() == "true"
    b = input().strip().lower() == "true"
    op = input().strip().upper()

    result = logical_operation(a, b, op)
    print(str(result).lower())',
        'import java.util.Scanner;

public class Solution {
    public static boolean logicalOperation(boolean a, boolean b, String op) {
        // Your code here
        return false;
    }

    // DO NOT MODIFY BELOW THIS LINE

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean a = Boolean.parseBoolean(scanner.nextLine().trim().toLowerCase());
        boolean b = Boolean.parseBoolean(scanner.nextLine().trim().toLowerCase());
        String op = scanner.nextLine().trim().toUpperCase();

        boolean result = logicalOperation(a, b, op);
        System.out.println(String.valueOf(result).toLowerCase());
    }
}',
        'import java.util.Scanner;

public class Solution {
    public static boolean logicalOperation(boolean a, boolean b, String op) {
        // თქვენი კოდი აქ
        return false;
    }

    // არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean a = Boolean.parseBoolean(scanner.nextLine().trim().toLowerCase());
        boolean b = Boolean.parseBoolean(scanner.nextLine().trim().toLowerCase());
        String op = scanner.nextLine().trim().toUpperCase();

        boolean result = logicalOperation(a, b, op);
        System.out.println(String.valueOf(result).toLowerCase());
    }
}',
        10, 13,
        'MEDIUM', 2);


INSERT INTO BYTEMATH.TEST_CASE (INPUT, EXPECTED_OUTPUT, PROBLEM_ID)
VALUES ('true
true
NAND', 'false', 5),
       ('true
false
NAND', 'true', 5),
       ('false
true
NAND', 'true', 5),
       ('false
false
NAND', 'true', 5),
       ('true
true
NOR', 'false', 5),
       ('true
false
NOR', 'false', 5),
       ('false
true
NOR', 'false', 5),
       ('false
false
NOR', 'true', 5),
       ('true
true
XOR', 'false', 5),
       ('true
false
XOR', 'true', 5);


------------------------------------------------------------------------------------------------------


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
VALUES (6, 'expression_evaluator',
        'Expression Evaluator', 'გამოსახულების გამომთვლელი',
        'Implement a function to evaluate complex logical expressions with multiple operators and nested parentheses.', 'დააიმპლემენტირეთ ფუნქცია რთული ლოგიკური გამოსახულებების შედეგის გამოსათვლელად მრავალი ოპერატორით და ჩადგმული ფრჩხილებით.',
        'Implement a function that takes a string representing a complex logical expression and evaluates it. The expression can contain boolean values (True, False), logical operators (AND, OR, NAND, NOR, XOR), and nested parentheses.',
        'დააიმპლემენტირეთ ფუნქცია, რომელიც იღებს სტრინგს, რომელიც წარმოადგენს რთულ ლოგიკურ გამოსახულებას, შემდეგ კი გამოითვლის მის შედეგს. გამოსახულება შეიძლება შეიცავდეს ლოგიკურ მნიშვნელობებს (True, False), ლოგიკურ ოპერატორებს (AND, OR, NAND, NOR, XOR) და ჩადგმულ ფრჩხილებს.',
        'The function will receive a single parameter:
String expression - a string representing the logical expression to evaluate.

The expression will follow these rules:
1. Boolean values are represented as "True" or "False".
2. Operators are "AND", "OR", "NAND", "NOR", "XOR".
3. Parentheses are used to group sub-expressions.
4. There will always be spaces between operands and operators.
5. The expression will be well-formed (balanced parentheses and correct syntax).',
        'ფუნქცია მიიღებს ერთ პარამეტრს: სტრინგი, რომელიც წარმოადგენს გამოსათვლელ ლოგიკურ გამოსახულებას.

გამოსახულებაში დაცული იქნება შემდეგი წესები:
1. ლოგიკური მნიშვნელობები იქნება ამ სიიდან: "True" ან "False".
2. ოპერატორები წარმოდგენილი იქნება ამ სიიდან: "AND", "OR", "NAND", "NOR", "XOR".
3. ფრჩხილები გამოიყენება ქვეგამოსახულებების დასაჯგუფებლად.
4. ყოველთვის იქნება გამოტოვება ოპერანდებსა და ოპერატორებს შორის.
5. გამოსახულება იქნება კარგად ფორმირებული (დაბალანსებული ფრჩხილები და სწორი სინტაქსი).',
        'The function should return a boolean value representing the result of evaluating the entire expression.',
        'ფუნქციამ უნდა დააბრუნოს ლოგიკური მნიშვნელობა, რომელიც წარმოადგენს მთლიანი გამოსახულების გამოთვლის შედეგს.',
        'Input 1:
(((True AND False) NAND True) XOR True)

Output 1:
false

Input 2:
(True OR False) AND (False NOR (True XOR False))

Output 2:
false

Input 3:
True XOR ((False AND True) OR (True NAND False))

Output 3:
false',
        'შეტანა 1:
(((True AND False) NAND True) XOR True)

გამოტანა 1:
false

შეტანა 2:
(True OR False) AND (False NOR (True XOR False))

გამოტანა 2:
false

შეტანა 3:
True XOR ((False AND True) OR (True NAND False))

გამოტანა 3:
false',
        'Operators have equal precedence and are evaluated from left to right, unless modified by parentheses.
You may assume that the input expression is always well-formed and contains only the specified operators and boolean values.',
        'ოპერატორებს აქვთ თანაბარი წონა და გამოითვლებიან რიგ-რიგობით მარცხნიდან მარჯვნივ, იმ შემთხვევაში თუ პრიორიტეტი არ არის დაცული ფრჩხილების გამოყენებით.
შეგიძლიათ ჩათვალოთ, რომ შეტანილი გამოსახულება ყოველთვის კარგად ფორმირებულია და შეიცავს მხოლოდ მითითებულ ოპერატორებსა და ლოგიკურ მნიშვნელობებს.',
        'def evaluate_expression(expression: str) -> bool:
    # Your code here
    pass

# DO NOT MODIFY BELOW THIS LINE

if __name__ == "__main__":
    expression = input().strip()
    result = evaluate_expression(expression)
    print(str(result).lower())',
        'def evaluate_expression(expression: str) -> bool:
    # თქვენი კოდი აქ
    pass

# არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

if __name__ == "__main__":
    expression = input().strip()
    result = evaluate_expression(expression)
    print(str(result).lower())',
        'import java.util.Scanner;

public class Solution {
    public static boolean evaluateExpression(String expression) {
        // Your code here
        return false;
    }

    // DO NOT MODIFY BELOW THIS LINE

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String expression = scanner.nextLine().trim();
        boolean result = evaluateExpression(expression);
        System.out.println(String.valueOf(result).toLowerCase());
    }
}',
        'import java.util.Scanner;

public class Solution {
    public static boolean evaluateExpression(String expression) {
        // თქვენი კოდი აქ
        return false;
    }

    // არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String expression = scanner.nextLine().trim();
        boolean result = evaluateExpression(expression);
        System.out.println(String.valueOf(result).toLowerCase());
    }
}',
        7, 10,
        'HARD', 2);


INSERT INTO BYTEMATH.TEST_CASE (INPUT, EXPECTED_OUTPUT, PROBLEM_ID)
VALUES ('(((True AND False) NAND True) XOR True)', 'false', 6),
       ('(True OR False) AND (False NOR (True XOR False))', 'false', 6),
       ('True XOR ((False AND True) OR (True NAND False))', 'false', 6),
       ('(True AND False) OR (True XOR False)', 'true', 6),
       ('((True NAND False) AND (False NOR True)) XOR (False OR True)', 'true', 6),
       ('True AND True AND True AND False', 'false', 6),
       ('False OR False OR True OR False', 'true', 6),
       ('(True XOR False) NAND (False AND True)', 'true', 6),
       ('((True OR False) AND (True NAND True)) XOR (False NOR False)', 'true', 6),
       ('(((True XOR False) AND (False OR True)) NAND ((False AND True) OR (True XOR False))) XOR (True AND False)', 'false', 6);
