import prismaClient from "$lib/prisma";

export async function get() {
  console.log("prismaClient:", prismaClient);
  const accounts = await prismaClient.account.findMany();
  return {
    body: accounts,
  };
}
