/*
  Warnings:

  - You are about to drop the column `senha` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `user` table. All the data in the column will be lost.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "senha",
DROP COLUMN "telefone",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phone_number" TEXT NOT NULL;
