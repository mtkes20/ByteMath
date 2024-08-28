import {ProblemType} from "../../../../types/ProblemType";

export const countEdgesProblem: ProblemType = {
    id: 'count_edges_simple',
    functionNameForPython: "count_edges",
    functionNameForJava: "countEdges",
    title: "Simple Edge Counter",
    description: "Count the number of edges in an unweighted graph.",
    task: "Implement a function that takes an unweighted graph as input and returns the total number of edges.",
    inputFormat: `
- The first line contains an integer N, the number of edges in the graph.
- The next N lines each contain two space-separated strings u and v, representing an edge between nodes u and v.
    `,
    outputFormat: "An integer representing the total number of edges in the graph.",
    example: `
**Input:**
3
A B
B C
C A

**Output:** 3

Explanation: The graph has 3 edges: (A, B), (B, C), and (C, A).
    `,
    note: "Self-loops and multiple edges between the same pair of nodes should be counted separately.",
    pythonTemplate: `
def count_edges(edges):
    # Your code here
    return 0

# DO NOT MODIFY BELOW THIS LINE

if __name__ == '__main__':
    n = int(input().strip())
    edges = []
    for _ in range(n):
        u, v = input().strip().split()
        edges.append((u, v))
    
    result = count_edges(edges)
    print(result)
    `,
    javaTemplate: `
import java.io.*;
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
}
    `,
    testCases: [
        {
            input: `3
A B
B C
C A`,
            expectedOutput: 3
        },
        {
            input: `4
X Y
Y Z
Z X
X X`,
            expectedOutput: 4
        },
        {
            input: `5
P Q
Q R
R S
S T
T P`,
            expectedOutput: 5
        },
        {
            input: `2
M N
N M`,
            expectedOutput: 2
        },
        {
            input: `0`,
            expectedOutput: 0
        }
    ],
    lockedLines: {
        python: 10,
        java: 15
    }
};
