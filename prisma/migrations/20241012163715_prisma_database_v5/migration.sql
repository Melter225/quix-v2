/*
  Warnings:

  - Added the required column `taken` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Quiz" (
    "quiz_id" TEXT NOT NULL PRIMARY KEY,
    "resource_id" TEXT NOT NULL,
    "quiz_name" TEXT NOT NULL,
    "taken" BOOLEAN NOT NULL,
    CONSTRAINT "Quiz_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource" ("resource_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Quiz" ("quiz_id", "quiz_name", "resource_id") SELECT "quiz_id", "quiz_name", "resource_id" FROM "Quiz";
DROP TABLE "Quiz";
ALTER TABLE "new_Quiz" RENAME TO "Quiz";
CREATE UNIQUE INDEX "Quiz_quiz_id_key" ON "Quiz"("quiz_id");
CREATE UNIQUE INDEX "Quiz_resource_id_key" ON "Quiz"("resource_id");
CREATE UNIQUE INDEX "Quiz_quiz_name_key" ON "Quiz"("quiz_name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
