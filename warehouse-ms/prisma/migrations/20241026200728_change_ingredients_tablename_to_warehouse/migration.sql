/*
  Warnings:

  - The primary key for the `warehouse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `IngredientName` on the `warehouse` table. All the data in the column will be lost.
  - Added the required column `ingredientName` to the `warehouse` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_warehouse" (
    "ingredientName" TEXT NOT NULL PRIMARY KEY,
    "quantity" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_warehouse" ("createdAt", "quantity", "updatedAt") SELECT "createdAt", "quantity", "updatedAt" FROM "warehouse";
DROP TABLE "warehouse";
ALTER TABLE "new_warehouse" RENAME TO "warehouse";
CREATE UNIQUE INDEX "warehouse_ingredientName_key" ON "warehouse"("ingredientName");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
