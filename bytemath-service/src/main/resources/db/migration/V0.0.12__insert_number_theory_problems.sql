--- Inserting easy ranked number theory problems
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
VALUES (10, 'calculate_gcd',
        'Calculate the Greatest Common Divisor', 'უდიდესი საერთო გამყოფის გამოთვლა',
        'Implement the Euclidean algorithm to find the Greatest Common Divisor (GCD) of two positive integers.', 'განახორციელეთ ევკლიდეს ალგორითმი ორი დადებითი მთელი რიცხვის უდიდესი საერთო გამყოფის (GCD) მოსაძებნად.',
        'Write a function that takes two positive integers as input and returns their Greatest Common Divisor using the Euclidean algorithm.',
        'დაწერეთ ფუნქცია, რომელიც იღებს ორ დადებით მთელ რიცხვს და აბრუნებს მათ უდიდეს საერთო გამყოფს ევკლიდეს ალგორითმის გამოყენებით.',
        'Two positive integers a and b, separated by a space.',
        'ორი დადებითი მთელი რიცხვი a და b, გამოყოფილი სფეისით.',
        'A single integer representing the Greatest Common Divisor of a and b.',
        'ერთი მთელი რიცხვი, რომელიც წარმოადგენს a-ს და b-ს უდიდეს საერთო გამყოფს.',
        '**Input:**
48 18

**Output:**
6

Explanation:
The Greatest Common Divisor of 48 and 18 is 6.
We can verify this:
48 = 6 * 8
18 = 6 * 3
6 is the largest number that divides both 48 and 18 without a remainder.',
        '**შესატანი:**
48 18

**გამოსატანი:**
6

ახსნა:
48-ისა და 18-ის უდიდესი საერთო გამყოფია 6.
ჩვენ შეგვიძლია შევამოწმოთ ეს:
48 = 6 * 8
18 = 6 * 3
6 არის უდიდესი რიცხვი, რომელიც ყოფს ორივეს 48-ს და 18-ს ნაშთის გარეშე.',
        'The input will always be two positive integers. Implement the Euclidean algorithm: repeatedly replace the larger number with the remainder of the larger number divided by the smaller number, until the remainder is zero.',
        'ინფუთი ყოველთვის იქნება ორი დადებითი მთელი რიცხვი. განახორციელეთ ევკლიდეს ალგორითმი: განმეორებით ჩაანაცვლეთ უდიდესი რიცხვი უდიდესი რიცხვის უმცირეს რიცხვზე გაყოფის ნაშთით, სანამ ნაშთი არ გახდება ნული.',
        'def calculate_gcd(a, b):
    # Your code here
    return 0

# DO NOT MODIFY BELOW THIS LINE

if __name__ == "__main__":
    a, b = map(int, input().split())
    result = calculate_gcd(a, b)
    print(result)',
        'def calculate_gcd(a, b):
    # თქვენი კოდი აქ
    return 0

# არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

if __name__ == "__main__":
    a, b = map(int, input().split())
    result = calculate_gcd(a, b)
    print(result)',
        'import java.io.*;
import java.util.*;

public class Solution {

    public static int calculateGCD(int a, int b) {
        // Your code here
        return 0;
    }

    // DO NOT MODIFY BELOW THIS LINE

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int result = calculateGCD(a, b);
        System.out.println(result);
    }
}',
        'import java.io.*;
import java.util.*;

public class Solution {

    public static int calculateGCD(int a, int b) {
        // თქვენი კოდი აქ
        return 0;
    }

    // არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int result = calculateGCD(a, b);
        System.out.println(result);
    }
}',
        6, 10,
        'EASY', 4);


INSERT INTO BYTEMATH.TEST_CASE (INPUT, EXPECTED_OUTPUT, PROBLEM_ID)
VALUES ('48 18', '6', 10),
       ('100 75', '25', 10),
       ('17 23', '1', 10),
       ('225 165', '15', 10),
       ('1024 512', '512', 10);


