import { prisma } from "../../lib/prisma";

export async function get() {
  const accounts = prisma.account.findMany();
  return {
    body: accounts,
  };
}
