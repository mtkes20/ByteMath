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
VALUES (1, 'count_edges_simple',
        'Simple Edge Counter', 'მარტივი წიბოების მთვლელი',
        'Count the number of edges in an unweighted graph.', 'დათვალეთ წიბოების რაოდენობა შეუწონავ გრაფში.',
        'Implement a function that takes an unweighted graph as input and returns the total number of edges.',
        'დაწერეთ ფუნქცია, რომელიც იღებს შეუწონავ გრაფს და აბრუნებს წიბოების საერთო რაოდენობას.',
        '- The first line contains an integer N, the number of edges in the graph.
    - The next N lines each contain two space-separated strings u and v, representing an edge between nodes u and v.',
        '- პირველი ხაზი შეიცავს მთელ რიცხვს N, გრაფში წიბოების რაოდენობას.
    - შემდეგი N ხაზი თითოეული შეიცავს ორ სივრცით გამოყოფილ სტრიქონს u და v, რომლებიც წარმოადგენენ წიბოს წვეროებს u და v შორის.',
        'An integer representing the total number of edges in the graph.',
        'მთელი რიცხვი, რომელიც წარმოადგენს გრაფში წიბოების საერთო რაოდენობას.',
        '**Input:**
    3
    A B
    B C
    C A

    **Output:** 3

    Explanation: The graph has 3 edges: (A, B), (B, C), and (C, A).',
        '**შესატანი:**
    3
    A B
    B C
    C A

    **გამოსატანი:** 3

    ახსნა: გრაფს აქვს 3 წიბო: (A, B), (B, C) და (C, A).',
        'Self-loops and multiple edges between the same pair of nodes should be counted separately.',
        'თვითმარყუჟები და მრავალჯერადი წიბოები ერთსა და იმავე წყვილ წვეროებს შორის უნდა დაითვალოს ცალ-ცალკე.',
        'def count_edges(edges):
        # Your code here
        return 0

    # DO NOT MODIFY BELOW THIS LINE

    if __name__ == "__main__":
        n = int(input().strip())
        edges = []
        for _ in range(n):
            u, v = input().strip().split()
            edges.append((u, v))

        result = count_edges(edges)
        print(result)',
        'def count_edges(edges):
        # თქვენი კოდი აქ
        return 0

    # არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

    if __name__ == "__main__":
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
        10, 15,
        'EASY', 3);


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