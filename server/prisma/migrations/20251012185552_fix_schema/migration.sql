-- CreateEnum
CREATE TYPE "GENDER" AS ENUM ('FEMALE', 'MALE');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'GCASH');

-- CreateEnum
CREATE TYPE "SCOPE" AS ENUM ('REGULAR', 'WALKIN', 'STUDENT');

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goer" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "isStudent" BOOLEAN NOT NULL,
    "gender" "GENDER" NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "phone" TEXT,
    "email" TEXT,

    CONSTRAINT "Goer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "goer_id" INTEGER NOT NULL,
    "account_id" INTEGER NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Walkin" (
    "id" SERIAL NOT NULL,
    "goer_id" INTEGER NOT NULL,

    CONSTRAINT "Walkin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" SERIAL NOT NULL,
    "check_in" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "check_out" TIMESTAMP(3),
    "goer_id" INTEGER NOT NULL,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Membership" (
    "id" SERIAL NOT NULL,
    "member_id" INTEGER NOT NULL,
    "months" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Membership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "goerId" INTEGER NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "payment_method" "PaymentMethod" NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "membershipId" INTEGER,
    "promoId" INTEGER,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Promo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "discount" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "scope" "SCOPE"[],

    CONSTRAINT "Promo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Member_goer_id_idx" ON "Member"("goer_id");

-- CreateIndex
CREATE INDEX "Member_account_id_idx" ON "Member"("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "Member_goer_id_account_id_key" ON "Member"("goer_id", "account_id");

-- CreateIndex
CREATE INDEX "Walkin_goer_id_idx" ON "Walkin"("goer_id");

-- CreateIndex
CREATE INDEX "Attendance_goer_id_idx" ON "Attendance"("goer_id");

-- CreateIndex
CREATE INDEX "Payment_goerId_idx" ON "Payment"("goerId");

-- CreateIndex
CREATE INDEX "Payment_membershipId_idx" ON "Payment"("membershipId");

-- CreateIndex
CREATE INDEX "Payment_promoId_idx" ON "Payment"("promoId");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_goer_id_fkey" FOREIGN KEY ("goer_id") REFERENCES "Goer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Walkin" ADD CONSTRAINT "Walkin_goer_id_fkey" FOREIGN KEY ("goer_id") REFERENCES "Goer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_goer_id_fkey" FOREIGN KEY ("goer_id") REFERENCES "Goer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_promoId_fkey" FOREIGN KEY ("promoId") REFERENCES "Promo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_goerId_fkey" FOREIGN KEY ("goerId") REFERENCES "Goer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
