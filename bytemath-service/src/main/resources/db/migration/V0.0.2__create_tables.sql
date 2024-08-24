CREATE TABLE BYTEMATH.QUIZ
(
    ID         BIGINT DEFAULT NEXTVAL('BYTEMATH.BYTEMATH_GLOBAL_SEQUENCE') PRIMARY KEY,
    IDENTIFIER VARCHAR(255),
    LANGUAGE   VARCHAR(3),
    TITLE      VARCHAR(255)
);

CREATE TABLE BYTEMATH.QUESTION
(
    ID            BIGINT DEFAULT NEXTVAL('BYTEMATH.BYTEMATH_GLOBAL_SEQUENCE') PRIMARY KEY,
    QUESTION_TEXT VARCHAR(255),
    QUESTION_TYPE VARCHAR(255),
    QUIZ_ID       BIGINT NOT NULL,
    FOREIGN KEY (QUIZ_ID) REFERENCES BYTEMATH.QUIZ (ID)

);

CREATE TABLE BYTEMATH.ANSWER
(
    ID          BIGINT DEFAULT NEXTVAL('BYTEMATH.BYTEMATH_GLOBAL_SEQUENCE') PRIMARY KEY,
    ANSWER_TEXT VARCHAR(255),
    QUESTION_ID BIGINT NOT NULL,
    IS_CORRECT  BOOLEAN,
    FOREIGN KEY (QUESTION_ID) REFERENCES BYTEMATH.QUESTION (ID) ON DELETE CASCADE
);

CREATE TABLE BYTEMATH.PAGE
(
    ID         BIGINT DEFAULT NEXTVAL('BYTEMATH.BYTEMATH_GLOBAL_SEQUENCE') PRIMARY KEY,
    IDENTIFIER VARCHAR(255)
);

CREATE TABLE BYTEMATH.BYTEMATH_USER
(
    ID       BIGINT DEFAULT NEXTVAL('BYTEMATH.BYTEMATH_GLOBAL_SEQUENCE') PRIMARY KEY,
    USERNAME VARCHAR(255) UNIQUE
);

CREATE TABLE BYTEMATH.BYTEMATH_USER_READ_PAGES
(
    USER_ID BIGINT,
    PAGE_ID BIGINT,
    PRIMARY KEY (USER_ID, PAGE_ID),
    FOREIGN KEY (USER_ID) REFERENCES BYTEMATH.BYTEMATH_USER (ID),
    FOREIGN KEY (PAGE_ID) REFERENCES BYTEMATH.PAGE (ID)
);

CREATE TABLE BYTEMATH.BYTEMATH_USER_QUIZ_SUBMISSIONS
(
    ID        BIGINT DEFAULT NEXTVAL('BYTEMATH.BYTEMATH_GLOBAL_SEQUENCE') PRIMARY KEY,
    USER_ID   BIGINT  NOT NULL,
    QUIZ_ID   BIGINT  NOT NULL,
    SCORE     INTEGER NOT NULL,
    MAX_SCORE INTEGER NOT NULL,
    FOREIGN KEY (USER_ID) REFERENCES BYTEMATH.BYTEMATH_USER (ID)
);

CREATE TABLE BYTEMATH.BYTEMATH_USER_QUIZ_SUBMISSION_ANSWERS
(
    SUBMISSION_ID      BIGINT NOT NULL,
    QUESTION_ID        BIGINT,
    SELECTED_ANSWER_ID BIGINT,
    TEXT_ANSWER        VARCHAR(255),
    FOREIGN KEY (SUBMISSION_ID) REFERENCES BYTEMATH.BYTEMATH_USER_QUIZ_SUBMISSIONS (ID) ON DELETE CASCADE
);
