////  SCHEMA PRISMA /////
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Prisma {
  id            Int         @id@default(autoincrement())
  name          String      @db.VarChar(255)
  lastname      String      @db.VarChar(255)
  email         String      @db.VarChar(255)
  password      String      @db.VarChar(255)
  createdAt     DateTime    @default(now())
  updateAt      DateTime    @updatedAt
  }