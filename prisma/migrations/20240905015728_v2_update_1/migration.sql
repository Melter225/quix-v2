-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Answer" (
    "answer_id" TEXT NOT NULL PRIMARY KEY,
    "quiz_id" TEXT,
    "answer" TEXT NOT NULL,
    "correct" BOOLEAN NOT NULL,
    CONSTRAINT "Answer_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("quiz_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Answer" ("answer", "answer_id", "correct", "quiz_id") SELECT "answer", "answer_id", "correct", "quiz_id" FROM "Answer";
DROP TABLE "Answer";
ALTER TABLE "new_Answer" RENAME TO "Answer";
CREATE UNIQUE INDEX "Answer_answer_id_key" ON "Answer"("answer_id");
CREATE UNIQUE INDEX "Answer_quiz_id_key" ON "Answer"("quiz_id");
CREATE TABLE "new_Question" (
    "question_id" TEXT NOT NULL PRIMARY KEY,
    "quiz_id" TEXT,
    "question" TEXT NOT NULL,
    CONSTRAINT "Question_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("quiz_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Question" ("question", "question_id", "quiz_id") SELECT "question", "question_id", "quiz_id" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
CREATE UNIQUE INDEX "Question_question_id_key" ON "Question"("question_id");
CREATE UNIQUE INDEX "Question_quiz_id_key" ON "Question"("quiz_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