--- Inserting medium ranked number theory problems

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
VALUES (11, 'modular_exponentiation',
        'Efficient Modular Exponentiation', 'ეფექტური მოდულური ახარისხება',
        'Implement an efficient algorithm to compute (base^exponent) mod modulus for large numbers.', 'განახორციელეთ ეფექტური ალგორითმი დიდი რიცხვებისთვის (ფუძე^ხარისხი) mod მოდული გამოსათვლელად.',
        'Write a function that takes three positive integers as input: base, exponent, and modulus. Return the result of (base^exponent) mod modulus using an efficient method that works for large numbers.',
        'დაწერეთ ფუნქცია, რომელიც იღებს სამ დადებით მთელ რიცხვს: ფუძე, ხარისხი და მოდული. დააბრუნეთ (ფუძე^ხარისხი) mod მოდული-ს შედეგი, გამოიყენეთ ეფექტური მეთოდი, რომელიც მუშაობს დიდი რიცხვებისთვის.',
        'Three positive integers base, exponent, and modulus, separated by spaces.',
        'სამი დადებითი მთელი რიცხვი ფუძე, ხარისხი და მოდული, გამოყოფილი ჰარებით.',
        'A single integer representing (base^exponent) mod modulus.',
        'ერთი მთელი რიცხვი, რომელიც წარმოადგენს (ფუძე^ხარისხი) mod მოდული-ს.',
        '**Input:**
3 7 10

**Output:**
7

Explanation:
3^7 = 2187
2187 mod 10 = 7

Note: This is a small example. Your solution should work efficiently for much larger numbers.',
        '**შესატანი:**
3 7 10

**გამოსატანი:**
7

ახსნა:
3^7 = 2187
2187 mod 10 = 7

შენიშვნა: ეს არის პატარა მაგალითი. თქვენი გადაწყვეტა ეფექტურად უნდა მუშაობდეს გაცილებით დიდი რიცხვებისთვის.',
        'The input numbers can be very large (up to 10^18). A naive implementation of exponentiation followed by modulus will not work. Use the properties of modular arithmetic to perform the calculation efficiently. Research the "exponentiation by squaring" or "binary exponentiation" algorithm for an efficient solution.',
        'შესატანი რიცხვები შეიძლება იყოს ძალიან დიდი (10^18-მდე). ახარისხების ნაივური იმპლემენტაცია, რომელსაც მოჰყვება მოდული, არ იმუშავებს. გამოიყენეთ მოდულური არითმეტიკის თვისებები გამოთვლების ეფექტურად შესასრულებლად. მოიძიეთ "კვადრატით ახარისხების" ან "ორობითი ახარისხების" ალგორითმი ეფექტური გადაწყვეტისთვის.',
        'def modular_exponentiation(base, exponent, modulus):
    # Your code here
    return 0

# DO NOT MODIFY BELOW THIS LINE

if __name__ == "__main__":
    base, exponent, modulus = map(int, input().split())
    result = modular_exponentiation(base, exponent, modulus)
    print(result)',
        'def modular_exponentiation(base, exponent, modulus):
    # თქვენი კოდი აქ
    return 0

# არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

if __name__ == "__main__":
    base, exponent, modulus = map(int, input().split())
    result = modular_exponentiation(base, exponent, modulus)
    print(result)',
        'import java.io.*;
import java.util.*;

public class Solution {

    public static long modularExponentiation(long base, long exponent, long modulus) {
        // Your code here
        return 0;
    }

    // DO NOT MODIFY BELOW THIS LINE

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long base = scanner.nextLong();
        long exponent = scanner.nextLong();
        long modulus = scanner.nextLong();
        long result = modularExponentiation(base, exponent, modulus);
        System.out.println(result);
    }
}',
        'import java.io.*;
import java.util.*;

public class Solution {

    public static long modularExponentiation(long base, long exponent, long modulus) {
        // თქვენი კოდი აქ
        return 0;
    }

    // არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long base = scanner.nextLong();
        long exponent = scanner.nextLong();
        long modulus = scanner.nextLong();
        long result = modularExponentiation(base, exponent, modulus);
        System.out.println(result);
    }
}',
        6, 10,
        'MEDIUM', 4);


INSERT INTO BYTEMATH.TEST_CASE (INPUT, EXPECTED_OUTPUT, PROBLEM_ID)
VALUES ('3 7 10', '7', 11),
       ('2 10 1000', '24', 11),
       ('5 117 19', '1', 11),
       ('3 1000000000 1000000007', '525584', 11),
       ('123456789 987654321 1000000009', '652249174', 11);




