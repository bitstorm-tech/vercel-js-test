import prismaClient from "../../lib/prisma";

export async function get() {
  const accounts = prismaClient.account.findMany();
  return {
    body: accounts,
  };
}
