import { randomString } from "$lib/foobar";
import prismaClient from "../../lib/prisma";

export async function get() {
  const accounts = await prismaClient.account.findMany();
  const rndStr = randomString();
  console.log("Random String:", rndStr);
  console.log("Acounts:", accounts);
  return {
    body: accounts,
  };
}
