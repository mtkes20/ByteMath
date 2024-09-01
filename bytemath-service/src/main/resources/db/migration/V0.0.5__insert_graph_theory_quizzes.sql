-- GRAPH_THEORY_INTRO

INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (70000, 'GRAPH_THEORY_INTRO', 'Introduction to Graph Theory Quiz', 'შესავალი გრაფთა თეორიაში - ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (70001, 'What are the two main elements that make up a graph?',
        'რა არის ორი მთავარი ელემენტი, რომლისგანაც შედგება გრაფი?', 'SINGLE_CHOICE', 70000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (70002, 'Vertices and edges', 'წვეროები და წიბოები', 70001, TRUE),
       (70003, 'Nodes and lines', 'კვანძები და ხაზები', 70001, FALSE),
       (70004, 'Points and connections', 'წერტილები და კავშირები', 70001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (70005, 'What is the main difference between directed and undirected graphs?',
        'რა არის მთავარი განსხვავება მიმართულ და არამიმართულ გრაფებს შორის?', 'SINGLE_CHOICE', 70000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (70006, 'Directed graphs have more vertices', 'მიმართულ გრაფებს აქვთ მეტი წვერო', 70005, FALSE),
       (70007, 'Undirected graphs have no edges', 'არამიმართულ გრაფებს არ აქვთ წიბოები', 70005, FALSE),
       (70008, 'Directed graphs have edges with direction', 'მიმართულ გრაფებს აქვთ მიმართულების მქონე წიბოები', 70005,
        TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (70009, 'What is the degree of a vertex in an undirected graph?',
        'რა არის წვეროს ხარისხი არამიმართულ გრაფში?', 'SINGLE_CHOICE', 70000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (70010, 'The number of edges connected to it', 'მასთან დაკავშირებული წიბოების რაოდენობა', 70009, TRUE),
       (70011, 'The number of vertices in the graph', 'გრაფში არსებული წვეროების რაოდენობა', 70009, FALSE),
       (70012, 'The sum of all edges in the graph', 'გრაფში არსებული ყველა წიბოს ჯამი', 70009, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (70013, 'What is a cycle in a graph?',
        'რა არის ციკლი გრაფში?', 'SINGLE_CHOICE', 70000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (70014, 'A path that starts and ends at different vertices',
        'გზა, რომელიც იწყება და მთავრდება სხვადასხვა წვეროში', 70013, FALSE),
       (70015, 'A path that starts and ends at the same vertex',
        'გზა, რომელიც იწყება და მთავრდება ერთსა და იმავე წვეროში', 70013, TRUE),
       (70016, 'A path that visits every vertex exactly once', 'გზა, რომელიც გაივლის ყველა წვეროს ზუსტად ერთხელ', 70013,
        FALSE);


---------------------------------------------------------------------------------------------------------------------------------

-- GRAPH_THEORY_DIFFERENT_GRAPHS

INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (80000, 'GRAPH_THEORY_DIFFERENT_GRAPHS', 'Different Kinds of Graphs Quiz', 'სხვადასხვა ტიპის გრაფების ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (80001, 'What is the main characteristic of a weighted graph?',
        'რა არის წონიანი გრაფის მთავარი მახასიათებელი?', 'SINGLE_CHOICE', 80000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (80002, 'It has more vertices than edges', 'მას აქვს მეტი წვერო, ვიდრე წიბო', 80001, FALSE),
       (80003, 'Each edge is assigned a numerical value', 'თითოეულ წიბოს მინიჭებული აქვს რიცხვობრივი მნიშვნელობა',
        80001, TRUE),
       (80004, 'It can only be undirected', 'ის შეიძლება იყოს მხოლოდ არამიმართული', 80001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (80005, 'What defines a planar graph?',
        'რა განსაზღვრავს ბრტყელ გრაფს?', 'SINGLE_CHOICE', 80000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (80006, 'It can be drawn on a flat surface with no crossing edges',
        'ის შეიძლება დაიხატოს ბრტყელ ზედაპირზე წიბოების გადაკვეთის გარეშე', 80005, TRUE),
       (80007, 'It has only straight edges', 'მას აქვს მხოლოდ სწორი წიბოები', 80005, FALSE),
       (80008, 'It must be a complete graph', 'ის აუცილებლად უნდა იყოს სრული გრაფი', 80005, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (80009, 'What is a key feature of a bipartite graph?',
        'რა არის ორნაწილიანი გრაფის მთავარი მახასიათებელი?', 'SINGLE_CHOICE', 80000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (80010, 'It has exactly two vertices', 'მას აქვს ზუსტად ორი წვერო', 80009, FALSE),
       (80011, 'All vertices are connected to each other', 'ყველა წვერო დაკავშირებულია ერთმანეთთან', 80009, FALSE),
       (80012, 'Its vertices can be divided into two disjoint sets with edges only between the sets',
        'მისი წვეროები შეიძლება გაიყოს ორ განცალკევებულ სიმრავლედ, რომლებიდანაც წიბო არ გადის გარეთ', 80009, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (80013, 'What is the defining characteristic of a regular graph?',
        'რა არის რეგულარული გრაფის განმსაზღვრელი მახასიათებელი?', 'SINGLE_CHOICE', 80000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (80014, 'It has an equal number of vertices and edges', 'მას აქვს წვეროებისა და წიბოების თანაბარი რაოდენობა',
        80013, FALSE),
       (80015, 'Every vertex has the same degree', 'ყველა წვეროს აქვს ერთი და იგივე ხარისხი', 80013, TRUE),
       (80016, 'It must be a connected graph', 'ის აუცილებლად უნდა იყოს ბმული გრაფი', 80013, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (80017, 'In a complete graph with 5 vertices, how many edges are there?',
        '5 წვეროს მქონე სრულ გრაფში რამდენი წიბოა?', 'TEXT', 80000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (80018, '10', '10', 80017, TRUE);


---------------------------------------------------------------------------------------------------------------------------------

-- GRAPH_THEORY_GRAPH_TRAVERSALS

INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (90000, 'GRAPH_THEORY_GRAPH_TRAVERSALS', 'Graph Traversals Quiz', 'ძიება გრაფში - ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (90001, 'Which data structure does Breadth-First Search (BFS) typically use to keep track of nodes to visit?',
        'რომელ მონაცემთა სტრუქტურას იყენებს სიგანეში ძებნა (BFS) წვეროების მოსანახულებლად?', 'SINGLE_CHOICE', 90000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (90002, 'Stack', 'სტეკი', 90001, FALSE),
       (90003, 'Queue', 'რიგი', 90001, TRUE),
       (90004, 'Tree', 'ხე', 90001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (90005, 'What is a key characteristic of how Depth-First Search (DFS) explores a graph?',
        'რა არის სიღრმეში ძებნის (DFS) მთავარი მახასიათებელი გრაფის კვლევისას?', 'SINGLE_CHOICE', 90000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (90006, 'It explores all neighbors before moving deeper', 'ის იკვლევს ყველა მეზობელს, სანამ უფრო ღრმად წავა',
        90005, FALSE),
       (90007, 'It always chooses the shortest path', 'ის ყოველთვის ირჩევს უმოკლეს გზას', 90005, FALSE),
       (90008, 'It goes as deep as possible along each branch before backtracking',
        'ის მიდის რაც შეიძლება ღრმად თითოეულ შტოზე, სანამ უკან დაბრუნდება', 90005, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (90009, 'Which traversal method is ideal for finding the shortest path in an unweighted graph?',
        'რომელი მეთოდია იდეალური უმოკლესი გზის საპოვნელად არაწონიან გრაფში?', 'SINGLE_CHOICE', 90000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (90010, 'Depth-First Search (DFS)', 'სიღრმეში ძებნა (DFS)', 90009, FALSE),
       (90011, 'Breadth-First Search (BFS)', 'სიგანეში ძებნა (BFS)', 90009, TRUE),
       (90012, 'Random Walk', 'შემთხვევითი სვლა', 90009, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (90013, 'In a DFS traversal, what happens when a dead end is reached?',
        'DFS-ით მოვლისას რა ხდება, როდესაც ჩიხს მივაღწევთ?', 'SINGLE_CHOICE', 90000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (90014, 'The algorithm terminates', 'ალგორითმი სრულდება', 90013, FALSE),
       (90015, 'It jumps to a random unvisited node', 'ის გადადის შემთხვევითად შერჩეულ გაუვლელ წვეროზე', 90013, FALSE),
       (90016, 'It backtracks to the last junction with an unexplored path',
        'ის ბრუნდება უკან ბოლო ისეთ წვერომდე, რომლის მიღმაც გამოუკვლევი გზაა', 90013, TRUE);

---------------------------------------------------------------------------------------------------------------------------------


-- GRAPH_THEORY_ALGORITHMS

INSERT INTO BYTEMATH.QUIZ (ID, IDENTIFIER, TITLE_ENG, TITLE_GEO)
VALUES (400000, 'GRAPH_THEORY_ALGORITHMS', 'Graph Algorithms Quiz', 'გრაფების ალგორითმების ქვიზი');

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (400001, 'What is the definition of graph isomorphism?',
        'რა არის გრაფების იზომორფიზმის განმარტება?', 'SINGLE_CHOICE', 400000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (400002, 'Two graphs with the same number of vertices', 'ორი გრაფი წვეროების ერთნაირი რაოდენობით', 400001,
        FALSE),
       (400003, 'Two graphs with the same structure that can be transformed into each other by relabeling vertices',
        'ორი გრაფი ერთნაირი სტრუქტურით, რომლებიც შეიძლება ერთმანეთში გარდაიქმნას წვეროების გადარქმევით', 400001, TRUE),
       (400004, 'Two graphs with the same number of edges', 'ორი გრაფი წიბოების ერთნაირი რაოდენობით', 400001, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (400005, 'What is a spanning tree of a graph?',
        'რა არის გრაფის დამფარავი ხე?', 'SINGLE_CHOICE', 400000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (400006, 'A subgraph that includes all vertices and all edges',
        'ქვეგრაფი, რომელიც მოიცავს ყველა წვეროს და ყველა წიბოს', 400005, FALSE),
       (400007, 'A subgraph that includes some vertices and minimal edges',
        'ქვეგრაფი, რომელიც მოიცავს ზოგიერთ წვეროს და მინიმალური რაოდენობის წიბოებს', 400005, FALSE),
       (400008, 'A subgraph that includes all vertices with minimal edges to form a tree',
        'ქვეგრაფი, რომელიც მოიცავს ყველა წვეროს და მინიმალური რაოდენობს წიბოებს თავდაპირველი გრაფიდან ხის შესაქმნელად',
        400005, TRUE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (400009, 'What is the main rule in graph coloring?',
        'რა არის მთავარი წესი გრაფის გაფერადებაში?', 'SINGLE_CHOICE', 400000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (400010, 'All vertices must be the same color', 'ყველა წვერო უნდა იყოს ერთი და იმავე ფერის', 400009, FALSE),
       (400011, 'No two adjacent vertices should have the same color',
        'არცერთი ორი მეზობელი წვერო არ უნდა იყოს ერთი და იმავე ფერის', 400009, TRUE),
       (400012, 'The graph must use exactly three colors', 'გრაფმა უნდა გამოიყენოს ზუსტად სამი ფერი', 400009, FALSE);

INSERT INTO BYTEMATH.QUESTION (ID, QUESTION_TEXT_ENG, QUESTION_TEXT_GEO, QUESTION_TYPE, QUIZ_ID)
VALUES (400013, 'Which of the following is NOT a step in determining graph isomorphism?',
        'ჩამოთვლილთაგან რომელი არ არის ნაბიჯი გრაფების იზომორფიზმის განსაზღვრისას?', 'SINGLE_CHOICE', 400000);

INSERT INTO BYTEMATH.ANSWER (ID, ANSWER_TEXT_ENG, ANSWER_TEXT_GEO, QUESTION_ID, IS_CORRECT)
VALUES (400014, 'Checking the number of vertices and edges', 'წვეროებისა და წიბოების რაოდენობის შემოწმება', 400013,
        FALSE),
       (400015, 'Comparing degree sequences', 'ხარისხების მიმდევრობების შედარება', 400013, FALSE),
       (400016, 'Calculating the total weight of all edges', 'ყველა წიბოს ჯამური წონის გამოთვლა', 400013, TRUE);
