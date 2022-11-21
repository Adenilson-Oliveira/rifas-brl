/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "rifaIFhone" DROP CONSTRAINT "rifaIFhone_user_id_fkey";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "userteste" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "userteste_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userteste_email_key" ON "userteste"("email");

-- AddForeignKey
ALTER TABLE "rifaIFhone" ADD CONSTRAINT "rifaIFhone_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "userteste"("id") ON DELETE SET NULL ON UPDATE CASCADE;
