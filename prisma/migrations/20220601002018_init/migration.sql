-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "urlsId" INTEGER NOT NULL,
    CONSTRAINT "Item_urlsId_fkey" FOREIGN KEY ("urlsId") REFERENCES "Urls" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Urls" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tesco" TEXT,
    "dunnes" TEXT,
    "supervalu" TEXT
);

-- CreateTable
CREATE TABLE "PriceRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateTime" DATETIME NOT NULL,
    "tesco" REAL,
    "dunnes" REAL,
    "supervalu" REAL,
    "itemId" INTEGER NOT NULL,
    CONSTRAINT "PriceRecord_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_urlsId_key" ON "Item"("urlsId");
