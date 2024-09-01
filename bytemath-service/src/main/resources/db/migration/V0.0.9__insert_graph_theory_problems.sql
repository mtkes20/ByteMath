INSERT INTO BYTEMATH.PROBLEM (ID, IDENTIFIER, TITLE, DESCRIPTION, TASK, INPUT_FORMAT, OUTPUT_FORMAT,
                              EXAMPLE, NOTE, PYTHON_TEMPLATE, JAVA_TEMPLATE, PYTHON, JAVA,
                              DIFFICULTY, LANGUAGE, COURSE_ID)
VALUES (1,
        'count_edges_simple',
        'Simple Edge Counter',
        'Count the number of edges in an unweighted graph.',
        'Implement a function that takes an unweighted graph as input and returns the total number of edges.',
        '- The first line contains an integer N, the number of edges in the graph.
- The next N lines each contain two space-separated strings u and v, representing an edge between nodes u and v.',
        'An integer representing the total number of edges in the graph.',
        '**Input:**
3
A B
B C
C A

**Output:** 3

Explanation: The graph has 3 edges: (A, B), (B, C), and (C, A).',
        'Self-loops and multiple edges between the same pair of nodes should be counted separately.',
        'def count_edges(edges):
    # Your code here
    return 0

# DO NOT MODIFY BELOW THIS LINE

if __name__ == ''__main__'':
    n = int(input().strip())
    edges = []
    for _ in range(n):
        u, v = input().strip().split()
        edges.append((u, v))

    result = count_edges(edges)
    print(result)',
        'import java.io.*;
import java.util.*;

public class Solution {

    public static int countEdges(List<String[]> edges) {
        // Your code here
        return 0;
    }

    // DO NOT MODIFY BELOW THIS LINE

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine().trim());
        List<String[]> edges = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            edges.add(scanner.nextLine().trim().split(" "));
        }

        int result = countEdges(edges);
        System.out.println(result);
    }
}',
        10,
        15,
        'EASY',
        'ENG',
        3);

INSERT INTO BYTEMATH.TEST_CASE (ID, INPUT, EXPECTED_OUTPUT, PROBLEM_ID)
VALUES (1, '3
A B
B C
C A', '3', 1),
       (2, '4
X Y
Y Z
Z X
X X', '4', 1),
       (3, '5
P Q
Q R
R S
S T
T P', '5', 1),
       (4, '2
M N
N M', '2', 1),
       (5, '0', '0', 1);


INSERT INTO BYTEMATH.PROBLEM (ID, IDENTIFIER, TITLE, DESCRIPTION, TASK, INPUT_FORMAT, OUTPUT_FORMAT,
                              EXAMPLE, NOTE, PYTHON_TEMPLATE, JAVA_TEMPLATE, PYTHON, JAVA,
                              DIFFICULTY, LANGUAGE, COURSE_ID)
VALUES (2,
        'count_edges_simple',
        'მარტივი წიბოების მთვლელი',
        'დათვალეთ წიბოების რაოდენობა შეუწონავ გრაფში.',
        'დაწერეთ ფუნქცია, რომელიც იღებს შეუწონავ გრაფს და აბრუნებს წიბოების საერთო რაოდენობას.',
        '- პირველი ხაზი შეიცავს მთელ რიცხვს N, გრაფში წიბოების რაოდენობას.
- შემდეგი N ხაზი თითოეული შეიცავს ორ სივრცით გამოყოფილ სტრიქონს u და v, რომლებიც წარმოადგენენ წიბოს წვეროებს u და v შორის.',
        'მთელი რიცხვი, რომელიც წარმოადგენს გრაფში წიბოების საერთო რაოდენობას.',
        '**შესატანი:**
3
A B
B C
C A

**გამოსატანი:** 3

ახსნა: გრაფს აქვს 3 წიბო: (A, B), (B, C) და (C, A).',
        'თვითმარყუჟები და მრავალჯერადი წიბოები ერთსა და იმავე წყვილ წვეროებს შორის უნდა დაითვალოს ცალ-ცალკე.',
        'def count_edges(edges):
    # თქვენი კოდი აქ
    return 0

# არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

if __name__ == ''__main__'':
    n = int(input().strip())
    edges = []
    for _ in range(n):
        u, v = input().strip().split()
        edges.append((u, v))

    result = count_edges(edges)
    print(result)',
        'import java.io.*;
import java.util.*;

public class Solution {

    public static int countEdges(List<String[]> edges) {
        // თქვენი კოდი აქ
        return 0;
    }

    // არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine().trim());
        List<String[]> edges = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            edges.add(scanner.nextLine().trim().split(" "));
        }

        int result = countEdges(edges);
        System.out.println(result);
    }
}',
        10,
        15,
        'EASY',
        'GEO',
        3);

INSERT INTO BYTEMATH.TEST_CASE (ID, INPUT, EXPECTED_OUTPUT, PROBLEM_ID)
VALUES (6, '3
A B
B C
C A', '3', 2),
       (7, '4
X Y
Y Z
Z X
X X', '4', 2),
       (8, '5
P Q
Q R
R S
S T
T P', '5', 2),
       (9, '2
M N
N M', '2', 2),
       (10, '0', '0', 2);
