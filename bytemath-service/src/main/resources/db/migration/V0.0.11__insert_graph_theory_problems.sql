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
VALUES (8, 'regular_graph',
        'Regular Graph', 'რეგულარული გრაფი',
        'Check if a given graph is regular.', 'შეამოწმეთ არის თუ არა მოცემული გრაფი რეგულარული.',
        'Implement a function that takes a graph as input and determines if it is regular. A graph is regular if all vertices have the same degree.',
        'დააიმპლემენტირეთ ფუნქცია, რომელიც მიიღებს გრაფს და განსაზღვრავს არის თუ არა ის რეგულარული. გრაფი რეგულარულია, თუ ყველა წვეროს აქვს ერთნაირი ხარისხი.',
        'The function will receive two parameters:
1. An integer n representing the number of vertices in the graph (vertices are numbered from 0 to n-1).
2. A list of edges, where each edge is represented by (u, v) indicating an edge between vertices u and v.',
        'ფუნქცია მიიღებს ორ პარამეტრს:
1. მთელ რიცხვს n, რომელიც წარმოადგენს გრაფში წვეროების რაოდენობას (წვეროები დანომრილია 0-დან n-1-მდე).
2. წიბოების სიას, სადაც თითოეული წიბო წარმოდგენილია, როგორც (u, v), რაც აღნიშნავს წიბოს წვერო u-სა და წვერო v-ს შორის.',
        'The function should return a boolean value: True if the graph is regular, and False otherwise.',
        'ფუნქციამ უნდა დააბრუნოს ლოგიკური მნიშვნელობა: True თუ გრაფი რეგულარულია, და False წინააღმდეგ შემთხვევაში.',
        'Input 1:
n = 3
edges = [(0, 1), (1, 2), (2, 0)]

Output 1:
True

Input 2:
n = 4
edges = [(0, 1), (0, 2), (1, 2), (2, 3)]

Output 2:
False',
        'შესატანი 1:
n = 3
edges = [(0, 1), (1, 2), (2, 0)]

გამოსატანი 1:
True

შესატანი 2:
n = 4
edges = [(0, 1), (0, 2), (1, 2), (2, 3)]

გამოსატანი 2:
False',
        'A graph with no edges (where the edge list is empty) is considered regular.',
        'გრაფი წიბოების გარეშე (სადაც წიბოების სია ცარიელია) ითვლება რეგულარულად.',
        'def is_regular_graph(n: int, edges: list[tuple[int, int]]) -> bool:
    # Your code here
    pass

# DO NOT MODIFY BELOW THIS LINE

if __name__ == "__main__":
    n = int(input().strip())
    m = int(input().strip())
    edges = []
    for _ in range(m):
        u, v = map(int, input().strip().split())
        edges.append((u, v))
    result = is_regular_graph(n, edges)
    print(str(result).lower())',
        'def is_regular_graph(n: int, edges: list[tuple[int, int]]) -> bool:
    # თქვენი კოდი აქ
    pass

# არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

if __name__ == "__main__":
    n = int(input().strip())
    m = int(input().strip())
    edges = []
    for _ in range(m):
        u, v = map(int, input().strip().split())
        edges.append((u, v))
    result = is_regular_graph(n, edges)
    print(str(result).lower())',
        'import java.util.*;

public class Solution {
    public static boolean isRegularGraph(int n, List<int[]> edges) {
        // Your code here
        return false;
    }

    // DO NOT MODIFY BELOW THIS LINE

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine().trim());
        int m = Integer.parseInt(scanner.nextLine().trim());
        List<int[]> edges = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            String[] parts = scanner.nextLine().trim().split("\\s+");
            int u = Integer.parseInt(parts[0]);
            int v = Integer.parseInt(parts[1]);
            edges.add(new int[]{u, v});
        }
        boolean result = isRegularGraph(n, edges);
        System.out.println(String.valueOf(result).toLowerCase());
    }
}',
        'import java.util.*;

public class Solution {
    public static boolean isRegularGraph(int n, List<int[]> edges) {
        // თქვენი კოდი აქ
        return false;
    }

    // არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine().trim());
        int m = Integer.parseInt(scanner.nextLine().trim());
        List<int[]> edges = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            String[] parts = scanner.nextLine().trim().split("\\s+");
            int u = Integer.parseInt(parts[0]);
            int v = Integer.parseInt(parts[1]);
            edges.add(new int[]{u, v});
        }
        boolean result = isRegularGraph(n, edges);
        System.out.println(String.valueOf(result).toLowerCase());
    }
}',
        12, 18,
        'MEDIUM', 3);


INSERT INTO BYTEMATH.TEST_CASE (INPUT, EXPECTED_OUTPUT, PROBLEM_ID)
VALUES ('3
3
0 1
1 2
2 0', 'true',8),
       ('4
4
0 1
0 2
1 2
2 3', 'false',8),
       ('3
0', 'true',8),
       ( '4
4
0 1
1 2
2 3
3 0', 'true',8),
       ( '5
5
0 1
1 2
2 3
3 4
4 0', 'true',8),
       ( '4
5
0 1
0 2
1 2
1 3
2 3', 'false',8),
       ('3
3
0 0
1 1
2 2', 'true',8),
       ( '4
6
0 1
0 2
0 3
1 2
1 3
2 3', 'true',8);


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
VALUES (7, 'count_nodes',
        'Count Nodes', 'წვეროების დათვლა',
        'Count the number of nodes in a graph given its edges.', 'დათვალეთ წვეროების რაოდენობა გრაფში მოცემული წიბოების მიხედვით.',
        'Implement a function that takes a list of edges as input and returns the total number of unique nodes in the graph. Each node is guaranteed to have at least one edge connected to it.',
        'დააიმპლემენტირეთ ფუნქცია, რომელიც იღებს წიბოების სიას და აბრუნებს უნიკალური წვეროების საერთო რაოდენობას გრაფში. ჩათვალეთ, რომ თითოეულ წვეროს აქვს მინიმუმ ერთი მასთან დაკავშირებული წიბო.',
        'The function will receive one parameter:
A list of edges, where each edge is represented as (u, v) indicating an edge between nodes u and v.',
        'ფუნქცია მიიღებს ერთ პარამეტრს:
წიბოების სია, სადაც თითოეული წიბო წარმოდგენილია, როგორც (u, v), რაც მიუთითებს წიბოზე u და v წვეროებს შორის.',
        'The function should return an integer representing the total number of unique nodes in the graph.',
        'ფუნქციამ უნდა დააბრუნოს მთელი რიცხვი, რომელიც წარმოადგენს უნიკალური წვეროების საერთო რაოდენობას გრაფში.',
        'Input:
[(0, 1), (0, 2), (1, 2), (2, 3)]

Output:
4

Input:
[(0, 1), (1, 2), (2, 3), (3, 4), (4, 0)]

Output:
5',
        'შესატანი:
[(0, 1), (0, 2), (1, 2), (2, 3)]

გამოსატანი:
4',
        'Every node will have at least one edge connected to it.',
        'ყველა წვეროს აქვს მინიმუმ ერთი მასთან დაკავშირებული წიბო.',
        'def count_nodes(edges: list[tuple[int, int]]) -> int:
    # Your code here
    pass

# DO NOT MODIFY BELOW THIS LINE

if __name__ == "__main__":
    m = int(input().strip())
    edges = []
    for _ in range(m):
        u, v = map(int, input().strip().split())
        edges.append((u, v))
    result = count_nodes(edges)
    print(result)',
        'def count_nodes(edges: list[tuple[int, int]]) -> int:
    # თქვენი კოდი აქ
    pass

# არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

if __name__ == "__main__":
    m = int(input().strip())
    edges = []
    for _ in range(m):
        u, v = map(int, input().strip().split())
        edges.append((u, v))
    result = count_nodes(edges)
    print(result)',
        'import java.util.*;

public class Solution {
    public static int countNodes(List<int[]> edges) {
        // Your code here
        return 0;
    }

    // DO NOT MODIFY BELOW THIS LINE

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int m = Integer.parseInt(scanner.nextLine().trim());
        List<int[]> edges = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            String[] parts = scanner.nextLine().trim().split("\\s+");
            int u = Integer.parseInt(parts[0]);
            int v = Integer.parseInt(parts[1]);
            edges.add(new int[]{u, v});
        }
        int result = countNodes(edges);
        System.out.println(result);
    }
}',
        'import java.util.*;

public class Solution {
    public static int countNodes(List<int[]> edges) {
        // თქვენი კოდი აქ
        return 0;
    }

    // არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int m = Integer.parseInt(scanner.nextLine().trim());
        List<int[]> edges = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            String[] parts = scanner.nextLine().trim().split("\\s+");
            int u = Integer.parseInt(parts[0]);
            int v = Integer.parseInt(parts[1]);
            edges.add(new int[]{u, v});
        }
        int result = countNodes(edges);
        System.out.println(result);
    }
}',
    11, 17,
        'EASY', 3);


INSERT INTO BYTEMATH.TEST_CASE (INPUT, EXPECTED_OUTPUT, PROBLEM_ID)
VALUES ('4
0 1
0 2
1 2
2 3', '4', 7),
       ('5
0 1
1 2
2 3
3 4
4 0', '5', 7),
       ('3
1 2
2 3
3 1', '3', 7),
       ('6
1 2
2 3
3 4
4 5
5 6
6 1', '6', 7),
       ('7
0 1
1 2
2 3
3 4
4 5
5 6
6 0', '7', 7),
       ('1
10 20', '2', 7);


-----------------


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
VALUES (9, 'shortest_path_bfs',
        'Shortest Path - BFS', 'უმოკლესი გზა - BFS',
        'Find the unique shortest path between two nodes in a graph using Breadth-First Search.', 'იპოვეთ უნიკალური უმოკლესი გზა ორ წვეროს შორის გრაფში სიგანეში ძებნის გამოყენებით.',
        'Implement a function that finds the unique shortest path between a start node and an end node in a graph using Breadth-First Search. Return the path as a list of nodes, including both the start and end nodes.',
        'დააიმპლემენტირეთ ფუნქცია, რომელიც იპოვის უნიკალურ უმოკლეს გზას საწყის და საბოლოო წვეროებს შორის გრაფში სიგანეში ძებნის გამოყენებით. დააბრუნეთ გზა წვეროების სიის სახით, საწყისი და საბოლოო წვეროების ჩათვლით.',
        'The function will receive four parameters:
1. n - representing the number of nodes in the graph (nodes are numbered from 0 to n-1).
2. A list of edges, where each edge is represented as (u, v) indicating an edge between nodes u and v.
3. start - Integer representing the starting node.
4. end - Integer representing the destination node.',
        'ფუნქცია მიიღებს ოთხ პარამეტრს:
1. მთელ რიცხვ n-ს, რომელიც წარმოადგენს გრაფში წვეროების რაოდენობას (წვეროები დანომრილია 0-დან n-1-მდე).
2. წიბოების სიას, სადაც თითოეული წიბო წარმოდგენილია, როგორც (u, v), რაც მიუთითებს წიბოზე u და v წვეროებს შორის.
3. მთელ რიცხვს start, რომელიც წარმოადგენს საწყის წვეროს.
4. მთელ რიცხვს end, რომელიც წარმოადგენს საბოლოო წვეროს.',
        'The function should return a list of integers representing the unique shortest path from the start node to the end node. If no path exists, return an empty list.',
        'ფუნქციამ უნდა დააბრუნოს მთელი რიცხვების სია, რომელიც წარმოადგენს უნიკალურ უმოკლეს გზას საწყისი წვეროდან საბოლოო წვერომდე. თუ გზა არ არსებობს, დააბრუნეთ ცარიელი სია.',
        'Input:
n = 5
edges = [(0, 1), (0, 2), (1, 3), (2, 4), (3, 4)]
start = 0
end = 4

Output:
[0, 2, 4]

Input:
n = 4
edges = [(0, 1), (1, 2), (2, 3)]
start = 0
end = 3

Output:
[0, 1, 2, 3]',
        'შესატანი:
n = 5
edges = [(0, 1), (0, 2), (1, 3), (2, 4), (3, 4)]
start = 0
end = 4

გამოსატანი:
[0, 2, 4]

შესატანი:
n = 4
edges = [(0, 1), (1, 2), (2, 3)]
start = 0
end = 3

გამოსატანი:
[0, 1, 2, 3]',
        'The graph is undirected.
There is always a unique shortest path between the start and end nodes.',
        'გრაფი არის არამიმართული.
ყოველთვის არსებობს უნიკალური უმოკლესი გზა საწყის და საბოლოო წვეროებს შორის.',
        'from typing import List, Tuple

def shortest_path_bfs(n: int, edges: List[Tuple[int, int]], start: int, end: int) -> List[int]:
    # Your code here
    pass

# DO NOT MODIFY BELOW THIS LINE

if __name__ == "__main__":
    n = int(input().strip())
    m = int(input().strip())
    edges = []
    for _ in range(m):
        u, v = map(int, input().strip().split())
        edges.append((u, v))
    start = int(input().strip())
    end = int(input().strip())
    result = shortest_path_bfs(n, edges, start, end)
    print(" ".join(map(str, result)))',
        'from typing import List, Tuple

def shortest_path_bfs(n: int, edges: List[Tuple[int, int]], start: int, end: int) -> List[int]:
    # თქვენი კოდი აქ
    pass

# არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

if __name__ == "__main__":
    n = int(input().strip())
    m = int(input().strip())
    edges = []
    for _ in range(m):
        u, v = map(int, input().strip().split())
        edges.append((u, v))
    start = int(input().strip())
    end = int(input().strip())
    result = shortest_path_bfs(n, edges, start, end)
    print(" ".join(map(str, result)))',
        'import java.util.*;

public class Solution {
    public static List<Integer> shortestPathBFS(int n, List<int[]> edges, int start, int end) {
        // Your code here
        return new ArrayList<>();
    }

    // DO NOT MODIFY BELOW THIS LINE

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine().trim());
        int m = Integer.parseInt(scanner.nextLine().trim());
        List<int[]> edges = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            String[] parts = scanner.nextLine().trim().split("\\s+");
            int u = Integer.parseInt(parts[0]);
            int v = Integer.parseInt(parts[1]);
            edges.add(new int[]{u, v});
        }
        int start = Integer.parseInt(scanner.nextLine().trim());
        int end = Integer.parseInt(scanner.nextLine().trim());
        List<Integer> result = shortestPathBFS(n, edges, start, end);
        System.out.println(String.join(" ", result.stream().map(String::valueOf).toArray(String[]::new)));
    }
}',
        'import java.util.*;

public class Solution {
    public static List<Integer> shortestPathBFS(int n, List<int[]> edges, int start, int end) {
        // თქვენი კოდი აქ
        return new ArrayList<>();
    }

    // არ შეცვალოთ კოდი ამ ხაზის ქვემოთ

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine().trim());
        int m = Integer.parseInt(scanner.nextLine().trim());
        List<int[]> edges = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            String[] parts = scanner.nextLine().trim().split("\\s+");
            int u = Integer.parseInt(parts[0]);
            int v = Integer.parseInt(parts[1]);
            edges.add(new int[]{u, v});
        }
        int start = Integer.parseInt(scanner.nextLine().trim());
        int end = Integer.parseInt(scanner.nextLine().trim());
        List<Integer> result = shortestPathBFS(n, edges, start, end);
        System.out.println(String.join(" ", result.stream().map(String::valueOf).toArray(String[]::new)));
    }
}',
        14, 20,
        'HARD', 3);


INSERT INTO BYTEMATH.TEST_CASE (INPUT, EXPECTED_OUTPUT, PROBLEM_ID)
VALUES ('5
5
0 1
0 2
1 3
2 4
3 4
0
4', '0 2 4', 9),
       ('4
3
0 1
1 2
2 3
0
3', '0 1 2 3', 9),
       ('6
5
0 1
1 2
2 3
3 4
4 5
0
5', '0 1 2 3 4 5', 9),
       ('7
6
0 1
1 2
2 3
3 4
4 5
5 6
0
6', '0 1 2 3 4 5 6', 9),
       ('5
4
0 1
1 2
2 3
3 4
0
4', '0 1 2 3 4', 9),
       ('8
7
0 1
1 2
2 3
3 4
4 5
5 6
6 7
0
7', '0 1 2 3 4 5 6 7', 9),
       ('7
8
0 1
1 2
2 3
3 4
4 5
5 6
0 6
1 6
0
6', '0 6', 9),
       ('9
10
0 1
1 2
2 3
3 4
4 5
5 6
6 7
7 8
0 8
1 8
0
8', '0 8', 9);
