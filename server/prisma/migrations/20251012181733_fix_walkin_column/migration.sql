/*
  Warnings:

  - You are about to drop the column `geor_id` on the `Walkin` table. All the data in the column will be lost.
  - Added the required column `goer_id` to the `Walkin` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Walkin" DROP CONSTRAINT "Walkin_geor_id_fkey";

-- AlterTable
ALTER TABLE "Walkin" DROP COLUMN "geor_id",
ADD COLUMN     "goer_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Walkin" ADD CONSTRAINT "Walkin_goer_id_fkey" FOREIGN KEY ("goer_id") REFERENCES "Goer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
