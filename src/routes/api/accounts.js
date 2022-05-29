import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function get() {
  console.log("############## prisma:", prisma);
  const accounts = await prisma.account.findMany();
  return {
    body: accounts,
  };
}
