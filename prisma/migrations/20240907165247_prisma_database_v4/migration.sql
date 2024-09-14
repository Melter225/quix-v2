-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Answer" (
    "answer_id" TEXT NOT NULL PRIMARY KEY,
    "quiz_id" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "correct" BOOLEAN NOT NULL,
    CONSTRAINT "Answer_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("quiz_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Answer" ("answer", "answer_id", "correct", "quiz_id") SELECT "answer", "answer_id", "correct", "quiz_id" FROM "Answer";
DROP TABLE "Answer";
ALTER TABLE "new_Answer" RENAME TO "Answer";
CREATE UNIQUE INDEX "Answer_answer_id_key" ON "Answer"("answer_id");
CREATE TABLE "new_Document" (
    "document_id" TEXT NOT NULL PRIMARY KEY,
    "quiz_id" TEXT,
    "learn_id" TEXT,
    "document" TEXT NOT NULL,
    CONSTRAINT "Document_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("quiz_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Document_learn_id_fkey" FOREIGN KEY ("learn_id") REFERENCES "Learn" ("learn_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Document" ("document", "document_id", "learn_id", "quiz_id") SELECT "document", "document_id", "learn_id", "quiz_id" FROM "Document";
DROP TABLE "Document";
ALTER TABLE "new_Document" RENAME TO "Document";
CREATE UNIQUE INDEX "Document_document_id_key" ON "Document"("document_id");
CREATE UNIQUE INDEX "Document_quiz_id_key" ON "Document"("quiz_id");
CREATE UNIQUE INDEX "Document_learn_id_key" ON "Document"("learn_id");
CREATE TABLE "new_Learn" (
    "learn_id" TEXT NOT NULL PRIMARY KEY,
    "resource_id" TEXT NOT NULL,
    "learn_name" TEXT NOT NULL,
    CONSTRAINT "Learn_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource" ("resource_id") ON DELETE CASCADE ON UPDATE CASCADE
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
    CONSTRAINT "Question_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("quiz_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Question" ("question", "question_id", "quiz_id") SELECT "question", "question_id", "quiz_id" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
CREATE UNIQUE INDEX "Question_question_id_key" ON "Question"("question_id");
CREATE TABLE "new_Quiz" (
    "quiz_id" TEXT NOT NULL PRIMARY KEY,
    "resource_id" TEXT NOT NULL,
    "quiz_name" TEXT NOT NULL,
    CONSTRAINT "Quiz_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource" ("resource_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Quiz" ("quiz_id", "quiz_name", "resource_id") SELECT "quiz_id", "quiz_name", "resource_id" FROM "Quiz";
DROP TABLE "Quiz";
ALTER TABLE "new_Quiz" RENAME TO "Quiz";
CREATE UNIQUE INDEX "Quiz_quiz_id_key" ON "Quiz"("quiz_id");
CREATE UNIQUE INDEX "Quiz_resource_id_key" ON "Quiz"("resource_id");
CREATE TABLE "new_Resource" (
    "resource_id" TEXT NOT NULL PRIMARY KEY,
    "space_id" TEXT NOT NULL,
    CONSTRAINT "Resource_space_id_fkey" FOREIGN KEY ("space_id") REFERENCES "Space" ("space_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Resource" ("resource_id", "space_id") SELECT "resource_id", "space_id" FROM "Resource";
DROP TABLE "Resource";
ALTER TABLE "new_Resource" RENAME TO "Resource";
CREATE UNIQUE INDEX "Resource_resource_id_key" ON "Resource"("resource_id");
CREATE TABLE "new_Space" (
    "space_id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "space_name" TEXT NOT NULL,
    "space_number" INTEGER NOT NULL,
    CONSTRAINT "Space_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Space" ("space_id", "space_name", "space_number", "user_id") SELECT "space_id", "space_name", "space_number", "user_id" FROM "Space";
DROP TABLE "Space";
ALTER TABLE "new_Space" RENAME TO "Space";
CREATE UNIQUE INDEX "Space_space_id_key" ON "Space"("space_id");
CREATE UNIQUE INDEX "Space_space_name_key" ON "Space"("space_name");
CREATE TABLE "new_Video" (
    "video_id" TEXT NOT NULL PRIMARY KEY,
    "quiz_id" TEXT,
    "learn_id" TEXT,
    "video" TEXT NOT NULL,
    CONSTRAINT "Video_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("quiz_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Video_learn_id_fkey" FOREIGN KEY ("learn_id") REFERENCES "Learn" ("learn_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Video" ("learn_id", "quiz_id", "video", "video_id") SELECT "learn_id", "quiz_id", "video", "video_id" FROM "Video";
DROP TABLE "Video";
ALTER TABLE "new_Video" RENAME TO "Video";
CREATE UNIQUE INDEX "Video_video_id_key" ON "Video"("video_id");
CREATE TABLE "new_Website" (
    "website_id" TEXT NOT NULL PRIMARY KEY,
    "quiz_id" TEXT,
    "learn_id" TEXT,
    "website" TEXT NOT NULL,
    CONSTRAINT "Website_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("quiz_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Website_learn_id_fkey" FOREIGN KEY ("learn_id") REFERENCES "Learn" ("learn_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Website" ("learn_id", "quiz_id", "website", "website_id") SELECT "learn_id", "quiz_id", "website", "website_id" FROM "Website";
DROP TABLE "Website";
ALTER TABLE "new_Website" RENAME TO "Website";
CREATE UNIQUE INDEX "Website_website_id_key" ON "Website"("website_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
