-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rifaifhone" (
    "id" TEXT NOT NULL,
    "cota" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "rifaifhone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "rifaifhone_cota_key" ON "rifaifhone"("cota");

-- AddForeignKey
ALTER TABLE "rifaifhone" ADD CONSTRAINT "rifaifhone_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
