/*
  Warnings:

  - You are about to drop the `rifas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "rifas" DROP CONSTRAINT "rifas_user_id_fkey";

-- DropTable
DROP TABLE "rifas";

-- CreateTable
CREATE TABLE "rifaifhone" (
    "id" TEXT NOT NULL,
    "cota" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "rifaifhone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rifaifhone_cota_key" ON "rifaifhone"("cota");

-- AddForeignKey
ALTER TABLE "rifaifhone" ADD CONSTRAINT "rifaifhone_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
