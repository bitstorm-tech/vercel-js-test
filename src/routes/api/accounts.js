import prismaClient from "$lib/prisma";

export async function get() {
  const accounts = await prismaClient.account.findMany();
  return {
    body: accounts,
  };
}
