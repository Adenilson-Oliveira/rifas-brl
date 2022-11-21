/*
  Warnings:

  - You are about to drop the `rifaifhone` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "rifaifhone" DROP CONSTRAINT "rifaifhone_user_id_fkey";

-- DropTable
DROP TABLE "rifaifhone";

-- CreateTable
CREATE TABLE "rifaIFhone" (
    "id" TEXT NOT NULL,
    "cota" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "rifaIFhone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rifaIFhone_cota_key" ON "rifaIFhone"("cota");

-- AddForeignKey
ALTER TABLE "rifaIFhone" ADD CONSTRAINT "rifaIFhone_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
