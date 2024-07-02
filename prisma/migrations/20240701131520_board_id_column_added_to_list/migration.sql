/*
  Warnings:

  - Added the required column `boardId` to the `List` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- ALTER TABLE "List" ADD COLUMN     "boardId" TEXT NOT NULL;

-- This is an example of what your SQL file might look like.
ALTER TABLE "List" ADD COLUMN "boardId" TEXT NOT NULL DEFAULT '';

-- Optionally, you can remove the default constraint after setting the values if you don't want a default value in the future.
ALTER TABLE "List" ALTER COLUMN "boardId" DROP DEFAULT;
