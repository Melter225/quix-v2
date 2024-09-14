/*
  Warnings:

  - You are about to drop the column `document_id` on the `Learn` table. All the data in the column will be lost.
  - You are about to drop the column `video_id` on the `Learn` table. All the data in the column will be lost.
  - You are about to drop the column `website_id` on the `Learn` table. All the data in the column will be lost.
  - You are about to drop the column `answer_id` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `document_id` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `question_id` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `video_id` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `website_id` on the `Quiz` table. All the data in the column will be lost.

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
CREATE UNIQUE INDEX "Answer_quiz_id_key" ON "Answer"("quiz_id");
CREATE TABLE "new_Learn" (
    "learn_id" TEXT NOT NULL PRIMARY KEY,
    "resource_id" TEXT NOT NULL,
    "learn_name" TEXT NOT NULL,
    CONSTRAINT "Learn_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource" ("resource_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Learn" ("learn_id", "learn_name", "resource_id") SELECT "learn_id", "learn_name", "resource_id" FROM "Learn";
DROP TABLE "Learn";
ALTER TABLE "new_Learn" RENAME TO "Learn";
CREATE UNIQUE INDEX "Learn_learn_id_key" ON "Learn"("learn_id");
CREATE UNIQUE INDEX "Learn_resource_id_key" ON "Learn"("resource_id");
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
CREATE UNIQUE INDEX "Question_quiz_id_key" ON "Question"("quiz_id");
CREATE TABLE "new_Quiz" (
    "quiz_id" TEXT NOT NULL PRIMARY KEY,
    "resource_id" TEXT NOT NULL,
    "quiz_name" TEXT NOT NULL,
    CONSTRAINT "Quiz_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource" ("resource_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Quiz" ("quiz_id", "quiz_name", "resource_id") SELECT "quiz_id", "quiz_name", "resource_id" FROM "Quiz";
DROP TABLE "Quiz";
ALTER TABLE "new_Quiz" RENAME TO "Quiz";
CREATE UNIQUE INDEX "Quiz_quiz_id_key" ON "Quiz"("quiz_id");
CREATE UNIQUE INDEX "Quiz_resource_id_key" ON "Quiz"("resource_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
