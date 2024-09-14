/*
  Warnings:

  - Made the column `quiz_id` on table `Answer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quiz_id` on table `Question` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Answer" (
    "answer_id" TEXT NOT NULL PRIMARY KEY,
    "quiz_id" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "correct" BOOLEAN NOT NULL,
    CONSTRAINT "Answer_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("quiz_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Answer" ("answer", "answer_id", "correct", "quiz_id") SELECT "answer", "answer_id", "correct", "quiz_id" FROM "Answer";
DROP TABLE "Answer";
ALTER TABLE "new_Answer" RENAME TO "Answer";
CREATE UNIQUE INDEX "Answer_answer_id_key" ON "Answer"("answer_id");
CREATE TABLE "new_Question" (
    "question_id" TEXT NOT NULL PRIMARY KEY,
    "quiz_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    CONSTRAINT "Question_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("quiz_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Question" ("question", "question_id", "quiz_id") SELECT "question", "question_id", "quiz_id" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
CREATE UNIQUE INDEX "Question_question_id_key" ON "Question"("question_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
