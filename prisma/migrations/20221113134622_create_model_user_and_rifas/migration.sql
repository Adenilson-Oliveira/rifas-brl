-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rifas" (
    "id" TEXT NOT NULL,
    "cota" TEXT NOT NULL,
    "vendido" BOOLEAN NOT NULL,
    "reservado" BOOLEAN NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "rifas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_telefone_key" ON "user"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "rifas_cota_key" ON "rifas"("cota");

-- AddForeignKey
ALTER TABLE "rifas" ADD CONSTRAINT "rifas_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
