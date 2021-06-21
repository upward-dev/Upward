-- CreateEnum
CREATE TYPE "ExperienceType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACT');

-- CreateEnum
CREATE TYPE "VisaType" AS ENUM ('NEW_H1B', 'TRANSFER_H1B', 'TN_VISA', 'F1', 'NONE');

-- CreateEnum
CREATE TYPE "Locations" AS ENUM ('REMOTE', 'BAY_AREA', 'NEW_YORK', 'AUSTIN', 'DENVER', 'SEATTLE', 'BOSTON', 'WASHINGTON', 'SAN_DIEGO', 'LOS_ANGELES', 'DALLAS', 'CHICAGO', 'HOUSTON', 'PHOENIX', 'PHILADELPHIA');

-- CreateEnum
CREATE TYPE "BackendTechnologies" AS ENUM ('CSHARP', 'DJANGO', 'DOTNET', 'ELIXIR', 'JAVA', 'KAFKA', 'NODE', 'NEST', 'NEXT', 'PHP', 'PYTHON', 'RABBITMQ', 'RAILS', 'RUBY');

-- CreateEnum
CREATE TYPE "OperationsTechnologies" AS ENUM ('ANSIBLE', 'AWS', 'AZURE', 'DIGITALOCEAN', 'DOCKER', 'GCS', 'KUBERNETES', 'TERRAFORM');

-- CreateEnum
CREATE TYPE "StorageTechnologies" AS ENUM ('CASSANDRA', 'COUCHDB', 'DYNAMODB', 'MEMCACHED', 'MONGODB', 'MSSQL', 'MYSQL', 'NOSQL', 'ORACLE', 'POSTGRES', 'REDIS');

-- CreateEnum
CREATE TYPE "FrontendTechnologies" AS ENUM ('ANGULAR', 'EMBER', 'FLOW', 'JAVASCRIPT', 'NEXT', 'REACT', 'TYPESCRIPT', 'VUE');

-- CreateEnum
CREATE TYPE "RoleDescription" AS ENUM ('FRONTEND', 'BACKEND', 'FULLSTACK', 'MANAGER', 'DIRECTOR', 'VPE', 'MACHINE_LEARNING', 'DATA_SCIENCE', 'INFRASTRUCTURE', 'SRE', 'DEVOPS', 'QA', 'QA_MANAGER');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'EMPLOYER', 'MENTOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "AuthenticationMethod" AS ENUM ('SELF', 'LINKEDIN');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('OPEN', 'DELETED', 'COMPLETED');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "authenticationMethod" "AuthenticationMethod" NOT NULL DEFAULT E'SELF',
    "role" "Role" NOT NULL DEFAULT E'USER',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "yearsOfExperience" INTEGER NOT NULL,
    "minimumSalary" INTEGER NOT NULL,
    "maximumSalary" INTEGER NOT NULL,
    "calendlyLink" TEXT,
    "linkedinUrl" TEXT,
    "githubLink" TEXT,
    "visaType" "VisaType" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "authorId" INTEGER,
    "status" "TaskStatus" NOT NULL DEFAULT E'OPEN',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "url" TEXT,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "profileId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userTitle" TEXT NOT NULL,
    "accomplishments" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "profileId" INTEGER,
    "type" "ExperienceType" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoleType" (
    "id" SERIAL NOT NULL,
    "type" "RoleDescription" NOT NULL DEFAULT E'FULLSTACK',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FrontendTechnology" (
    "id" SERIAL NOT NULL,
    "technology" "FrontendTechnologies" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BackendTechnology" (
    "id" SERIAL NOT NULL,
    "technology" "BackendTechnologies" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperationsTechnology" (
    "id" SERIAL NOT NULL,
    "technology" "OperationsTechnologies" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorageTechnology" (
    "id" SERIAL NOT NULL,
    "technology" "StorageTechnologies" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LocationWanted" (
    "id" SERIAL NOT NULL,
    "location" "Locations" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProfileToRoleType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FrontendTechnologyToProfile" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BackendTechnologyToProfile" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ProfileToStorageTechnology" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_OperationsTechnologyToProfile" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_LocationWantedToProfile" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users.email_unique" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_unique" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_ProfileToRoleType_AB_unique" ON "_ProfileToRoleType"("A", "B");

-- CreateIndex
CREATE INDEX "_ProfileToRoleType_B_index" ON "_ProfileToRoleType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FrontendTechnologyToProfile_AB_unique" ON "_FrontendTechnologyToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_FrontendTechnologyToProfile_B_index" ON "_FrontendTechnologyToProfile"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BackendTechnologyToProfile_AB_unique" ON "_BackendTechnologyToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_BackendTechnologyToProfile_B_index" ON "_BackendTechnologyToProfile"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProfileToStorageTechnology_AB_unique" ON "_ProfileToStorageTechnology"("A", "B");

-- CreateIndex
CREATE INDEX "_ProfileToStorageTechnology_B_index" ON "_ProfileToStorageTechnology"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OperationsTechnologyToProfile_AB_unique" ON "_OperationsTechnologyToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_OperationsTechnologyToProfile_B_index" ON "_OperationsTechnologyToProfile"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LocationWantedToProfile_AB_unique" ON "_LocationWantedToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_LocationWantedToProfile_B_index" ON "_LocationWantedToProfile"("B");

-- AddForeignKey
ALTER TABLE "Profile" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfileToRoleType" ADD FOREIGN KEY ("A") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfileToRoleType" ADD FOREIGN KEY ("B") REFERENCES "RoleType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FrontendTechnologyToProfile" ADD FOREIGN KEY ("A") REFERENCES "FrontendTechnology"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FrontendTechnologyToProfile" ADD FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BackendTechnologyToProfile" ADD FOREIGN KEY ("A") REFERENCES "BackendTechnology"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BackendTechnologyToProfile" ADD FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfileToStorageTechnology" ADD FOREIGN KEY ("A") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfileToStorageTechnology" ADD FOREIGN KEY ("B") REFERENCES "StorageTechnology"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OperationsTechnologyToProfile" ADD FOREIGN KEY ("A") REFERENCES "OperationsTechnology"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OperationsTechnologyToProfile" ADD FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationWantedToProfile" ADD FOREIGN KEY ("A") REFERENCES "LocationWanted"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationWantedToProfile" ADD FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
