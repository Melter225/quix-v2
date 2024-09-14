-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profile" TEXT NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Space" (
    "space_id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "space_name" TEXT NOT NULL,
    "space_number" INTEGER NOT NULL,
    CONSTRAINT "Space_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Resource" (
    "resource_id" TEXT NOT NULL PRIMARY KEY,
    "space_id" TEXT NOT NULL,
    CONSTRAINT "Resource_space_id_fkey" FOREIGN KEY ("space_id") REFERENCES "Space" ("space_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Quiz" (
    "quiz_id" TEXT NOT NULL PRIMARY KEY,
    "question_id" TEXT,
    "answer_id" TEXT,
    "document_id" TEXT,
    "video_id" TEXT,
    "website_id" TEXT,
    "resource_id" TEXT NOT NULL,
    "quiz_name" TEXT NOT NULL,
    CONSTRAINT "Quiz_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource" ("resource_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Learn" (
    "learn_id" TEXT NOT NULL PRIMARY KEY,
    "resource_id" TEXT NOT NULL,
    "document_id" TEXT,
    "video_id" TEXT,
    "website_id" TEXT,
    "learn_name" TEXT NOT NULL,
    CONSTRAINT "Learn_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource" ("resource_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Question" (
    "question_id" TEXT NOT NULL PRIMARY KEY,
    "quiz_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    CONSTRAINT "Question_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("question_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Answer" (
    "answer_id" TEXT NOT NULL PRIMARY KEY,
    "quiz_id" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "correct" BOOLEAN NOT NULL,
    CONSTRAINT "Answer_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("answer_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Document" (
    "document_id" TEXT NOT NULL PRIMARY KEY,
    "quiz_id" TEXT,
    "learn_id" TEXT,
    "document" TEXT NOT NULL,
    CONSTRAINT "Document_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("quiz_id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Document_learn_id_fkey" FOREIGN KEY ("learn_id") REFERENCES "Learn" ("learn_id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Video" (
    "video_id" TEXT NOT NULL PRIMARY KEY,
    "quiz_id" TEXT,
    "learn_id" TEXT,
    "video" TEXT NOT NULL,
    CONSTRAINT "Video_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("quiz_id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Video_learn_id_fkey" FOREIGN KEY ("learn_id") REFERENCES "Learn" ("learn_id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Website" (
    "website_id" TEXT NOT NULL PRIMARY KEY,
    "quiz_id" TEXT,
    "learn_id" TEXT,
    "website" TEXT NOT NULL,
    CONSTRAINT "Website_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz" ("quiz_id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Website_learn_id_fkey" FOREIGN KEY ("learn_id") REFERENCES "Learn" ("learn_id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_id_key" ON "User"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Space_space_id_key" ON "Space"("space_id");

-- CreateIndex
CREATE UNIQUE INDEX "Space_space_name_key" ON "Space"("space_name");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_resource_id_key" ON "Resource"("resource_id");

-- CreateIndex
CREATE UNIQUE INDEX "Quiz_quiz_id_key" ON "Quiz"("quiz_id");

-- CreateIndex
CREATE UNIQUE INDEX "Quiz_question_id_key" ON "Quiz"("question_id");

-- CreateIndex
CREATE UNIQUE INDEX "Quiz_answer_id_key" ON "Quiz"("answer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Quiz_resource_id_key" ON "Quiz"("resource_id");

-- CreateIndex
CREATE UNIQUE INDEX "Learn_learn_id_key" ON "Learn"("learn_id");

-- CreateIndex
CREATE UNIQUE INDEX "Learn_resource_id_key" ON "Learn"("resource_id");

-- CreateIndex
CREATE UNIQUE INDEX "Question_question_id_key" ON "Question"("question_id");

-- CreateIndex
CREATE UNIQUE INDEX "Question_quiz_id_key" ON "Question"("quiz_id");

-- CreateIndex
CREATE UNIQUE INDEX "Answer_answer_id_key" ON "Answer"("answer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Answer_quiz_id_key" ON "Answer"("quiz_id");

-- CreateIndex
CREATE UNIQUE INDEX "Document_document_id_key" ON "Document"("document_id");

-- CreateIndex
CREATE UNIQUE INDEX "Document_quiz_id_key" ON "Document"("quiz_id");

-- CreateIndex
CREATE UNIQUE INDEX "Document_learn_id_key" ON "Document"("learn_id");

-- CreateIndex
CREATE UNIQUE INDEX "Video_video_id_key" ON "Video"("video_id");

-- CreateIndex
CREATE UNIQUE INDEX "Website_website_id_key" ON "Website"("website_id");
