/*
  Warnings:

  - You are about to drop the column `totalPrice` on the `Sales` table. All the data in the column will be lost.
  - The primary key for the `SalesSummary` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `summaryId` on the `SalesSummary` table. All the data in the column will be lost.
  - You are about to drop the `ExpensesSummary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PurchasesSummary` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `totalCost` to the `Purchases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salesSummaryId` to the `SalesSummary` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ExpenseByCategory" DROP CONSTRAINT "ExpenseByCategory_expenseSummaryId_fkey";

-- AlterTable
ALTER TABLE "Purchases" ADD COLUMN     "totalCost" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "totalPrice";

-- AlterTable
ALTER TABLE "SalesSummary" DROP CONSTRAINT "SalesSummary_pkey",
DROP COLUMN "summaryId",
ADD COLUMN     "salesSummaryId" TEXT NOT NULL,
ADD CONSTRAINT "SalesSummary_pkey" PRIMARY KEY ("salesSummaryId");

-- DropTable
DROP TABLE "ExpensesSummary";

-- DropTable
DROP TABLE "PurchasesSummary";

-- CreateTable
CREATE TABLE "PurchaseSummary" (
    "purchaseSummaryId" TEXT NOT NULL,
    "totalPurchased" DOUBLE PRECISION NOT NULL,
    "changePercentage" DOUBLE PRECISION,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchaseSummary_pkey" PRIMARY KEY ("purchaseSummaryId")
);

-- CreateTable
CREATE TABLE "ExpenseSummary" (
    "expenseSummaryId" TEXT NOT NULL,
    "totalExpenses" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExpenseSummary_pkey" PRIMARY KEY ("expenseSummaryId")
);

-- AddForeignKey
ALTER TABLE "ExpenseByCategory" ADD CONSTRAINT "ExpenseByCategory_expenseSummaryId_fkey" FOREIGN KEY ("expenseSummaryId") REFERENCES "ExpenseSummary"("expenseSummaryId") ON DELETE RESTRICT ON UPDATE CASCADE;
