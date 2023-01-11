-- CreateTable
CREATE TABLE "Voter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Voter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contribution" (
    "id" SERIAL NOT NULL,
    "contribname" TEXT NOT NULL,

    CONSTRAINT "Contribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RadKategorie" (
    "id" SERIAL NOT NULL,
    "kategoriename" TEXT NOT NULL,
    "sichtbar" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "RadKategorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subkategorie" (
    "id" SERIAL NOT NULL,
    "subkatbname" TEXT NOT NULL,
    "sichtbar" BOOLEAN NOT NULL DEFAULT true,
    "radKategorieId" INTEGER,

    CONSTRAINT "Subkategorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContributionToVoter" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ContributionToVoter_AB_unique" ON "_ContributionToVoter"("A", "B");

-- CreateIndex
CREATE INDEX "_ContributionToVoter_B_index" ON "_ContributionToVoter"("B");

-- AddForeignKey
ALTER TABLE "Subkategorie" ADD CONSTRAINT "Subkategorie_radKategorieId_fkey" FOREIGN KEY ("radKategorieId") REFERENCES "RadKategorie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContributionToVoter" ADD CONSTRAINT "_ContributionToVoter_A_fkey" FOREIGN KEY ("A") REFERENCES "Contribution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContributionToVoter" ADD CONSTRAINT "_ContributionToVoter_B_fkey" FOREIGN KEY ("B") REFERENCES "Voter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
